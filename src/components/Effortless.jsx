import Blog from "./Blog";

const Effortless = () => {
  return (
    <div className="bg-white text-black py-28 ml-[64px] mt-[112px]  ">
      <div className="max-w-[768px]">
        <h1 className="font-bold ">Effortless</h1>

        <h1 className=" h-[248] text-4xl font-bold">
          Streamline Your booking Process <br /> with Ease
        </h1>
        <p>
          appointmentnow.eu offfers a simple and user-friendly platform that
          allows you to book <br /> appointments from various German websites
          quickly and conveniently.With our wide range of <br /> services and
          fastest appointment options,you can easily find and secure the
          appointments you <br /> need.{" "}
        </p>
      </div>
      <Blog />
    </div>
  );
};

export default Effortless;
