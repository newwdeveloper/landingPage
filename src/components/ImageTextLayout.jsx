import React from "react";
import img1 from "../assets/portrait-young-worker-hard-hat-large-metalworking-plant.jpg";
import img2 from "../assets/istockphoto-92266333-612x612.jpg";

const ImageTextSection = ({ image, title, description, reverse }) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-6 p-6`}
    >
      <img
        src={image}
        alt={title}
        className="w-full md:w-1/2 rounded-lg shadow-lg"
      />
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const ImageTextLayout = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <ImageTextSection
        image={img1} // Replace with actual image paths
        title="Lorem ipsum dolor"
        description="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures."
      />
      <ImageTextSection
        image={img2}
        title="Lorem ipsum dolor"
        description="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures."
        reverse
      />
    </div>
  );
};

export default ImageTextLayout;
