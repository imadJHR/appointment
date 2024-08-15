const About = () => {
  return (
    <>
      <div className=" bg-purple-400 py-32 text-black grid sm:grid-cols-1 md:grid-cols-2">
        <div className="py-24 mx-16">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">
              Save Time and Book Appoinments <br />
              Easily With appointmentnow.eu
            </h1>
            <p>
              appointmentnow.eu is the ultimate solution for hassle-free
              apointment booking.
              <br />
              Our platform allows you to book appointments with ease, saving you
              time and effort.
            </p>
          </div>
          <div className="mt-11 max-w-screen-md flex gap-6 ">
            <div className="">
              <h1 className="font-bold">Time-saving</h1>
              <p>
                appointmentnow.eu offers a simple and user-friendly platform
                that allows you to book appointments from various German
                websites quickly and conveniently.
              </p>
            </div>
            <div>
              <h1 className="font-bold">Convenience</h1>
              <p>
                Our platform is designed to be user-friendly and easy to use.
                You can easily find and secure the appointments you need.
              </p>
            </div>
          </div>
        </div>
        <div>
          <ul className="flex flex-col items-center py-36 justify-center gap-8">
            <li className="border-2 border-[#5F5F86] text-[#5F5F86] px-11 rounded-lg py-2">services</li>
            <li className="border-2 border-[#5F5F86] text-[#5F5F86] px-11 rounded-lg py-2">location</li>
            <button className="border-2 border-[#4543FB] bg-[#4543FB] text-white rounded-lg px-9 py-2">
              Book Now
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
