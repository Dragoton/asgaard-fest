import { SeeDetailButton } from "./Buttons";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

export default function Passes() {
  return (
    <article className="w-full h-96 bg-concert-pink text-black ">
      <h1 className="font-acier p-5 text-6xl text-black">FESTIVAL PASSES</h1>
      <section className="w-full p-8 font-bold">
        <div className="w-full h-14 bg-white border-[3px] border-black flex">
          <div className="h-full w-10 bg-concert-l-green border-r-[3px] border-black"></div>
          <div className="px-2 justify-between w-full flex h-full">
            <div className="flex items-center space-x-[5vw]">
              <div>
                <h4>GENERAL ACCESS</h4>
                <SeeDetailButton label="See Details" />
              </div>
              <p>241 dkk</p>
            </div>
            <div className="flex h-full items-center space-x-2">
              <div className="flex items-center h-fit space-x-2 px-1 bg-concert-yellow border-black border-[3px]">
                <AiOutlineMinusCircle />
                <p>1</p>
                <AiOutlinePlusCircle />
              </div>
              <div className="bg-black h-fit text-bold text-xs whitespace-pre p-1 text-center text-white">
                ADD TO CHART
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

/* <div className="w-full h-96 bg-concert-pink">
      <h3 className="font-acier p-5 text-6xl text-black">FESTIVAL PASSES</h3>
      <div className="flex box-border flex-col gap-6 pl-12 pr-10">
        <div className="flex relative h-auto phone:h-14 w-full bg-white border-[3px] border-black">
          <div className="flex h-auto w-10 bg-concert-l-green border-r-[2px] border-black"></div>
          <div className="flex ml-10 items-center">
            <div className="flex flex-col sm:flex-row">
              <div className="text-xs pl-4 md:text-sm pl-4 text-black font-bold">
                GENERAL ACCES
              </div>
              <div className="text-xs pl-4 md:pl-10 pr-10 mr-auto text-black font-bold">
                140$
              </div>
            </div>
            <div className=" flex flex-col ml-auto justify-end align-center sm:flex-row">
              <div className="flex justify-center ml-auto mr-5 justify-around items-center text-center w-20 h-3/5 bg-concert-yellow border-black border-[2px]">
                <div className="w-4 h-4 bg-concert-yellow border-black border-[1px] rounded-full"></div>
                <div className="align-middle text-black">1</div>
                <div className="w-4 h-4 bg-concert-yellow border-black border-[1px] rounded-full"></div>
              </div>
              <div className="mr-4 md:flex items-center w-26 h-3/5 bg-black mr-16">
                <div className="text-bold text-xs whitespace-pre p-1 text-center text-white">
                  ADD TO CHART
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-5/6 h-14 whitespace-nowrap bg-white border-[3px] border-black">
          <div>GENRERAL ACCES</div>
          <div> 140</div>
          <div>Button</div>
          <div>Button</div>
        </div>
        <div className="flex w-5/6 h-14 bg-white border-[3px] border-black">
          <div>GENRERAL ACCES</div>
          <div> 140</div>
          <div>Button</div>
          <div>Button</div>
        </div>
      </div>
    </div>
  );*/
