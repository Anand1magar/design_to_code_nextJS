import type { NextPage } from "next";
import TheHeader from "../components/TheHeader";

const DesignToCode: NextPage = () => {
  return (
    <div >
      <TheHeader/>
      <section
        className="self-stretch bg-gray-gray-2 flex flex-col items-center justify-center py-[100px] px-[120px] text-left text-41xl text-dark-dark font-body-medium-medium md:pl-20 md:pr-20 md:box-border sm:py-[50px] sm:px-[30px] sm:box-border"
        id="herosection"
      >
        <div className="w-full flex flex-row flex-wrap items-start justify-start gap-[100px] ">
          <div className="flex-1 flex flex-col items-start justify-start gap-[80px] ">
            <div className="self-stretch flex flex-col items-start justify-start gap-[42px] sm:gap-[30px]">
              <div className="self-stretch relative leading-[72px] sm:text-23xl sm:leading-[50px]">
                <b>{`Supercharges every `}</b>
                <span>part of your business</span>
              </div>
              <div className="self-stretch relative text-5xl leading-[40px] sm:text-base">{`Meet Overcall, the easiest way to add real-time audio & video to your platform, product or service`}</div>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[27px]">
                <button className="cursor-pointer [border:none] py-[18px] px-8 bg-blue-blue-dark rounded-47xl flex flex-row items-center justify-center box-border min-w-[177px] hover:bg-midnightblue-200 sm:flex-1">
                  <div className="flex-1 relative text-base leading-[24px] font-semibold font-body-medium-medium text-default-white text-center">
                    Start free Now
                  </div>
                </button>
                <button className="cursor-pointer py-[18px] px-8 bg-default-white rounded-47xl box-border flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-gray-gray-4 hover:bg-lightgray-200 hover:gap-[11px] hover:cursor-pointer md:pl-8 md:pr-8 md:box-border sm:flex-1">
                  <div className="relative text-base leading-[24px] font-semibold font-body-medium-medium text-blue-blue-dark text-left">
                    Learn more
                  </div>
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/heroiconsminiarrowupright.svg"
                  />
                </button>
              </div>
              <div className="self-stretch relative text-sm leading-[22px]">
                Supports more apps than any other platform, so you can connect
                the toos 100+ apps infinite possibilities
              </div>
            </div>
            <div className="w-full flex flex-row flex-wrap items-start justify-start gap-[37px] sm:hidden">
              <div className="w-[118.7px] relative rounded-11xl bg-gainsboro-200 h-6" />
              <div className="w-[118.7px] relative rounded-11xl bg-gainsboro-200 h-6" />
              <div className="w-[118.7px] relative rounded-11xl bg-gainsboro-200 h-6" />
            </div>
          </div>
          <div className=" h-[539px] flex flex-col items-start justify-end sm:hidden ">
            <div className=" overflow-hidden flex flex-col items-end justify-center">
              <div className=" relative rounded-[23px] bg-gainsboro-200 h-[478px]" />
            </div>
            <div className=" overflow-hidden flex flex-col items-start justify-center mt-[-182px]">
              <div className=" relative rounded-[20px] bg-darkgray h-[243px]" />
            </div>
          </div>
        </div>
      </section>
      <section
        className="self-stretch bg-dark-dark flex flex-col items-center justify-center py-[100px] px-[120px] text-center text-lg text-dark-dark-8 font-body-medium-medium sm:pl-[30px] sm:pr-[30px] sm:box-border"
        id="ourSolution_section"
      >
        <div className="w-full flex flex-col items-center justify-start gap-[81px] ">
          <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
            <b className="self-stretch relative leading-[26px] uppercase sm:self-stretch sm:w-auto">
              OUR SOLUTION
            </b>
            <b className="w-full relative text-29xl leading-[58px] inline-block  sm:text-23xl">
              Overcall is a solution for your business and goal.
            </b>
            <div className="w-full relative leading-[26px] inline-block  sm:leading-[35px]">
              We have built our own tech stack. No third-party API. We do not
              dependon technical suppliers. We built everything ourselves.
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[30px] text-9xl text-default-white">
            <div className="flex-1 rounded-11xl bg-gray flex flex-col items-start justify-start p-[35px] box-border gap-[4px] ">
              <div className="flex flex-row items-center justify-start gap-[19px]">
                <div className="relative leading-[40px] font-semibold">
                  Retails
                </div>
                <img
                  className="w-5 relative h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/heroiconsminiarrowupright.svg"
                />
              </div>
              <div className="self-stretch relative text-lg leading-[26px] text-left">
                Bring the offline experience online.
              </div>
            </div>
            <div className="flex-1 rounded-11xl bg-gray flex flex-col items-start justify-start p-[35px] box-border gap-[4px] ">
              <div className="flex flex-row items-center justify-start gap-[19px]">
                <div className="relative leading-[40px] font-semibold">
                  Retails
                </div>
                <img
                  className="w-5 relative h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/heroiconsminiarrowupright.svg"
                />
              </div>
              <div className="self-stretch relative text-lg leading-[26px] text-left">
                Bring the offline experience online.
              </div>
            </div>
            <div className="flex-1 rounded-11xl bg-gray flex flex-col items-start justify-start p-[35px] box-border gap-[4px] ">
              <div className="flex flex-row items-center justify-start gap-[19px]">
                <div className="relative leading-[40px] font-semibold">
                  Retails
                </div>
                {/* <img
                  className="w-5 relative h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/heroiconsminiarrowupright.svg"
                /> */}
              </div>
              <div className="self-stretch relative text-lg leading-[26px] text-left">
                Bring the offline experience online.
              </div>
            </div>
            <div className="flex-1 rounded-11xl bg-gray flex flex-col items-start justify-start p-[35px] box-border gap-[4px] ">
              <div className="flex flex-row items-center justify-start gap-[19px]">
                <div className="relative leading-[40px] font-semibold">
                  Retails
                </div>
                {/* <img
                  className="w-5 relative h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/heroiconsminiarrowupright.svg"
                /> */}
              </div>
              <div className="self-stretch relative text-lg leading-[26px] text-left">
                Bring the offline experience online.
              </div>
            </div>
            <div className="flex-1 rounded-11xl bg-gray flex flex-col items-start justify-start p-[35px] box-border gap-[4px] ">
              <div className="flex flex-row items-center justify-start gap-[19px]">
                <div className="relative leading-[40px] font-semibold">
                  Retails
                </div>
                <img
                  className="w-5 relative h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/heroiconsminiarrowupright.svg"
                />
              </div>
              <div className="self-stretch relative text-lg leading-[26px] text-left">
                Bring the offline experience online.
              </div>
            </div>
            <div className="flex-1 rounded-11xl bg-gray flex flex-col items-start justify-start p-[35px] box-border gap-[4px]">
              <div className="flex flex-row items-center justify-start gap-[19px]">
                <div className="relative leading-[40px] font-semibold">
                  Retails
                </div>
                <img
                  className="w-5 relative h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/heroiconsminiarrowupright.svg"
                />
              </div>
              <div className="self-stretch relative text-lg leading-[26px] text-left">
                Bring the offline experience online.
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="self-stretch bg-default-white flex flex-col items-center justify-center py-[100px] px-[120px] sm:py-[50px] sm:px-[30px] sm:box-border">
        <div className="w-full flex flex-col items-start justify-center gap-[80px] max-w-[1200px] sm:gap-[50px]">
          <div className="self-stretch flex flex-col items-start justify-center gap-[30px] sm:gap-[20px]">
            <b className="relative leading-[26px] uppercase text-blue-blue">
              OUR MISSION
            </b>
            <div className="self-stretch relative text-29xl leading-[68px] sm:text-[32px] sm:leading-[45px]">
              <span className="font-medium">{`We’ve `}</span>
              <b className="text-blue-blue">successfully</b>
              <span className="font-medium">
                {" "}
                delivered hundreds of niche-targeted custom solutions to clients
                across multiple industries
              </span>
            </div>
            <div className="self-stretch relative leading-[26px] sm:leading-[32px]">
              Overcall works with the most popular conversational platforms,
              including Zendesk, LiveChat, Intercom, and Customer. See how our
              partner solution
            </div>
          </div>
          <div className="w-full flex flex-row flex-wrap items-center justify-between max-w-[800px] text-5xl text-dark-dark-3 sm:flex-col sm:items-start sm:justify-center sm:pl-0 sm:pb-[30px] sm:box-border">
            <div className="flex flex-col items-start justify-start gap-[19px] sm:pb-[30px] sm:box-border">
              <div className="relative leading-[30px] font-semibold">
                Active Users
              </div>
              <b className="relative text-41xl leading-[72px] text-dark-dark">
                2M+
              </b>
            </div>
            <div className="flex flex-col items-start justify-start gap-[19px] sm:pb-[30px] sm:box-border">
              <div className="relative leading-[30px] font-semibold">
                Delivered Solutions
              </div>
              <b className="relative text-41xl leading-[72px] text-dark-dark">
                2.200+
              </b>
            </div>
            <div className="flex flex-col items-start justify-start gap-[19px]">
              <div className="relative leading-[30px] font-semibold">
                Our Members
              </div>
              <b className="relative text-41xl leading-[72px] text-dark-dark">
                100+
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-default-white flex flex-col items-center justify-center py-[100px] px-[120px] text-center text-blue-blue-dark sm:py-[50px] sm:px-[30px] sm:box-border">
        <div className="w-full flex flex-col items-center justify-center gap-[70px] max-w-[1200px]">
          <div className="w-full flex flex-col items-center justify-start gap-[24px] max-w-[800px]">
            <b className="relative leading-[26px] uppercase">COPY AND PASTE</b>
            <b className="self-stretch relative text-29xl leading-[58px] text-dark-dark-2 sm:text-23xl">
              Designed to your product with copy and paste
            </b>
            <div className="self-stretch relative leading-[26px] text-dark-dark-4 whitespace-pre-wrap">
              Get closer to your customers, Enable your online customers to have
              real-time conversation with your brand
            </div>
          </div>
          <div className="rounded-[80px] bg-gray-gray-2 overflow-hidden flex flex-row items-start justify-start py-[5px] pr-2.5 pl-[7px] gap-[11px] text-base text-dark-dark-2">
            <div className="w-[145px] rounded-51xl bg-default-white flex flex-row items-center justify-center py-[17px] px-5 box-border text-blue-blue">
              <div className="relative leading-[24px] font-semibold">
                One-to-one
              </div>
            </div>
            <div className="w-[145px] rounded-51xl flex flex-row items-center justify-center py-[17px] px-5 box-border hover:bg-lightgray-100">
              <div className="flex-1 relative leading-[24px] font-medium">
                One-to-many
              </div>
            </div>
            <div className="w-[145px] rounded-51xl flex flex-row items-center justify-center py-[17px] px-5 box-border hover:bg-whitesmoke">
              <div className="flex-1 relative leading-[24px] font-medium">
                Dashboard
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row flex-wrap items-start justify-start gap-[38px] max-w-[1200px] text-21xl text-default-white">
            <div className="flex-1 rounded-21xl bg-dark-dark overflow-hidden flex flex-col items-center justify-start pt-[70px] px-[50px] pb-0 box-border gap-[50px] min-w-[340px]">
              <div className="self-stretch flex flex-col items-center justify-start gap-[28px]">
                <b className="self-stretch relative leading-[48px]">
                  Level-up your customer experience
                </b>
                <div className="self-stretch relative text-lg leading-[26px] font-medium">
                  By integrating voice, video and screen sharing into your
                  online customer interactions.
                </div>
                <div className="w-[175px] rounded-51xl bg-blue-blue-dark flex flex-row items-center justify-start py-[19px] px-[30px] box-border gap-[5px] text-base hover:bg-royalblue hover:gap-[8px] hover:items-center hover:justify-center">
                  <div className="relative leading-[24px]">Learn more</div>
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/heroiconsminiarrowupright.svg"
                  />
                </div>
              </div>
              <div className="self-stretch h-[226px] flex flex-row items-end justify-center gap-[33px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[19px]">
                  <div className="w-[225px] relative rounded-11xl bg-lightsteelblue h-[54px]" />
                  <img
                    className="w-[225px] flex-1 relative rounded-t-11xl rounded-b-none max-h-full object-cover"
                    alt=""
                    src="/rectangle-4944@2x.png"
                  />
                </div>
                <img
                  className="self-stretch flex-1 relative rounded-t-11xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/rectangle-4943@2x.png"
                />
              </div>
            </div>
            <div className="flex-1 rounded-21xl bg-dark-dark-8 h-[612px] overflow-hidden flex flex-col items-center justify-start pt-[70px] px-[33px] pb-0 box-border gap-[50px] min-w-[340px] text-dark-dark">
              <div className="self-stretch flex flex-col items-center justify-start gap-[28px]">
                <b className="self-stretch relative leading-[48px]">
                  <p className="m-0">{`Accelerate your sales. `}</p>
                  <p className="m-0">Make a difference</p>
                </b>
                <div className="self-stretch relative text-lg leading-[26px] font-medium">
                  By integrating voice, video and screen sharing into your
                  online customer interactions.
                </div>
                <div className="w-[175px] rounded-51xl bg-blue-blue-dark flex flex-row items-center justify-start py-[19px] px-[30px] box-border gap-[5px] text-base text-default-white hover:bg-royalblue hover:gap-[8px] hover:items-center hover:justify-center">
                  <div className="relative leading-[24px]">Learn more</div>
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/heroiconsminiarrowupright.svg"
                  />
                </div>
              </div>
              <div className="w-[402px] relative h-[249px] overflow-hidden shrink-0">
                <img
                  className="absolute top-[0px] left-[64.5px] rounded-[35px] max-h-full w-[274px] overflow-hidden object-cover"
                  alt=""
                  src="/frame@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-gray-gray-2 flex flex-col items-center justify-center py-[100px] px-[120px] text-9xl text-dark-dark-2 sm:py-[50px] sm:px-[30px] sm:box-border">
        <div className="w-full flex flex-col items-center justify-center gap-[70px] max-w-[1200px]">
          <div className="w-full flex flex-col items-center justify-start gap-[24px] max-w-[800px] text-center text-lg text-blue-blue-dark">
            <b className="relative leading-[26px] uppercase">CUSTOMER REVIEW</b>
            <b className="self-stretch relative text-29xl leading-[58px] text-dark-dark-2 sm:text-23xl">
              Don’t take our words for it listen to our customers.
            </b>
          </div>
          <div className="w-full flex flex-row flex-wrap items-start justify-start gap-[100px] max-w-[1200px] sm:gap-[50px]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[45px] min-w-[350px]">
              <div className="self-stretch relative leading-[40px] font-medium">
                “We have been using SnapCall for a little while and it works
                awesome. We use SnapCall with Zendesk and the integration works
                great.”
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[17px] text-lg text-black">
                <div className="relative leading-[26px] font-semibold">
                  Mark Brown
                </div>
                <div className="w-[5px] relative rounded-[50%] bg-dark-dark-3 h-[5px]" />
                <div className="relative leading-[26px] text-dark-dark-4">
                  Digital Marketing at Zendesk
                </div>
                <div className="w-[5px] relative rounded-[50%] bg-dark-dark-3 h-[5px]" />
                <div className="flex flex-row items-center justify-start gap-[17px]">
                  <div className="relative leading-[26px] font-medium">4.9</div>
                  <div className="flex flex-row items-center justify-start gap-[10px]">
                    <img
                      className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/starfill.svg"
                    />
                    <img
                      className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/starfill.svg"
                    />
                    <img
                      className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/starfill.svg"
                    />
                    <img
                      className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/starfill.svg"
                    />
                    <img
                      className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/starfill.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <img
              className="w-[317px] relative rounded-11xl h-[209px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/images-div@2x.png"
            />
          </div>
          <div className="w-full flex flex-row flex-wrap items-start justify-start gap-[100px] max-w-[1200px] sm:gap-[50px]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[45px] min-w-[350px]">
              <h2
                className="m-0 self-stretch relative text-inherit leading-[40px] font-medium font-inherit"
                id="title"
              >
                “We have been using SnapCall for a little while and it works
                awesome. We use SnapCall with Zendesk and the integration works
                great.”
              </h2>
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[17px] text-lg text-black">
                <div className="relative leading-[26px] font-semibold">
                  Mark Brown
                </div>
                <div className="w-[5px] relative rounded-[50%] bg-dark-dark-3 h-[5px]" />
                <div className="relative leading-[26px] text-dark-dark-4">
                  Digital Marketing at Zendesk
                </div>
                <div className="w-[5px] relative rounded-[50%] bg-dark-dark-3 h-[5px]" />
                <div className="flex flex-row items-center justify-start gap-[17px]">
                  <div className="relative leading-[26px] font-medium">4.9</div>
                  <div className="flex flex-row items-center justify-start gap-[10px]">
                    <img
                      className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/starfill.svg"
                    />
                    <img
                      className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/starfill.svg"
                    />
                    <img
                      className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/starfill.svg"
                    />
                    <img
                      className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/starfill.svg"
                    />
                    <img
                      className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/starfill.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <img
              className="w-[317px] relative rounded-11xl h-[209px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/images-div@2x.png"
            />
          </div>
        </div>
      </div>
      <section
        className="self-stretch bg-dark-dark flex flex-col items-center justify-center py-[100px] px-[120px] gap-[59px] text-left text-21xl text-default-white font-body-medium-medium sm:gap-[70px] sm:pl-[30px] sm:pr-[30px] sm:box-border"
        id="footer"
      >
        <div className="w-full flex flex-row flex-wrap items-start justify-between max-w-[1200px] sm:flex-col">
          <div className="w-[280px] flex flex-col items-start justify-start py-0 pr-10 pl-0 box-border gap-[23px] sm:self-stretch sm:w-auto sm:items-start sm:justify-center sm:pb-[49px] sm:box-border">
            <b className="relative leading-[48px]">Logo</b>
            <div className="self-stretch relative text-lg leading-[26px]">
              <span className="font-semibold">{`Supercharges `}</span>
              <span>every part of your business</span>
            </div>
          </div>
          <div className="flex-1 rounded-11xl bg-dark-dark-2 flex flex-row flex-wrap items-start justify-start py-[50px] px-10 box-border gap-[30px] min-w-[313px] max-w-[742px] text-11xl sm:flex-[unset] sm:self-stretch">
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[200px]">
              <div className="self-stretch relative leading-[38px] font-semibold">
                Get started for free
              </div>
              <div className="self-stretch relative text-base leading-[24px] text-dark-dark-7">
                Grow your business online with Overcall - the most powerful
                built-in Video chat, Voice calls.
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-[14px] text-sm">
              <button className="cursor-pointer [border:none] py-[18px] px-8 bg-default-white rounded-47xl flex flex-row items-center justify-start gap-[8px] hover:bg-gainsboro-100 hover:gap-[12px] hover:items-center hover:justify-between">
                <div className="relative text-base leading-[24px] font-semibold font-body-medium-medium text-blue-blue text-left">
                  Use for free
                </div>
                <img
                  className="w-5 relative h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/heroiconsminiarrowupright.svg"
                />
              </button>
              <div className="flex flex-row items-end justify-start gap-[15px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/heroiconsoutlinecheckcircle.svg"
                />
                <div className="relative leading-[22px]">
                  No credit card required
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row flex-wrap items-start justify-between max-w-[1200px] text-lg">
          <div className="w-[357px] flex flex-col items-start justify-start py-0 pr-[30px] pl-0 box-border gap-[27px] sm:pb-10 sm:box-border">
            <div className="relative leading-[26px] font-semibold">
              Download App
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[9px]">
              <button className="cursor-pointer [border:none] py-[18px] px-8 bg-dark-dark-8 rounded-47xl flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/androidoriginal.svg"
                />
                <div className="relative text-base leading-[24px] font-semibold font-body-medium-medium text-dark-dark text-left">
                  Android
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-[18px] px-8 bg-dark-dark-8 rounded-47xl flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/applebrand.svg"
                />
                <div className="relative text-base leading-[24px] font-semibold font-body-medium-medium text-dark-dark text-left">
                  IOS
                </div>
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[44px] min-w-[250px] max-w-[675px]">
            <div className="w-[172px] flex flex-col items-start justify-start gap-[27px] min-w-[120px]">
              <div className="self-stretch relative leading-[26px] font-semibold">
                Products
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-base text-dark-dark-7">
                <div className="self-stretch relative leading-[24px] font-medium">
                  Customers
                </div>
                <div className="self-stretch relative leading-[24px] font-medium">
                  One-to-One
                </div>
                <div className="self-stretch relative leading-[24px] font-medium">
                  One-to-Many
                </div>
                <div className="self-stretch relative leading-[24px] font-medium">
                  API Documentation
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[27px] min-w-[120px]">
              <div className="self-stretch relative leading-[26px] font-semibold">
                Products
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-base text-dark-dark-7">
                <div className="self-stretch relative leading-[24px] font-medium">
                  Customers
                </div>
                <div className="self-stretch relative leading-[24px] font-medium">
                  One-to-One
                </div>
                <div className="self-stretch relative leading-[24px] font-medium">
                  One-to-Many
                </div>
                <div className="self-stretch relative leading-[24px] font-medium">
                  API Documentation
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[27px] min-w-[120px]">
              <div className="self-stretch relative leading-[26px] font-semibold">
                Products
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-base text-dark-dark-7">
                <div className="self-stretch relative leading-[24px] font-medium">
                  Customers
                </div>
                <div className="self-stretch relative leading-[24px] font-medium">
                  One-to-One
                </div>
                <div className="self-stretch relative leading-[24px] font-medium">
                  One-to-Many
                </div>
                <div className="self-stretch relative leading-[24px] font-medium">
                  API Documentation
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[27px] min-w-[120px]">
              <div className="self-stretch relative leading-[26px] font-semibold">
                Products
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-base text-dark-dark-7">
                <div className="self-stretch relative leading-[24px] font-medium">
                  Customers
                </div>
                <div className="self-stretch relative leading-[24px] font-medium">
                  One-to-One
                </div>
                <div className="self-stretch relative leading-[24px] font-medium">
                  One-to-Many
                </div>
                <div className="self-stretch relative leading-[24px] font-medium">
                  API Documentation
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full"
          alt=""
          src="/arrow-2.svg"
        />
        <div className="self-stretch flex flex-row items-center justify-between text-base">
          <div className="relative leading-[24px] font-medium">
            @200. All Rights Reserved
          </div>
          <div className="flex flex-row items-start justify-start gap-[48px]">
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/facebookoval.svg"
            />
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/linkedinoriginal.svg"
            />
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/twitter.svg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignToCode;
