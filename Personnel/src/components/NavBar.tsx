import { useState } from "react";
import logo from "../assets/images/logo.png";
import { FaBars } from "react-icons/fa";
import Group from "../data/Group";
import { FaAngleDown } from "react-icons/fa";

const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(!open);

  console.log(open);

  return (
    <>
      <div className="bg-purple-400 drop shadow-xl md:relative">
        <div className="md:max-w-5xl mx-auto p-1 ">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src={logo}
                alt=""
                className="w-[60px] h-[60px] md:w-[80px] md:h-[80px]"
              />
              <p className="text-white">สำนักงานเขตพื้นที่การศึกษามัธยมศึกษาบึงกาฬ</p>
            </div>
            <div className="flex items-center">
              <a
                href="#"
                className="hidden md:block text-white border-b-2 border-purple-400 hover:border-white mr-6"
              >
                หน้าแรก
              </a>
              <a
                href="#"
                onClick={handleOpen}
                className="hidden md:flex items-center text-white border-2 border-white p-1 rounded hover:bg-white hover:text-purple-400"
              >
                กลุ่มงาน <FaAngleDown className="ml-1" />
              </a>

              <button onClick={handleOpen} className="md:hidden">
                <FaBars className="w-[30px] h-[30px] text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`${!open ? "hidden" : "block"} `}>
        <ul className="border rounded ml-auto border-gray-200 md:w-2xl">
          {Group.map((item, index) => {
            return (
              <li
                key={index}
                className="border-b border-gray-100 p-1 hover:bg-gray-200"
          
              >
                <p className="text-center">{item}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
