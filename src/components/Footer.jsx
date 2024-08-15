const Footer = () => {
  return (
    <div className="bg-white py-16">
      <div className="">
        <hr className="  h-1  mx-11 bg-gray-300  " />
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 text-black mx-11">
        <div className="justify-start">2022-2024 netsh UG. All rights reserved</div>
        <div className="">
          <ul className="flex gap-5 underline justify-end">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookies Settings</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
