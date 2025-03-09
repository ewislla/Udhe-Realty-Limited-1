const About = () => (
  <section id="about" className="py-20 bg-gray-50">
    <div className="container mx-auto flex flex-col lg:flex-row items-center">
      <img src="/images/about.jpg" alt="About Us" className="rounded-lg mb-6 lg:mb-0 lg:mr-8 w-1/2" />
      <div>
        <h3 className="text-3xl font-bold mb-4">About Us</h3>
        <p className="text-gray-700">
          Udhe Realty Limited is a global real estate company committed to excellence, innovation, and trust. We connect buyers,
          sellers, and investors with premium properties, from luxury residences to commercial spaces.
        </p>
      </div>
    </div>
  </section>
);

export default About;
