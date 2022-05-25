import Content from "../components/Content";
// import { AiOutlineSearch } from "react-icons/ai";
import { RiArrowDownSLine } from "react-icons/ri";
// import { act } from "react-dom/test-utils";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { act } from "@testing-library/react";

const urlSlugMatch = require("url-slug-match");

export default function Lineup({ bands }) {
  // const [bands, setBands] = useState([]);
  const { loading, error, data } = useFetch("https://the-javascript-bar-project.herokuapp.com/schedule");

  if (loading) return <p>Loading...</p>;
  if (error) return <p> Error </p>;
  let NewMidgard = [];
  let DisplayMidgard = [];

  if (data) {
    const dataArray = Object.values(data);
    console.log(dataArray);

    const stageMidgard = Object.values(dataArray[0]);
    console.log("this is Midgard", stageMidgard);
    // let ActMidgard;

    stageMidgard.map((dayMidgard) => {
      dayMidgard = Object.values(dayMidgard);
      // console.log("this is Midgard days", dayMidgard);
      dayMidgard.map((actMidgard) => {
        // console.log(actMidgard.act);
        actMidgard.act !== "break" && (NewMidgard = [...NewMidgard, actMidgard.act]);
        // actMidgard = actMidgard.act;
      });
      // console.log(ActMidgard);
      // return ActMidgard;
    });
  }

  console.log(NewMidgard);

  // NewMidgard.forEach(element => {

  // });
  NewMidgard.map((bandMidgard) => {
    const thisBand = bands.find((elem) => elem.name === bandMidgard);
    DisplayMidgard = [...DisplayMidgard, thisBand];
  });
  console.log(DisplayMidgard);

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
                className="form-control block w-full text-base font-normal font-montserrat bg-concert-yellow bg-clip-padding border border-solid border-black border-[3px]  transition ease-in-out m-0 focus:text-black  placeholder-black  text-font-semibold placeholder-blackfocus:bg-concert-yellow  focus:border-concert-pink focus:outline-none "
                placeholder="SEARCH BY BAND NAME"
              ></input>
            </div>
          </div>
        </div>

        <div>
          {/* <h2 className="text-7xl text-black sm:text-7xl  font-acier bg-concert-blue flex justify-center py-6 px-6 lg:py-16 px-16 xl:text-[114px] xl:py-10 px-10">Midgard</h2>
          <h2 className="text-7xl text-black sm:text-7xl  font-acier bg-concert-b-green flex justify-center py-6 px-6 lg:py-16 px-16 xl:text-[114px] xl:py-10 px-10">Vanaheim</h2> */}
        </div>

        <div>
          <h2 className="text-7xl text-black mb-8 sm:text-7xl  font-acier bg-concert-pink flex justify-center py-6 px-6 lg:py-16 px-16 xl:text-[114px] xl:py-10 px-10">Jotunheim</h2>

          <ul className="w-full grid gap-4 grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-4 ">
            {bands.map((band, index) => (
              <div key={`band#${index}`} className="bg-gray-600 text-white ">
                <CheckingBands band={band} />
              </div>
            ))}
          </ul>
        </div>
      </Content>
    </div>
  );
}

function CheckingBands({ band }) {
  if (band.logo.endsWith(".jpg") || band.logo.endsWith(".JPG") || band.logo.endsWith(".png") || band.logo.endsWith(".svg")) {
    return <ImgJPG band={band} />;
  }
  return <ImgSVG band={band} />;
}

function ImgJPG({ band }) {
  return (
    <Link to={`/artist/${urlSlugMatch(band.name.trim())}`} band={band}>
      <div className="grid gap-x-8">
        <div className="h-[11rem] lg:h-[18rem] ">
          <img src={`./images/logos/${band.logo}`} className="object-cover w-full  h-[12rem] lg:h-[18rem]" alt={band.name}></img>
        </div>

        <div className="bg-concert-pink font-aciersolid text-center text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl h-[4rem] flex justify-center items-center text-black lg:h-[6rem]">{band.name}</div>
      </div>
    </Link>
  );
}

function ImgSVG({ band }) {
  return (
    <Link to={`/artist/${urlSlugMatch(band.name.trim())}`} band={band}>
      {" "}
      <div className="grid gap-x-8">
        <div className="h-[11rem] lg:h-[18rem] ">
          <img src={band.logo} className="object-cover w-full  h-[12rem] lg:h-[18rem]" alt={band.name}></img>
        </div>
        <div className="bg-concert-pink font-aciersolid  text-center text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl h-[4rem] flex justify-center items-center text-black lg:h-[6rem]">{band.name}</div>
      </div>
    </Link>
  );
}
