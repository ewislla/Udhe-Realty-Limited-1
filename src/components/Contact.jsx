const Contact = () => (
  <section id="contact" className="py-20 bg-gray-50">
    <div className="container mx-auto flex flex-col md:flex-row items-center">
      <img src="/images/contact.jpg" alt="Contact Us" className="rounded-lg mb-6 md:mb-0 md:mr-8 w-1/2" />
      <form className="w-full md:w-1/2">
        <h3 className="text-3xl font-bold mb-6 text-center">Contact Us</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input type="text" placeholder="First name" className="border p-2 rounded" />
          <input type="text" placeholder="Last name" className="border p-2 rounded" />
        </div>
        <div className="mb-4">
          <input type="email" placeholder="Email address" className="border p-2 rounded w-full" />
        </div>
        <div className="mb-4">
          <textarea placeholder="Message" className="border p-2 rounded w-full"></textarea>
        </div>
        <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 w-full">Send</button>
      </form>
    </div>
  </section>
);

export default Contact;
