import { useState } from "react";
import logo from "../assets/images/logo.png";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const [open , setOpen] = useState<boolean>(false)

  const handleOpen = () => setOpen(!open);

  console.log(open);
  
  return (
    <div className="bg-purple-400">
      <div className="md:max-w-5xl mx-auto p-1 ">
        <div className="flex justify-between items-center">
          <img
            src={logo}
            alt=""
            className="w-[60px] h-[60px] md:w-[80px] md:h-[80px]"
          />
          <div className="">
            <button onClick={handleOpen}>
              <FaBars className="w-[30px] h-[30px] text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
