import express from "express";
import Form from "./dbModel.js"; // Ensure correct path
import dotenv from "dotenv";
import transporter from "./nodeMailer.js";

dotenv.config();
const router = express.Router();

// API test route
router.get("/", (req, res) => {
  res.send("API is working!");
});

// Function to send email
const sendMail = (mailOption) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOption, (error, info) => {
      if (error) {
        console.error("Email error:", error);
        reject(error);
      } else {
        console.log("Email sent:", info.response);
        resolve(info);
      }
    });
  });
};

// Form submission route
router.post("/submit", async (req, res) => {
  try {
    const { firstName, lastName, email, company, phone, message } = req.body;

    // Basic validation
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ error: "Required fields are missing" });
    }

    // Save to MongoDB
    const formData = new Form(req.body);
    await formData.save();

    // Email options
    const mailOption = {
      from: `"Company Support" <${process.env.EMAIL_USER}>`,
      to: process.env.TO_EMAIL,
      subject: "📩 New Form Submission Received",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px;">
          <h2 style="color: #007bff;">New Contact Form Submission</h2>
          <p>You have received a new form submission. Below are the details:</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold;">👤 Name:</td><td style="padding: 8px;">${firstName} ${lastName}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">🏢 Company:</td><td style="padding: 8px;">${
              company || "N/A"
            }</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">✉️ Email:</td><td style="padding: 8px;">${email}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">📞 Phone:</td><td style="padding: 8px;">${
              phone || "N/A"
            }</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">📝 Message:</td><td style="padding: 8px;">${message}</td></tr>
          </table>
          <p style="margin-top: 20px; font-size: 14px;">📅 Submitted on: ${new Date().toLocaleString()}</p>
          <hr>
          <p style="font-size: 12px; color: #666;">This is an automated email. Please do not reply.</p>
        </div>
      `,
    };

    // Send email
    await sendMail(mailOption);
    console.log("Email sent successfully! Sending response...");
    res
      .status(201)
      .json({ success: true, message: "Form submitted successfully" });
  } catch (error) {
    console.error("Form submission error:", error);
    res.status(500).json({ success: false, error: "Failed to submit form" });
  }
});

export default router;
