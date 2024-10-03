const Contact = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="flex w-full bg-white  shadow-xl rounded-3xl overflow-hidden">
          {/* Contact Information Section */}
          <div className="w-1/2 text-white p-8 flex flex-col justify-between"style={{ background: 'rgba(52, 23, 72, 1)'}}>
            <div>
              <h2 className="text-3xl  font-Mastery-Kingdom mb-4">Contact Information</h2>
              <p className=" mb-32">Say something to start a live chat!</p>
              <ul className="space-y-10">
                <li className="flex items-center">
                  <i className="fas fa-phone mr-4"></i> +216 54 179 741
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-4"></i> Contact@gmail.com
                </li>
                <li className="flex items-center">
                  <i className="fas fa-map-marker-alt mr-4"></i> Akouda, Sousse
                </li>
              </ul>
            </div>
            <div className="flex space-x-4">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin-in"></i>
            </div>
          </div>
  
          {/* Contact Form Section */}
          <div className="w-2/3 p-8">
            <h2 className="text-4xl font-Mastery-Kingdom text-purple-950 mb-2">Contact Us</h2>
            <p className="text-gray-600 mb-8">Any question or remarks? Just write us a message!</p>
            <form>
              <div className="flex space-x-4 mb-4">
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  placeholder="First Name"
                  className="w-1/2 p-3 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  placeholder="Last Name"
                  className="w-1/2 p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex space-x-4 mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="w-1/2 p-3 border border-gray-300 rounded-md"
                />
                <input
                  type="tel"
                  id="phone-number"
                  name="phone-number"
                  placeholder="Phone Number"
                  className="w-1/2 p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Select Subject:</label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="subject"
                      value="General Inquiry"
                      className="mr-2"
                    />
                    General Inquiry
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="subject"
                      value="Collaboration"
                      className="mr-2"
                    />
                    Collaboration
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="subject"
                      value="Join Delivery Team"
                      className="mr-2"
                    />
                    Become one of our delivery team
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message..."
                  className="w-full p-3 border border-gray-300 rounded-md"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-3 hover:-translate-y-1 hover:scale-110 duration-300 font-semibold text-white rounded-md hover:bg-orange-300 " style={{ background: "rgba(226, 112, 61, 1)" }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  