import A1 from "../../components/assets/hero.mp4";
import A2 from "../../components/assets/dasmore.png";
import A3 from "../../components/assets/filter.jpeg";
import A4 from "../../components/assets//patfilter.png";
import A5 from "../../components/assets/dasmorelast.jpeg";
function Dasmore() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between mt-[4rem] 2xl:pt-[8rem]  2xl:px-[15rem] lg:pt-[6rem] xl:pt-[6rem]  2xl:mx-[1rem] lg:mx-[10rem] xl:mx-[10rem] pt-[2rem] mx-[0rem]">
        <h1 className="font-bold text-2xl lg:text-7xl tracking-wider text-[#1C1C1C]">
          DASMORE
        </h1>
        <p className="text-[#1C1C1C] 2xl:text-2xl font-bold">UI / Branding</p>
      </div>
      <div className="lg:flex flex-col hidden  lg:flex-row items-center justify-between 2xl:mt-[6rem] lg:mt-[6rem] xl:mt-[6rem] mt-[4rem] mx-[2rem] 2xl:mx-[15rem] lg:mx-[6rem] xl:mx-[8rem]">
        <h1 className="font-bold text-2xl text-[#1C1C1C] text-center ml-0">
          THE CLIENT
        </h1>
        <p className="text-[#1C1C1C] font-normal 3xl:w-[1000px] 2xl:w-[800px] xl:w-[800px] lg:w-[900px] mt-6 text-lg">
          DasMore Solutions LLC is a deep-tech company focused on solving one of
          the world’s most urgent environmental issues — PFAS and heavy metals
          in water. Led by Dr. Gautham P. Das, a recognized expert in civil and
          environmental engineering, the company licenses its patented water
          filtration technology to innovators and organizations building
          sustainable water solutions.
        </p>
      </div>
      <div className="mt-[4rem] mx-[2rem] 2xl:mx-[15rem]  items-center lg:mx-[6rem] xl:mx-[8rem]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full rounded-3xl"
        >
          <source src={A1} type="video/mp4" />
        </video>
      </div>
      <div className="flex flex-col lg:hidden  lg:flex-row items-center justify-between 2xl:mt-[6rem] lg:mt-[6rem] xl:mt-[6rem] mt-[2rem] mx-[2rem] 2xl:mx-[15rem] lg:mx-[6rem] xl:mx-[8rem]">
        <h1 className="font-bold text-2xl text-[#1C1C1C] text-center ml-0">
          THE CLIENT
        </h1>
        <p className="text-[#1C1C1C] font-normal 3xl:w-[1000px] 2xl:w-[800px] xl:w-[800px] lg:w-[900px] mt-6 text-lg">
          DasMore Solutions LLC is a deep-tech company focused on solving one of
          the world’s most urgent environmental issues — PFAS and heavy metals
          in water. Led by Dr. Gautham P. Das, a recognized expert in civil and
          environmental engineering, the company licenses its patented water
          filtration technology to innovators and organizations building
          sustainable water solutions.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:space-x-8 2xl:px-[8rem] lg:mx-[6rem] xl:mx-[8rem] mx-[2rem] mt-[6rem]">
        <img
          src={A2}
          alt="fabreco"
          className="rounded-xl lg:w-1/2 w-full h-full bg-black"
        />

        <div className="text-[#1C1C1C] font-medium 3xl:space-y-10 2xl:space-y-6 xl:space-y-6 lg:space-y-6 space-y-4">
          <p className="text-2xl font-bold">THE CHALLENGE</p>
          <div className="space-y-6 text-lg 3xl:space-y-12 2xl:space-y-6 xl:spaxe-y-6 lg:space-y-6">
            <p>
              DasMore Solutions needed a clear and compelling digital presence
              that aligned with its scientific authority while remaining
              accessible to potential partners and licensees. Their previous
              identity lacked modern UX, brand consistency, and clarity in
              communicating their unique licensing-based business model.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[4rem] mx-[2rem] 2xl:mx-[15rem] lg:mx-[6rem] xl:mx-[8rem] flex items-center justify-center">
        <img
          src={A3}
          alt="fabreco"
          className="h-[50rem] rounded-3xl bg-black"
        />
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between items-center space-y-10 lg:space-x-10 2xl:px-[8rem] lg:mx-[6rem] xl:mx-[8rem] mx-[2rem] mt-[3rem] lg:mt-[12rem]">
        <img
          src={A4}
          alt="fabreco"
          className="lg:w-1/2 w-[70%] h-full rounded-3xl"
        />

        <div className="text-[#1C1C1C] font-medium 3xl:space-y-10 2xl:space-y-6 xl:space-y-6 lg:space-y-6 space-y-4">
          <p className="text-[#1C1C1C] text-2xl font-bold">THE APPROACH</p>

          <div className="space-y-6 text-lg 3xl:space-y-8 2xl:space-y-6 xl:spaxe-y-6 lg:space-y-6">
            <p>
              Palnesto followed a structured design and development process to
              elevate DasMore’s brand and web experience:
            </p>
            <p>
              Conducted market and competitor analysis in the water filtration
              space.
            </p>

            <p>
              Designed a clean and professional brand identity to reflect
              scientific credibility and trust.
            </p>

            <p>
              Created a modular layout system for future scalability and easy
              content updates.
            </p>
            <p>
              Structured the site around licensing engagement flows to guide
              innovators through accessing the technology.
            </p>
            <p>
              Used intuitive storytelling and visual hierarchy to simplify
              complex technical content.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between items-center space-y-10 2xl:px-[8rem] lg:mx-[6rem] xl:mx-[8rem] mx-[2rem] space-x-10 my-[5rem] lg:my-[12rem]">
        <div className="text-[#1C1C1C] text-lg 3xl:space-y-10 2xl:space-y-6 xl:space-y-6 lg:space-y-6 space-y-4">
          <div className="space-y-6 text-lg 3xl:space-y-10 2xl:space-y-6 xl:space-y-6 lg:space-y-6">
            <p className="text-2xl font-bold">THE SOLUTION</p>
            <p>
              We built a fast, secure, and easy-to-navigate platform with the
              following components:
            </p>

            <p>
              A modern, responsive website built on the MERN stack (MongoDB,
              Express.js, React.js, Node.js).
            </p>

            <p>
              A clear partnership journey highlighting patent access, team
              expertise, and onboarding steps.
            </p>
            <p>
              Clean UI/UX optimized for academic institutions, engineering
              firms, and sustainability innovators.
            </p>
            <p>
              A licensing call-to-action with integrated forms and documentation
              sections for Non-Exclusive Licensing Agreements and Materials
              Transfer Agreements.
            </p>
          </div>
          <img
            src={A5}
            alt="fabreco"
            className="lg:w-1/2 w-full h-full lg:hidden"
          />
        </div>
        <img
          src={A5}
          alt="fabreco"
          className="lg:w-1/2 w-full h-full hidden lg:block"
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between 2xl:my-[6rem] lg:my-[6rem] xl:my-[6rem] my-[2rem] mx-[2rem] 2xl:mx-[15rem] lg:mx-[6rem] xl:mx-[8rem]">
        <h1 className="font-bold text-2xl text-[#1C1C1C] text-center ml-0">
          NOTE
        </h1>
        <p className="text-[#1C1C1C] font-normal 3xl:w-[1000px] 2xl:w-[800px] xl:w-[800px] lg:w-[900px] mt-6 text-lg">
          The MVP focuses on branding, UI/UX, and informative content. Future
          expansions will include a partner dashboard and integrated application
          process for potential licensees.
        </p>
      </div>
    </>
  );
}

export default Dasmore;
