import gif from "../../components/assets/dsglobal-1.gif";
function DSGlobal() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between mt-[4rem] 2xl:pt-[8rem]  2xl:px-[15rem] lg:pt-[6rem] xl:pt-[6rem]  2xl:mx-[1rem] lg:mx-[10rem] xl:mx-[10rem] pt-[2rem] mx-[0rem]">
        <h1 className="font-bold text-2xl lg:text-7xl tracking-wider text-[#1C1C1C]">
          D&S Global Solutions
        </h1>
        <p className="text-[#1C1C1C] 2xl:text-2xl font-bold">UI / BRANDING</p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between 2xl:mt-[6rem] lg:mt-[6rem] xl:mt-[6rem] mt-[4rem]  mx-[2rem] 2xl:mx-[15rem] lg:mx-[6rem] xl:mx-[8rem]">
        <h1 className="font-bold text-2xl text-[#1C1C1C] ml-0">THE CLIENT</h1>
        <p className="text-[#1C1C1C] font-normal 3xl:w-[1000px] 2xl:w-[800px] xl:w-[800px] lg:w-[900px] mt-6 text-lg">
          Since its inception in 1997, D&S Global Solutions has served clients
          in more than 170 countries throughout the world. D&S exceeds the
          expectations of today’s global business climate because they recognise
          the value of teamwork and the importance of the customer’s experience.
        </p>
      </div>
      <div className="mt-[4rem] mx-[4rem] lg:mx-[6rem] xl:mx-[8rem] 2xl:mx-[15rem] flex justify-center items-center">
        <img src={gif} alt="fabreco" className="w-full rounded-3xl" />
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between 2xl:px-[8rem] lg:mx-[6rem] xl:mx-[8rem] mx-[2rem]">
        <div className="text-[#1C1C1C] font-medium mt-[6rem] space-y-10">
          <p className="text-[#1C1C1C] text-2xl font-bold">THE CHALLENGE</p>
          <h1 className="text-lg">
            D&S Global Solutions had difficulty conveying information to its
            long-term client Dell Technologies about their recent new project,
            which was powered by artificial intelligence and machine learning to
            improve logistics optimization
          </h1>
        </div>
      </div>
      <div className="2xl:px-[8rem] 2xl:py-20 lg:mx-[6rem] xl:mx-[8rem] mx-[2rem] mt-[2rem] ">
        <iframe
          src="https://www.youtube.com/embed/v27-3rs6_C8?autoplay=1&mute=1"
          title="D&S Global Solutions"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="w-full h-[40rem] rounded-3xl"
        ></iframe>
      </div>
      <div className="flex flex-col lg:flex-row 2xl:px-[8rem] lg:mx-[6rem] xl:mx-[8rem] mx-[2rem]">
        <div className="text-[#1C1C1C] font-medium mt-[4rem] space-y-10">
          <p className="text-[#1C1C1C] font-bold text-2xl">THE APPROACH</p>
          <h1 className="text-lg">
            Following a rigorous audit and exhaustive analysis, a cohesive
            verbal narrative of all the product’s essential components was
            established. Following that, a team of designers created the best
            frames to capture the meaning and deliver solutions in the most
            engaging way possible. The film was divided into two parts: long and
            short, and it was used at various stages of inbound marketing
            strategies. The product not only made product awareness easier to
            advertise but it was also used for product teaching, both of which
            were not possible with a standard PPT
          </h1>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row 2xl:px-[8rem] 2xl:py-20 lg:mx-[6rem] xl:mx-[8rem] mx-[2rem] mt-[2rem] lg:pb-20">
        <div className="text-[#1C1C1C] font-medium mt-[6rem] ">
          <p className="text-[#1C1C1C] font-bold text-2xl">THE SOLUTION</p>
          <h1 className="mt-8 text-lg">
            <span className="font-bold">STRATEGY: </span>
            Given the presenter’s long history and wide range of experience, as
            well as the fact that the audience was made up of senior Dell
            management members, our design team chose a corporate 2D style
            inspired by Dell’s colour scheme to create simple, yet eye-catching
            designs to make it easy to watch and understand complex product
            parameters and functions in a simplified art style via video.
          </h1>
          <h1 className="mt-4 text-lg">
            <span className="font-bold">IMPACT: </span>
            We were happy to hear that the marketing and sales teams at D&S
            Global Solution were satisfied with the result.
          </h1>
        </div>
      </div>

      {/* <div className="my-[4rem] mx-[4rem] flex flex-col lg:flex-row justify-center items-center lg:space-x-8">
        <img
          src="/fabreco-1.jpg"
          alt="Approach"
          className="object-cover transition duration-300 ease-in-out hover:scale-95 w-80 h-80"
        />
        <img
          src="/fabreco-2.gif"
          alt="Image 1"
          className="object-cover transition duration-300 ease-in-out hover:scale-95 w-80 h-80"
        />
      </div> */}
    </>
  );
}

export default DSGlobal;
