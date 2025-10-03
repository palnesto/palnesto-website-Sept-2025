import A1 from "../../components/assets/card1.png";
import A2 from "../../components/assets/card2.png";
import A3 from "../../components/assets/card3.png";
import A4 from "../../components/assets/card4.png";
import A5 from "../../components/assets/card5.png";
import A6 from "../../components/assets/cards.png";
import A7 from "../../components/assets/card7.png";

function SaitaCard() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between mt-[4rem] 2xl:pt-[8rem]  2xl:px-[15rem] lg:pt-[6rem] xl:pt-[6rem]  2xl:mx-[1rem] lg:mx-[10rem] xl:mx-[10rem] pt-[2rem] mx-[0rem]">
        <h1 className="font-bold text-2xl lg:text-7xl tracking-wider text-[#1C1C1C]">
          SAITA CARD
        </h1>
        <p className="text-[#1C1C1C] 2xl:text-2xl font-bold">UI / Branding</p>
      </div>
      <div className="lg:flex flex-col hidden  lg:flex-row items-center justify-between 2xl:mt-[6rem] lg:mt-[6rem] xl:mt-[6rem] mt-[4rem] mx-[2rem] 2xl:mx-[15rem] lg:mx-[6rem] xl:mx-[8rem]">
        <h1 className="font-bold text-2xl text-[#1C1C1C] text-center ml-0">
          THE CLIENT
        </h1>
        <p className="text-[#1C1C1C] font-normal 3xl:w-[1000px] 2xl:w-[800px] xl:w-[800px] lg:w-[900px] mt-6 text-lg">
          SaitaCard is a crypto based debit card powered by MasterCard, the
          proud SaitaCard holders top up their Saita Card using various
          cryptocurrencies such as USDT, ETH, BNB, SAITAMA, MAZI and many more.
          Just Top-up and get going.
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
          SaitaCard is a crypto based debit card powered by MasterCard, the
          proud SaitaCard holders top up their Saita Card using various
          cryptocurrencies such as USDT, ETH, BNB, SAITAMA, MAZI and many more.
          Just Top-up and get going.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-8 2xl:px-[8rem] lg:mx-[6rem] xl:mx-[8rem] mx-[2rem]">
        <img
          src={A2}
          alt="fabreco"
          className="rounded-xl 3xl:w-full 3xl:h-full w-full h-full 2xl:w-[30rem] xl:w-[28rem] lg:w-[23rem] lg:mt-[9rem] 2xl:mt-[8rem] mt-[2rem] "
        />

        <div className="text-[#1C1C1C] font-medium mt-[6rem] lg:mt-[8rem] 3xl:mt-[12rem] 3xl:space-y-10 2xl:space-y-6 xl:space-y-6 lg:space-y-6 space-y-4">
          <p className="text-[#1C1C1C] text-2xl font-bold">THE CHALLENGE</p>
          <div className="space-y-6 text-lg 3xl:space-y-12 2xl:space-y-6 xl:spaxe-y-6 lg:space-y-6">
            <p>
              The ML and AI space is hot and there are lots of companies vying
              for marketshare with products and ideas that feel the same.{" "}
            </p>

            <p>
              How do you begin to differentiate a brand and begin to build brand
              equity in this environment?{" "}
            </p>

            <p>
              How do you position yourself early on as a brand that can be
              trusted with your data even when you’re a scrappy, fast moving
              startup?
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[4rem] mx-[2rem] 2xl:mx-[15rem] lg:mt-[8rem] items-center lg:mx-[6rem] xl:mx-[8rem]">
        <img src={A3} alt="fabreco" className="w-full h-full rounded-3xl" />
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-10 2xl:px-[8rem] lg:mx-[6rem] xl:mx-[8rem] mx-[2rem] mt-[6rem]">
        <img
          src={A4}
          alt="fabreco"
          className="3xl:w-full 3xl:h-full w-full h-full 2xl:w-[30rem] xl:w-[28rem] lg:w-[23rem] lg:mt-[9rem] 2xl:mt-[8rem] mt-[2rem]"
        />

        <div className="text-[#1C1C1C] font-mediummt-[6rem] lg:mt-[8rem] 2xl:mt-[11rem] 3xl:mt-[12rem] 3xl:space-y-10 2xl:space-y-6 xl:space-y-6 lg:space-y-6 space-y-4">
          <p className="text-[#1C1C1C] text-2xl font-bold">THE APPROACH</p>

          <div className="space-y-6 text-lg 3xl:space-y-8 2xl:space-y-6 xl:spaxe-y-6 lg:space-y-6">
            <p>
              To differentiate Saita, we built a bold brand identity to match
              the companies bold product vision.{" "}
            </p>

            <p>
              We moved away from the vibrant colors, gradients and cute
              characters that other brands copied from Github.{" "}
            </p>

            <p>
              We built a scalable brand built around the ideas of strength,
              power, intelligence and security.{" "}
            </p>
            <p>
              Then we took that brand and pushed it to a number of pieces of UI
              and visual collateral so Predibase could go from 0 to world
              domination.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[4rem] mx-[2rem] 2xl:mx-[15rem] lg:mt-[8rem] items-center lg:mx-[6rem] xl:mx-[8rem]">
        <img src={A5} alt="fabreco" className="w-full h-full rounded-3xl" />
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between 2xl:px-[8rem] lg:mx-[6rem] xl:mx-[8rem] mx-[2rem] space-x-10">
        <div className="text-[#1C1C1C] font-medium mt-[6rem] lg:mt-[8rem] 3xl:mt-[12rem] 3xl:space-y-10 2xl:space-y-6 xl:space-y-6 lg:space-y-6 space-y-4">
          <p className="text-[#1C1C1C] text-2xl font-bold">THE SOLUTION</p>
          <div className="space-y-6 text-lg 3xl:space-y-10 2xl:space-y-6 xl:spaxe-y-6 lg:space-y-6">
            <p>We took Predibase through our methodical design process. </p>

            <p>
              First we started with and internal and external analysis of the
              company, its customers and industry.{" "}
            </p>

            <p>
              We then were able to design the brand from a poin of empathy and
              proposed a number of paths forward.{" "}
            </p>
            <p>
              Once we established the identity, we helped bring the brand to
              life through a wide range of collateral including the company
              website.{" "}
            </p>
            <p>
              The website was built in a scalable Jamstack that can be
              infinitely scaled without limitation.
            </p>
          </div>
        </div>
        <img
          src={A6}
          alt="fabreco"
          className="3xl:w-full 3xl:h-full w-full h-full 2xl:w-[30rem] xl:w-[28rem] lg:w-[23rem] lg:mt-[9rem] 2xl:mt-[8rem] mt-[2rem] "
        />
      </div>
      <div className="mt-[6rem] mx-[2rem] 2xl:mx-[15rem] lg:mt-[8rem] items-center lg:mx-[6rem] xl:mx-[8rem] mb-[6rem] lg:mb-[12rem]">
        <img src={A7} alt="fabreco" className="w-full h-full rounded-3xl" />
      </div>
    </>
  );
}

export default SaitaCard;
