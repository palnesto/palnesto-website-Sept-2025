import A1 from "../../components/assets/nigecoin1.jpg";
import A2 from "../../components/assets/nigecoin2.gif";
import A3 from "../../components/assets/nigecoin3.png";
import A4 from "../../components/assets/nigecoin4.gif";
import A5 from "../../components/assets/nigecoin5.png";
function Nigecoin() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between mt-[4rem] 2xl:pt-[8rem]  2xl:px-[15rem] lg:pt-[6rem] xl:pt-[6rem]  2xl:mx-[1rem] lg:mx-[10rem] xl:mx-[10rem] pt-[2rem] mx-[0rem]">
        <h1 className="font-bold text-2xl lg:text-7xl tracking-wider text-[#1C1C1C]">
          NIGECOIN
        </h1>
        <p className="text-[#1C1C1C] 2xl:text-2xl font-bold">UI / Branding</p>
      </div>
      <div className="lg:flex flex-col hidden  lg:flex-row items-center justify-between 2xl:mt-[6rem] lg:mt-[6rem] xl:mt-[6rem] mt-[4rem] mx-[2rem] 2xl:mx-[15rem] lg:mx-[6rem] xl:mx-[8rem]">
        <h1 className="font-bold text-2xl text-[#1C1C1C] text-center ml-0">
          THE CLIENT
        </h1>
        <p className="text-[#1C1C1C] font-normal 3xl:w-[1000px] 2xl:w-[800px] xl:w-[800px] lg:w-[900px] mt-6 text-lg">
          Nigecoin is a Web3-powered employment platform dedicated to tackling
          unemployment in Africa by connecting job seekers with opportunities in
          the decentralized economy. The platform allows users to find jobs,
          receive payments in NIGE tokens, and leverage blockchain transparency
          for fair work.
        </p>
      </div>
      <div className="mt-[4rem] mx-[2rem] 2xl:mx-[15rem]  items-center lg:mx-[6rem] xl:mx-[8rem]">
        <img src={A1} alt="fabreco" className="w-full h-full rounded-3xl" />
      </div>
      <div className="flex flex-col lg:hidden  lg:flex-row items-center justify-between 2xl:mt-[6rem] lg:mt-[6rem] xl:mt-[6rem] mt-[2rem] mx-[2rem] 2xl:mx-[15rem] lg:mx-[6rem] xl:mx-[8rem]">
        <h1 className="font-bold text-2xl text-[#1C1C1C] text-center ml-0">
          THE CLIENT
        </h1>
        <p className="text-[#1C1C1C] font-normal 3xl:w-[1000px] 2xl:w-[800px] xl:w-[800px] lg:w-[900px] mt-6 text-lg">
          Nigecoin is a Web3-powered employment platform dedicated to tackling
          unemployment in Africa by connecting job seekers with opportunities in
          the decentralized economy. The platform allows users to find jobs,
          receive payments in NIGE tokens, and leverage blockchain transparency
          for fair work.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:space-x-8 2xl:px-[8rem] lg:mx-[6rem] xl:mx-[8rem] mx-[2rem] mt-[6rem]">
        <img
          src={A2}
          alt="fabreco"
          className="rounded-xl lg:w-1/2 w-full h-full"
        />

        <div className="text-[#1C1C1C] font-medium 3xl:space-y-10 2xl:space-y-6 xl:space-y-6 lg:space-y-6 space-y-4">
          <p className="text-[#1C1C1C] text-2xl font-bold">THE CHALLENGE</p>
          <div className="space-y-6 text-lg 3xl:space-y-12 2xl:space-y-6 xl:spaxe-y-6 lg:space-y-6">
            <p>
              Building a decentralized job platform required overcoming several
              obstacles:
            </p>
            <p>
              Web3 Accessibility: Many users were unfamiliar with blockchain
              technology, requiring a simplified and intuitive onboarding
              experience.
            </p>

            <p>
              Brand Identity: Nigecoin needed a bold and futuristic brand that
              resonated with African freelancers and employers.
            </p>

            <p>
              Performance & Scalability: The platform had to support high
              traffic and facilitate seamless transactions across various
              devices.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[4rem] mx-[2rem] 2xl:mx-[15rem] lg:mt-[8rem] items-center lg:mx-[6rem] xl:mx-[8rem]">
        <img src={A3} alt="fabreco" className="w-full h-full rounded-3xl" />
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
              To differentiate Nigecoin, we created a powerful brand identity
              that aligned with its mission to revolutionize employment in
              Africa. Our approach included:
            </p>
            <p>
              Designing a sleek and modern UI that enhances job discovery and
              interaction.
            </p>

            <p>
              Developing a scalable website using React.js & Next.js for optimal
              performance and security.
            </p>

            <p>
              Establishing a strong brand identity with custom icons and
              illustrations to reflect Nigecoin’s mission.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between items-center space-y-10 2xl:px-[8rem] lg:mx-[6rem] xl:mx-[8rem] mx-[2rem] space-x-10 my-[5rem] lg:my-[12rem]">
        <div className="text-[#1C1C1C] text-lg 3xl:space-y-10 2xl:space-y-6 xl:space-y-6 lg:space-y-6 space-y-4">
          <div className="space-y-6 text-lg 3xl:space-y-10 2xl:space-y-6 xl:space-y-6 lg:space-y-6">
            <p className="text-2xl font-bold">THE SOLUTION</p>
            <p>
              Palnesto followed a structured design process to bring Nigecoin to
              life:
            </p>

            <p>
              Conducted in-depth analysis of user needs, market trends, and
              technical feasibility.
            </p>

            <p>
              Designed a bold and futuristic brand identity with custom icons
              and illustrations.
            </p>
            <p>
              Built a fast, scalable, and secure platform with a focus on
              usability and engagement.
            </p>
            <p>
              Created an MVP to validate key features through real-time user
              feedback before full-scale deployment.
            </p>
            <p>
              Note: Web3 services like wallet integration and smart
              contract-based payments are planned for the next phase of
              development. Our current focus has been on branding, UI/UX design,
              and website development.
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
    </>
  );
}

export default Nigecoin;
