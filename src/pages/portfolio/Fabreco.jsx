import A1 from "../../components/assets/fabreco-in.png";
import A2 from "../../components/assets/fabreco-1.jpg";
import A3 from "../../components/assets/fabreco-2.gif";
function Fabreco() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between 2xl:pt-[8rem]  2xl:px-[15rem] lg:pt-[6rem] xl:pt-[6rem]  2xl:mx-[1rem] lg:mx-[10rem] xl:mx-[10rem] pt-[2rem] mx-[0rem]">
        <h1 className="font-bold text-2xl lg:text-7xl tracking-wider text-[#1C1C1C]">
          FABRECO
        </h1>
        <p className="text-[#1C1C1C] lg:text-2xl font-bold">UI / BRANDING</p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between 2xl:mt-[6rem] lg:mt-[6rem] xl:mt-[6rem] mt-[4rem]  mx-[2rem] 2xl:mx-[15rem] lg:mx-[6rem] xl:mx-[8rem]">
        <h1 className="font-bold text-2xl text-[#1C1C1C] ml-0">THE CLIENT</h1>
        <p className="text-[#1C1C1C] font-normal 3xl:w-[1000px] 2xl:w-[800px] xl:w-[800px] lg:w-[900px] mt-6 text-lg">
          Fabreco is a fast-moving consumer goods (FMCG) firm that specialises
          in fabric care products. They’re on a quest to put an end to all
          fabric-related nightmares. You can get rid of wrinkles and clean your
          clothing at the same time with this magic spray, which was created for
          the first time in India.
        </p>
      </div>
      <div className="mt-[4rem] mx-[2rem] 2xl:mx-[15rem] items-center lg:mx-[6rem] xl:mx-[8rem]">
        <img src={A1} alt="fabreco" className="rounded-3xl" />
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between 2xl:px-[8rem] lg:mx-[6rem] xl:mx-[8rem] mx-[2rem]">
        <div className="text-[#1C1C1C] font-medium mt-[6rem] space-y-10">
          <p className="text-[#1C1C1C] text-2xl font-bold">THE CHALLENGE</p>
          <h1 className="text-lg">
            Creating an identity that conveyed to customers that the brand’s
            products were safe for the environment and free of synthetic
            chemicals was our primary goal.
          </h1>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row 2xl:px-[8rem] lg:mx-[6rem] xl:mx-[8rem] mx-[2rem]">
        <div className="text-[#1C1C1C] font-medium mt-[4rem] space-y-10">
          <p className="text-[#1C1C1C] font-bold text-2xl">THE APPROACH</p>
          <h1 className="text-lg">
            We utilised an illustration of a t-shirt with a leaf on it as the
            basis for our logo. After creating the logo, we began working on the
            packaging. Because of the bottle’s unusual form, we were forced to
            design it under tight conditions, yet our team came up with the best
            solution.
          </h1>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row 2xl:px-[8rem] lg:mx-[6rem] xl:mx-[8rem] mx-[2rem]">
        <div className="text-[#1C1C1C] font-medium mt-[6rem] ">
          <p className="text-[#1C1C1C] font-bold text-2xl">THE SOLUTION</p>
          <h1 className="mt-4 text-lg">
            <span className="font-bold">IMPACT: </span>
            Fabreco focuses on items that save time and are easy to use. An
            instant wrinkle remover developed by Fabreco eliminates wrinkles
            without the need for iron in just a few seconds. It was the goal of
            the founders to create a brand that connects with people and
            supports them in their daily lives.
          </h1>
        </div>
      </div>

      <div className="my-[4rem] mx-[2rem] flex flex-col lg:flex-row justify-center items-center lg:space-x-8 lg:px-[20rem] xl:px-[10rem] ">
        <img
          src={A2}
          alt="Approach"
          className="object-cover transition duration-300 ease-in-out hover:scale-95 w-80 h-80"
        />
        <img
          src={A3}
          alt="Image 1"
          className="object-cover transition duration-300 ease-in-out hover:scale-95 w-80 h-80"
        />
      </div>
    </>
  );
}

export default Fabreco;
