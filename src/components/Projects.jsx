import Slider from "react-slick";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Remove arrows for a clean mobile look
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6">Ongoing Projects</h3>
        <Slider {...settings}>
          {/* Project 1 */}
          <div className="shadow-lg p-4">
            <img src="src/assets/project1.png" alt="Vintage Villa" className="mb-4 rounded" />
            <h4 className="font-semibold">Vintage Villa</h4>
            <p className="text-sm text-gray-600">123 Arbor St, San Jose</p>
          </div>
          {/* Project 2 */}
          <div className="shadow-lg p-4">
            <img src="src/assets/project2.png" alt="Tanga Villa" className="mb-4 rounded" />
            <h4 className="font-semibold">Tanga Villa</h4>
            <p className="text-sm text-gray-600">3893 Theming St, Spain 81038</p>
          </div>
          {/* Project 3 */}
          <div className="shadow-lg p-4">
            <img src="src/assets/project3.png" alt="Penthouse" className="mb-4 rounded" />
            <h4 className="font-semibold">Penthouse</h4>
            <p className="text-sm text-gray-600">2481 Realty Ln, New York</p>
          </div>
          {/* Project 4 */}
          <div className="shadow-lg p-4">
            <img src="src/assets/project4.png" alt="Smart City" className="mb-4 rounded" />
            <h4 className="font-semibold">Smart City</h4>
            <p className="text-sm text-gray-600">2779 Astro St, Dubai</p>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
