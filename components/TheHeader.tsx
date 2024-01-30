import type { NextPage } from "next";

const TheHeader: NextPage = () => {
    return (
        <div className="app-container">
            <div className="self-stretch bg-default-white h-20 overflow-hidden shrink-0 flex flex-col items-center justify-center py-8 box-border text-11xl sm:box-border">
                <div className="w-full flex flex-row items-center justify-between max-w-[1200px]">
                    <div className="flex flex-row items-center justify-start gap-[20px]">
                        <img
                            className="w-6 relative h-6 overflow-hidden shrink-0 hidden md:flex"
                            alt=""
                            src="/menu-icon.svg"
                        />
                        <h2 className="m-0 relative text-inherit leading-[38px] font-bold font-inherit">
                            Logo
                        </h2>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[35px] text-base">
                        <div
                            className="flex flex-row items-center justify-start gap-[35px] md:hidden"
                            id="menu_item"
                        >
                            <div className="flex flex-row items-center justify-start gap-[8px]">
                                <div className="relative leading-[24px] font-medium">
                                    Products
                                </div>
                                <img
                                    className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                                    alt=""
                                    src="/component-76.svg"
                                />
                            </div>
                            <div className="flex flex-row items-center justify-start gap-[8px]">
                                <div className="relative leading-[24px] font-medium">
                                    Solution
                                </div>
                                <img
                                    className="w-6 relative h-6 overflow-hidden shrink-0 object-cover"
                                    alt=""
                                    src="/component-76@2x.png"
                                />
                            </div>
                            <div className="flex flex-row items-center justify-start gap-[8px]">
                                <div className="relative leading-[24px] font-medium">
                                    Integration
                                </div>
                                <img
                                    className="w-6 relative h-6 overflow-hidden shrink-0"
                                    alt=""
                                    src="/component-76.svg"
                                />
                            </div>
                            <div className="flex flex-row items-center justify-start gap-[8px]">
                                <div className="relative leading-[24px] font-medium">
                                    Resources
                                </div>
                                <img
                                    className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                                    alt=""
                                    src="/component-76.svg"
                                />
                            </div>
                            <div className="flex flex-row items-center justify-start gap-[8px]">
                                <div className="relative leading-[24px] font-medium">
                                    Pricing
                                </div>
                                <img
                                    className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                                    alt=""
                                    src="/component-76.svg"
                                />
                            </div>
                        </div>
                        <img
                            className="w-6 relative h-6 overflow-hidden shrink-0"
                            alt=""
                            src="/searchalt.svg"
                        />
                        <button className="cursor-pointer [border:none] py-3 px-6 bg-blue-blue-dark rounded-357xl flex flex-row items-start justify-start hover:bg-midnightblue-100">
                            <div className="relative text-sm leading-[22px] font-medium font-body-medium-medium text-default-white text-left">
                                Sign in
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TheHeader;
