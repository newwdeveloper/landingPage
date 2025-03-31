const AboutUs = () => {
  const handleScrollToForm = () => {
    const formSection = document.getElementById("contact-form");
    if (formSection) {
      const yOffset = -80; // Adjust to scroll a bit above the form
      const y =
        formSection.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });

      // Add highlight effect
      formSection.classList.add("ring-4", "ring-blue-500");

      // Auto-focus the first input after scrolling completes
      setTimeout(() => {
        formSection.classList.remove("ring-4", "ring-blue-500");
        const firstInput = formSection.querySelector("input");
        if (firstInput) {
          firstInput.focus();
        }
      }, 800);
    }
  };

  return (
    <div className="bg-blue-900 text-white text-center py-16 px-6">
      <h2 className="text-3xl font-bold mb-4">A Little Bit About Us</h2>
      <p className="max-w-3xl mx-auto text-lg mb-6">
        All the Lorem Ipsum generators on the Internet tend to repeat predefined
        chunks as necessary, making this first true generator on the Internet.
      </p>
      <div className="flex justify-center items-center">
        <button
          onClick={handleScrollToForm}
          className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
