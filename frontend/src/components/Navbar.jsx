const Navbar = () => {
  return (
    <div className="w-full bg-gray-900 text-white shadow-md">
      <nav className="container mx-auto py-4 px-6 flex flex-wrap justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide uppercase">
          A.V. Engineering
          <span className="block text-sm text-gray-400 italic md:inline ml-2">
            Precision is our key
          </span>
        </h1>
      </nav>
    </div>
  );
};

export default Navbar;
