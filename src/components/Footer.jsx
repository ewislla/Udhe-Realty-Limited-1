const Footer = () => (
  <footer className="bg-blue-600 text-white py-8">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h4 className="font-bold text-lg mb-4">UDHE</h4>
        <p>21B Thornridge Cir, Dubai, UAE 35624</p>
        <p>+43 456 63596-9</p>
        <p>contact@udherealty.com</p>
      </div>
      <div>
        <h4 className="font-bold text-lg mb-4">Quick Links</h4>
        <ul>
          <li><a href="#home" className="hover:text-gray-200">Home</a></li>
          <li><a href="#projects" className="hover:text-gray-200">Projects</a></li>
          <li><a href="#vision" className="hover:text-gray-200">Vision</a></li>
          <li><a href="#about" className="hover:text-gray-200">About</a></li>
          <li><a href="#contact" className="hover:text-gray-200">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-lg mb-4">Social Media</h4>
        {/* <ul>
          <li><a href="#" className="hover:text-gray-200">Facebook</a></li>
          <li><a href="#" className="hover:text-gray-200">Twitter</a></li>
          <li><a href="#" className="hover:text-gray-200">YouTube</a></li>
          <li><a href="#" className="hover:text-gray-200">LinkedIn</a></li>
        </ul>  */}
      </div>
    </div>
    <div className="text-center mt-8 text-sm text-gray-300">
      © {new Date().getFullYear()} Udhe Realty Limited Inc. All rights reserved.
    </div>
  </footer>
);

export default Footer;
