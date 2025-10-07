import A1 from "../../components/assets/smart.png";
import A2 from "../../components/assets//approach.jpg";
import A3 from "../../components/assets/imges1.jpg";
import A4 from "../../components/assets/girl.jpg";
const SmartInternz = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between 2xl:pt-[8rem] 2xl:px-[15rem] lg:pt-[6rem] xl:pt-[6rem]  2xl:mx-[1rem] lg:mx-[10rem] xl:mx-[10rem] pt-[2rem] mx-[0rem]">
        <h1 className="font-bold text-2xl 2xl:text-7xl tracking-wider text-[#1C1C1C]">
          SMARTINTERNZ
        </h1>
        <p className="text-[#1C1C1C] 2xl:text-2xl font-bold">UI / BRANDING</p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between mt-[2rem] lg:mt-[6rem] mx-[2rem] 2xl:mx-[15rem] lg:mx-[6rem] xl:mx-[8rem]">
        <h1 className="font-bold text-2xl text-[#1C1C1C] ml-0">THE CLIENT</h1>
        <p className="text-[#1C1C1C] font-normal 3xl:w-[1000px] 2xl:w-[800px] xl:w-[800px] lg:w-[900px]  mt-6 text-lg">
          SMARTBRIDGE is an EdTech company to bridge the divide between academia
          and the corporate sector. Their outcome-based experiential learning
          programmes in emerging technologies (Internet of Things, Machine
          Learning, Data Science, Artificial Intelligence, and Robotics) are
          preparing talented entry-level engineers for the corporate world. The
          parent firm of SmartInternz, SMARTBRIDGE, was launching a new service
          that would allow students to apply for various externships through
          their new website. The purpose of this initiative was to bring
          academia and industry together for the common goal of creating talent
          through their experiential learning and development environments. By
          utilising the platform, students will be able to pursue a successful
          career path while meeting the demands of the business.
        </p>
      </div>
      <div className="mt-[4rem] mx-[2rem] 2xl:mx-[15rem] items-center lg:mx-[6rem] xl:mx-[8rem]">
        <img src={A1} alt="fabreco" className="rounded-3xl" />
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between 2xl:px-[8rem] lg:mx-[6rem] xl:mx-[8rem] mx-[2rem]">
        <div className="text-[#1C1C1C] font-medium mt-[6rem] space-y-10">
          <p className="text-[#1C1C1C] text-2xl font-bold">THE CHALLENGE</p>
          <h1 className="text-lg">
            The logo should be both engaging and modern for the students who
            visit the site, as well as professional enough to approach different
            educational institutions.
          </h1>
        </div>
      </div>
      <div className="2xl:px-[8rem] 2xl:py-20 lg:mx-[6rem] xl:mx-[8rem] mx-[2rem] mt-[2rem]">
        <iframe
          src="https://www.youtube.com/embed/QwLTru6T318"
          title="smartintern"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="w-full h-[40rem] rounded-3xl"
        />
      </div>
      <div className="flex flex-col lg:flex-row 2xl:px-[8rem] lg:mx-[6rem] xl:mx-[8rem] mx-[2rem]">
        <div className="text-[#1C1C1C] font-medium mt-[4rem] space-y-10">
          <p className="text-[#1C1C1C] font-bold text-2xl">THE APPROACH</p>
          <h1 className="text-lg">
            Using the previous logo directives, the task at hand was to build on
            this idea. This time, we employed extreme symmetry and largely toyed
            with squares to create the distinctive logo they required.
          </h1>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row  2xl:px-[8rem] lg:mx-[6rem] xl:mx-[8rem] mx-[2rem]">
        <div className="text-[#1C1C1C] font-medium mt-[6rem] ">
          <p className="text-[#1C1C1C] font-bold text-2xl">THE SOLUTION</p>
          <h1 className="mt-4 text-lg">
            <span className="font-bold">IMPACT: </span>
            Using the previous logo directives, the task at hand was to build on
            this idea. This time, we employed extreme symmetry and largely toyed
            with squares to create the distinctive logo they required.
          </h1>
        </div>
      </div>

      <div className="my-[4rem] mx-[2rem] flex flex-col lg:flex-row justify-center items-center lg:space-x-8 lg:px-[20rem] xl:px-[10rem] ">
        <img
          src={A2}
          alt="Approach"
          className="transition duration-300 ease-in-out hover:scale-95"
        />
        <img
          src={A3}
          alt="Image 1"
          className="transition duration-300 ease-in-out hover:scale-95"
        />
        <img
          src={A4}
          alt="Girl"
          className="transition duration-300 ease-in-out hover:scale-95"
        />
      </div>
    </>
  );
};

export default SmartInternz;
