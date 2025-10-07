import { memo } from "react";
import { items } from "../../components/types";
import { EvervaultCard, Icon } from "../../components/ui/evervault-card";

function MemoPortfolio() {
  const handleCardClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="bg-black text-white 2xl:pt-[10rem] pt-[2rem] 2xl:px-[15rem] px-4">
      <div className="flex items-end justify-between ">
        <div className="text-xl md:text-5xl lg:text-7xl font-customLight tracking-widest w-full">
          <h1> LAUNCHING </h1>
          <div className="flex justify-between">
            <p>
              <span className="font-bold font-custom">IDEAS</span> INTO
            </p>
            <p className="text-right font-customLight">
              BETTER <br />
              <span className="font-bold font-custom">OUTCOMES</span>
            </p>
          </div>
        </div>
      </div>

      <div className="pt-20">
        <p className="text-lg">
          /We take great pride in everything we achieve on behalf of our
          clients.
          <br />
          Our work is our passion.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 md:gap-20 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 pt-10 lg:pt-20 md:pt-16 w-full text-center">
        {items.map((item) => (
          <div
            key={item.title}
            className="w-full space-y-5 hover:cursor-pointer"
            onClick={() => handleCardClick(item.link)}
          >
            <div className="border border-white/20 flex flex-col items-start mx-auto p-4 relative w-72 h-full">
              <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
              <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
              <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
              <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

              <div className="flex flex-col gap-2">
                <EvervaultCard
                  title={item.title}
                  src={item.src}
                  mediaType={item.mediaType === "video" ? "video" : "image"}
                  className="w-full h-full"
                />
                <section className="flex flex-col gap-2">
                  {item.description && (
                    <h2 className="text-xs font-light opacity-80 text-start">
                      {item.description}
                    </h2>
                  )}

                  <button className="bg-[#1C1C1C] text-white px-3 py-1 rounded-2xl w-fit">
                    {item.title}
                  </button>
                </section>
              </div>
            </div>

            {/* Description from your items config (replaces demo's static copy) */}
          </div>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
}

const Portfolio = memo(MemoPortfolio);
export default Portfolio;
