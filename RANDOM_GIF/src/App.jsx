import Random from "./components/Random";
import Tag from "./components/Tag";
import axios from 'axios';


export default function App() {
  return (
    <div className="w-full h-screen flex flex-col relative items-center overflow-x-hidden background ">
        <h1 className=" bg-white rounded-lg w-11/12 text-center
        mt-[40px] px-10 py-2 font-bold text-4xl ">RANDOM GIFS</h1>
        <div className="flex items-center gap-y-10 mt-[30px] flex-col w-full">
          <Random/>
          <Tag/>
        </div>
    </div>
  );
}
