import image from "../assets/bgImage.avif";

const Hero = () => {
  return (
    <section className=" flex bg-cover bg-purple-600   ">
      <div className="container mx-auto max-w-screen px-4 py-32 sm:px-6 lg:flex gap-5 lg:h-screen lg:items-center lg:px-8">
        <div className="space-y-7 text-left ">
          <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
            Get Appointments Easily <br />
            with appointmentnow.eu
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Termin.eu is the solution for hassle-free appointment booking in
            Germany
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-purple-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-500 sm:w-auto"
            >
              Book Now
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-purple-600 shadow hover:text-purple-700 focus:outline-none focus:ring active:text-purple-500 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className=" space-x-5 gap-7 m-11 ">
          <img
            src={image}
            alt="image"
            className="object-cover rounded h-full w-full "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
