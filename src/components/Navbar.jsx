

const Navbar = () => {
  return (
    <div className="flex justify-between lg:items-center py-2 lg:py-2 text-end bg-white ">
      <div className="">
        <div className="">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Contact </a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <details>
                  <summary>About Us</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li >
              <details >
                <summary>About Us</summary>
                <ul className="p-2 bg-white flex flex-col">
                  <li>
                    <a></a>
                  </li>
                  <li>
                    <a></a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
      <div className="">
        <a className=" mx-11 block w-full rounded bg-purple-500 px-6 py-3 text-sm font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-500 sm:w-auto ">Book Now</a>
      </div>
    </div>
  );
};

export default Navbar;
