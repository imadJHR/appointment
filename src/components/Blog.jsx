const blogItem = [
  {
    id: 1,
    image:
      "https://img.freepik.com/photos-gratuite/main-femme-dactylographie-clavier-ordinateur-portable_1150-15742.jpg?t=st=1723741852~exp=1723745452~hmac=24e8e804295f180a0b9516f33b6c732de525ffebe9518c209b1db079c84eb932&w=996 ",
    title: "Easy Booking Process ",
    description:
      " Our platform simplifies the appointment booking process,saving you time and effort",
  },
  {
    id: 2,
    image:
      " https://img.freepik.com/photos-gratuite/petit-drapeau-allemagne-ville-floue_485709-15.jpg?t=st=1723741921~exp=1723745521~hmac=95bbe9bb6316f196d93c3a3a6b32eaf154c6b5a4a805a0f7e92d89c66accedb9&w=996",
    title: "Wide Range of Services ",
    description:
      "Find appointment for various services,from healthcare to govement agencies ",
  },
  {
    id: 3,
    image:
      " https://img.freepik.com/vecteurs-libre/fond-technologie-lignes-vitesse-qui-coule_1017-31772.jpg?t=st=1723741956~exp=1723745556~hmac=db1fc3234b9555823cf16135bf46c96ab87c1c64a59ab1dd592899091c913f36&w=996",
    title: " Fastest Appointments",
    description:
      "Get the earliest available appointement, ensuring you don't have to wait  ",
  },
];
const Blog = () => {
  return (
    <div >
      <div className=" ">
      <article className="mt-8 grid gap-4 grid-cols-1 md:grid-cols-3">
        {blogItem.map((item, index) => (
          // eslint-disable-next-line react/jsx-key
          <div
            key={index}
            className="mx-16 items-center justify-center cursor-pointer "
          >
           <a href=""> <img alt="" src={item.image} className="h-56 w-full object-cover " /></a>

            <div className="bg-white p-4 sm:p-6">
              <h3 className="mt-0.5 text-xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </article>
      </div>
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
  );
};

export default Blog;
