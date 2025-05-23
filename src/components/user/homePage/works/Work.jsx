import WorkCard from "./WorkCard";
import Workflow from "./Workflow";
import myImg from '../../../../assets/img/home/work_start.svg'

export default function Work() {
  return (
    <section className="w-[95%] mx-auto rounded-xl   mt-22 relative ">
    <h2 className="bg-[#3B82F6] mx-auto z-20 relative -bottom-3 text-white font-bold w-fit px-14 py-2 text-center rounded-md">
      How It Works
    </h2>
    <div className="absolute w-40 h-40 border-[#3B82F6] border-14 rounded-full -top-12 -right-10  -z-10 hidden lg:block"></div>
  
    <div className=" bg-[#003F7D] relative z-10  rounded-2xl py-12 px-3 items-start flex md:items-center md:justify-center gap-2 ">
      <WorkCard text="Loss job seeker" img={myImg} />
      <Workflow />
    
      
    </div>
  </section>
  
  )
}
