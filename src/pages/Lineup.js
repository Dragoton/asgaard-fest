import Content from "../components/Content";
import { AiOutlineSearch } from "react-icons/ai";
import { RiArrowDownSLine } from "react-icons/ri";

export default function Lineup({ bands }) {
  return (
    <div>
      <div className="py-6 px-6 sm:mx-6 lg:mx-8 ">
        <h1 className="text-7xl sm:text-7xl font-acier bg-concert-yellow flex justify-center py-6 px-6 lg:py-16 px-16 xl:text-[114px] xl:py-10 px-10">Line up</h1>
      </div>
      <Content>
        <section className="m-8 mt-2 xl:m-16">
          <article>
            <p className="text-center text-base font-semibold md:mx-16 lg:text-xl xl:text-2xl 2xl:text-3xl 2xl:mx-56">
              Since it was launched 3 years ago as a student project of four KEA students - Lucian, Christian, Paul and Drago, the festival has changed drastically and become the <b>largest festival in the world</b>.{" "}
            </p>
            <p className="text-center text-base font-semibold md:mx-16 lg:text-xl xl:text-2xl 2xl:text-3xl 2xl:mx-56">
              The line up we bring you this year is certainly the biggest gathering of the world's most popular rock stars on one place. In fact, in three places.
            </p>
          </article>
          <p className="flex justify-center text-base font-semibold m-4  md:mx-16 lg:text-xl 2xl:text-4xl 2xl:m-8">~</p>
          <article>
            <p className="text-center text-base font-semibold md:mx-16 lg:text-xl xl:text-2xl 2xl:text-3xl 2xl:mx-56">
              Three stages, equally big. The band schedule is such that you can choose one stage and explore diverse artists, otherwise you have enough time to simply switch to other stage The passage between the stages is free.
            </p>
            <p className="text-center text-base font-semibold pt-6 md:mx-16 lg:text-xl xl:text-2xl 2xl:text-3xl 2xl:mx-56">On weekends, there will be one big surprise guest on each stage, who is not listed in this year's line-up. See you!</p>
          </article>
        </section>

        <div className="bg-concert-redish flex flex-row">
          <div className="flex flex-row p-4 gap">
            <div className={`flex flex-row justify-center items-center text-black font-montserrat px-2 py-1 w-fit font-bold border-[3px] border-black text-sm phone:text-lg bg-concert-yellow mr-2`}>
              {" "}
              ALPHABETICAL <RiArrowDownSLine size={32} />
            </div>

            <div className={`flex flex-row justify-center items-center text-black font-montserrat px-2 py-1 w-fit font-bold border-[3px] border-black text-sm phone:text-lg bg-concert-yellow mr-2`}>
              {" "}
              GENRE <RiArrowDownSLine size={32} />
            </div>

            <div class="form-floating  sm:w-auto xl:w-96">
              <input
                type="password"
                className="form-control block w-full text-base font-normal font-montserrat text-black bg-concert-yellow bg-clip-padding border border-solid border-black border-[3px] border-black  transition ease-in-out m-0 focus:text-black  placeholder-black  text-font-semibold placeholder-blackfocus:bg-concert-yellow  focus:border-concert-pink focus:outline-none placeholder-black"
                placeholder="SEARCH BY BAND NAME"
              ></input>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-7xl text-black sm:text-7xl  font-acier bg-concert-pink flex justify-center py-6 px-6 lg:py-16 px-16 xl:text-[114px] xl:py-10 px-10">STAGE 1</h2>
        </div>

        <ul className="w-full grid gap-4 grid-cols-3 grid-rows-3 p-4">
          {bands.map((band, index) => (
            <div key={`band#${index}`} className="bg-gray-600 text-white rounded-md p-4">
              <img src={band.logo} alt={band.name} width="500" height="600"></img>
              {band.name}
            </div>
          ))}
        </ul>
      </Content>
    </div>
  );
}
