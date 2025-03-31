import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState({ text: "", type: "" });
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!formData.company.trim())
      newErrors.company = "Company name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccessMessage({ text: "Submitting...", type: "success" });

      try {
        const response = await fetch(
          "https://landingpage-backend-x48v.onrender.com/api/form/submit",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          }
        );
        console.log("Raw response:", response);

        const data = await response.json();
        console.log("Server Response:", data);
        if (data.success) {
          setSuccessMessage({
            text: "Form submitted successfully!",
            type: "success",
          });
          setFormData({
            firstName: "",
            lastName: "",
            company: "",
            email: "",
            phone: "",
            message: "",
          });
        } else {
          setSuccessMessage({
            text: `Submission failed: ${data.message || "Unknown error"}`,
            type: "error",
          });
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setSuccessMessage({
          text: "Internal Error...Failed to submit the form.",
          type: "error", // Set type to 'error' for styling
        });
      }

      setTimeout(() => setSuccessMessage(""), 2000);
    }
  };

  return (
    <div
      id="contact-form"
      className="fixed bottom-5 right-5 md:absolute md:right-5 md:top-35"
    >
      <button
        className={`md:hidden px-4 py-2 rounded-md shadow-md transition duration-300 ${
          isFormVisible
            ? "bg-red-600 hover:bg-red-700"
            : "bg-blue-600 hover:bg-blue-700"
        } text-white`}
        onClick={() => setIsFormVisible(!isFormVisible)}
      >
        {isFormVisible ? "Close" : "Contact Us"}
      </button>

      <div
        className={`${
          isFormVisible ? "block" : "hidden"
        } md:block bg-blue-900 bg-opacity-90 p-6 rounded-lg shadow-lg mt-4 md:mt-0 w-[90vw] max-w-md`}
      >
        <h2 className="text-white text-xl font-bold text-center mb-4">
          CONTACT US TODAY
        </h2>
        {successMessage.text && (
          <div
            className={` text-white p-2 mb-3 rounded text-center  ${
              successMessage.type === "error"
                ? "bg-red-500 text-white"
                : "bg-green-500 text-white"
            }`}
          >
            {successMessage.text}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex gap-3">
            <div className="w-1/2">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 rounded bg-white text-black"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
            </div>
            <div className="w-1/2">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 rounded bg-white text-black"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
            </div>
          </div>
          <div>
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-2 rounded bg-white text-black"
            />
            {errors.company && (
              <p className="text-red-500 text-sm">{errors.company}</p>
            )}
          </div>
          <div className="flex gap-3">
            <div className="w-1/2">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 rounded bg-white text-black"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="w-1/2">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 rounded bg-white text-black"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 rounded bg-white text-black h-24"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer bg-blue-500 text-white p-2 rounded font-bold hover:bg-blue-700 transition duration-300"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
