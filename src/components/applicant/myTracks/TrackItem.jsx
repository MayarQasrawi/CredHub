import ProgressBar from "./ProgressBar";
import { RiArrowRightLine } from "react-icons/ri";
export default function TrackItem({ name, img }) {
  const formattedName =
    name.toLowerCase().includes("front end") ||
    name.toLowerCase().includes("back end") ? (
      <>
        {name}
        <span className="text-white">Development</span>
      </>
    ) : (
      name
    );

  return (
    <div className="bg-[#FDFDFD] shadow-lg p-4 rounded-2xl xl:w-[50%] lg:w-[60%] md:w-[75%] sm:w-[85%] w-[90%]">
      <span className="text-black mb-2 block font-mono font-bold">IN PROGRESS</span>
      <h2 className="text-[18px] w-fit rounded-2xl px-4 py-1 mb-2.5  xl:hidden text-[#3B82F6] font-bold bg-[#E7ECFF]">
            {formattedName}
          </h2>
      <div className="flex mt-2.5 flex-wrap gap-3">
        <div className="bg-[#003F7D] justify-center xl:justify-start w-full md:w-[60%]  px-4 py-6 rounded-4xl flex gap-3.5 items-center">
          <img src={img} className="w-[120px]" alt={name} />
          <h2 className="text-2xl hidden xl:block text-[#3B82F6] font-bold text-center">
            {formattedName}
          </h2>
        </div>
      </div>
      <div className="mt-2.5 flex flex-wrap gap-3 items-center justify-between">
        <ProgressBar />
        <button className="bg-[#3B82F6] flex  hover:bg-[#2A5C8A] transition items-center gap-2 px-6 rounded-md text-[18px] font-mono font-bold border-3 border-[#EBEBEB] py-1 text-white cursor-pointer">
          Continue <RiArrowRightLine className="font-bold text-2xl" />
        </button>
      </div>
    </div>
  );
}
