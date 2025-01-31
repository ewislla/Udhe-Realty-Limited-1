const Hero = () => (
  <section
    id="home"
    className="h-screen bg-cover bg-center flex flex-col justify-center items-start text-left px-6 md:px-12"
    style={{ backgroundImage: "url('src/assets/Hero.png')" }}
  >
    <div className="max-w-2xl">
      <h2 className="text-5xl font-bold text-white mb-4 leading-tight">
        Building Africa One Block at a Time
      </h2>
      <p className="text-lg text-white mb-6">
        Real estate form that makes your dreams true
      </p>
      <div className="flex space-x-4">
        <button className="bg-[#1E3240] text-white py-2 px-6 rounded hover:bg-[#162634]">
          Our Projects
        </button>
        <button className="border border-blue-600 text-blue-600 py-2 px-6 rounded hover:bg-blue-50">
          Contact Us
        </button>
      </div>
    </div>
  </section>
);

export default Hero;
