import React from "react";
import precisionImg from "../assets/istockphoto-496680909-612x612.jpg";
import peopleCultureImg from "../assets/mid-adult-engineer-two-steel-workers-going-through-quality-reports-while-working-industrial-building.jpg";
import solutionImg from "../assets/istockphoto-459159891-612x612.jpg";
const features = [
  {
    title: "Precision",
    image: precisionImg, // Update with your actual image path
    description:
      "Precision ensures a high level of accuracy and consistency in engineering and manufacturing, minimizing errors and optimizing performance for superior results.",
  },

  {
    title: "People & Culture",
    image: peopleCultureImg, // Update with your actual image path
    description:
      "There are many variations of passages of Lorem Ipsum available, but majority have suffered alteration.",
  },
  {
    title: "Solutions at a Glance",
    image: solutionImg, // Update with your actual image path
    description:
      "There are many variations of passages of Lorem Ipsum available, but majority have suffered alteration.",
  },
];

const FeatureSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-60 object-cover rounded-lg shadow-lg"
            />
            <h2 className="text-xl font-bold mt-4">{feature.title}</h2>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
