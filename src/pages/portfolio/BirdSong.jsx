import A1 from "../../components/assets/Cover2.png";
import A2 from "../../components/assets/birdsong1.png";
import A3 from "../../components/assets/B1.jpg";
import A4 from "../../components/assets/B2.jpg";
import A5 from "../../components/assets/B33.jpg";
const BirdSong = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between 2xl:pt-[8rem]  2xl:px-[15rem] lg:pt-[6rem] xl:pt-[6rem]  2xl:mx-[1rem] lg:mx-[10rem] xl:mx-[10rem] pt-[2rem] mx-[0rem]">
        <h1 className="font-bold text-2xl 2xl:text-7xl tracking-wider text-[#1C1C1C]">
          BIRDSONG
        </h1>
        <p className="text-[#1C1C1C] 2xl:text-2xl font-bold">UI / BRANDING</p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between mt-[6rem]  lg:mt-[6rem] mx-[2rem] 2xl:mx-[15rem] lg:mx-[6rem] xl:mx-[8rem]">
        <h1 className="font-bold text-2xl text-[#1C1C1C] ml-0">THE CLIENT</h1>
        <p className="text-[#1C1C1C] font-normal 3xl:w-[1000px] 2xl:w-[800px] xl:w-[800px] lg:w-[900px] mt-6 text-lg">
          BirdSong is an Ed-tech company that focuses on digitalizing school
          operations by connecting school management, teaching staff, finances,
          parents, and students on one platform. Aside from that, BirdSong
          provides a cutting-edge learning platform for schools and kids to
          boost cognitive development by including chess for all levels and
          courses and ultimately expanding to other core disciplines
        </p>
      </div>
      <div className="mt-[4rem] mx-[4rem] 2xl:mx-[15rem] items-center lg:mx-[6rem] xl:mx-[8rem]">
        <img src={A1} alt="fabreco" className="rounded-3xl" />
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between 2xl:px-[8rem] lg:mx-[6rem] xl:mx-[8rem] mx-[2rem]">
        <div className="text-[#1C1C1C] font-medium mt-[6rem] space-y-10">
          <p className="text-[#1C1C1C] text-2xl font-bold">THE CHALLENGE</p>
          <h1 className="text-lg">
            The creators’ objective for the overall branding was to establish a
            distinctly new-age student-friendly brand. The final identity
            created provided the additional challenge of being very scalable in
            all areas and channels. The BirdSong tech team has also started a
            desire to provide a distinct user interface for everybody (parents,
            students, teachers, school management, and the BirdSong team).
            Solving the aforementioned problem required the team to consider and
            implement human-centred design solutions, as well as to have a great
            focus on building an environment appealing to young children (4–12
            years). We concentrated on employing the pronoun BirdSong and
            extracting a distinctive character based on the picture of the name
            portrayed, as well as something that would appeal to the
            stakeholders as specified Creating an identity that conveyed to
            customers that the brand’s products were safe for the environment
            and free of synthetic chemicals was our primary goal.
          </h1>
        </div>
      </div>
      <div>
        <img src={A2} />
      </div>
      <div className="flex flex-col lg:flex-row 2xl:px-[8rem] lg:mx-[6rem] xl:mx-[8rem] mx-[2rem]">
        <div className="text-[#1C1C1C] font-medium mt-[4rem] space-y-10">
          <p className="text-[#1C1C1C] font-bold text-2xl">THE APPROACH</p>
          <h1 className="text-lg">
            We began by clearing out superfluous components and upgrading the
            navigation system. We offered them an easy-to-use admin and super
            admin system with the best user experience, and we designed the UI
            to match the corporate identity we created for them.
          </h1>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row  2xl:px-[8rem] lg:mx-[6rem] xl:mx-[8rem] mx-[2rem]">
        <div className="text-[#1C1C1C] font-medium mt-[6rem] ">
          <p className="text-[#1C1C1C] font-bold text-2xl">THE SOLUTION</p>
          {/* <h1 className="mt-8 text-lg">
          <span className="font-bold">NEED: </span>
          Fabreco focuses on items that save time and are easy to use. An
          instant wrinkle remover developed by Fabreco eliminates wrinkles
          without the need for iron in just a few seconds. It was the goal of
          the founders to create a brand that connects with people and
          supports them in their daily lives.
        </h1> */}
          <h1 className="mt-4 text-lg">
            <span className="font-bold">IMPACT: </span>
            The findings thrilled the BirdSong team. The character pictures
            served as a vehicle for conveying the brand’s message. Data-driven
            graphical graphics on the other hand, accurately depicted the kind,
            while the symbols were strategically located across the page
          </h1>
        </div>
      </div>

      <div className="my-[4rem] space-y-6 flex flex-col lg:flex-row justify-center items-center lg:space-x-8 2xl:px-[8rem] lg:mx-[6rem] xl:mx-[8rem] mx-[2rem]">
        <img
          src={A3}
          alt="Approach"
          className="transition duration-300 ease-in-out hover:scale-95"
        />
        <img
          src={A4}
          alt="Image 1"
          className="transition duration-300 ease-in-out hover:scale-95"
        />
        <img
          src={A5}
          alt="Girl"
          className="transition duration-300 ease-in-out hover:scale-95"
        />
      </div>
    </>
  );
};

export default BirdSong;
