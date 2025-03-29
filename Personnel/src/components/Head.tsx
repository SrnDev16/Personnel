import { useContext } from "react";
import { DataContext } from "./Personnel";

const Head = () => {
  const dataText = useContext(DataContext);
  return (
    // <div class="h-screen bg-[url('https://source.unsplash.com/random/1920x1080')] bg-cover bg-center">
    <div className="h-[1/3] bg-[url('/Users/apple/Documents/Personnel/Personnel/src/assets/images/cover.avif')] bg-cover bg-center rounded-lg">
      <div className=" text-white min-h-40 bg-black/50 p-4 rounded-lg flex flex-col items-center justify-center text-center">
        <h1 className=" text-4xl font-bold">{dataText?.data}</h1>
        <br />
        <p>สพม. บึงกาฬ "เรียนดี มีความสุข"</p>
        <p>"จับมือไว้แล้วไปด้วยกัน"</p>
      </div>
    </div>
  );
};

export default Head;
