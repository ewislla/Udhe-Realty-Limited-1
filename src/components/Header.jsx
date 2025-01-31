const Header = () => (
  <header className="bg-[#AFD4E2]  fixed top-0 w-full z-10">
    <nav className="container mx-auto flex justify-between items-center py-4 px-6">
      <h1 className="text-lg font-bold">UDHE</h1>
      <ul className="flex space-x-6">
        <li><a href="#home" className="hover:text-blue-600">Home</a></li>
        <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
        <li><a href="#vision" className="hover:text-blue-600">Vision</a></li>
        <li><a href="#about" className="hover:text-blue-600">About</a></li>
        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
