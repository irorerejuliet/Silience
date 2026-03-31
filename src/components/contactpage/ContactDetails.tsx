

const ContactDetails = () => {
  return (
    <section className=" bg-white px-4 pt-8 pb-52">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <h2 className="text-sm font-semibold text-gray-800">Contact</h2>

        {/* Right Side (Form) */}
        <form className="space-y-2 px-4">
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="">
              <label className="block mb-2 text-sm  font-semibold text-black">
                Name
              </label>
              <input
                type="text"
                className=" border-b border-black bg-transparentpy-2 w-full  outline-none"
              />
            </div>

            <div>
              <label className="block text-sm  font-semibold text-black mb-2 ">
                Email
              </label>
              <input
                type="email"
                className=" border-b border-black bg-transparent outline-none  w-full "
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm  font-semibold text-black  ">
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full border-b border-black bg-transparent outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm  font-semibold text-black mb-2 ">
              Message
            </label>
            <textarea
              rows={6}
              placeholder="Message"
              className="w-full border border-black p-3 outline-none "
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-black text-white px-8 py-2 lg:w-154 w-full "
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactDetails;
