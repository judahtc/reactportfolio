import { useState } from "react";

export default function NavBar() {
    const me = "{JC}";

    const [toggle, SetToggle] = useState(false);

    function toggleFunc() {
        SetToggle(!toggle);
    }
    return (
        <div className="navbar bg-gray-500 relative">
            <div className="  text-white flex items-center justify-between py-3 lg:px-24 md:px-24 px-2 w-full">
                <div className="font-bold text-2xl">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 90 90"
                        width="40"
                        height="40"
                    >
                        <defs>
                            <filter
                                id="shadow"
                                x="-50%"
                                y="-50%"
                                width="200%"
                                height="200%"
                            >
                                <feDropShadow
                                    dx="0"
                                    dy="4"
                                    stdDeviation="6"
                                    flood-color="rgba(0, 0, 0, 0.3)"
                                />
                            </filter>
                        </defs>

                        <circle
                            cx="100"
                            cy="100"
                            r="95"
                            fill="url(#gradient)"
                            filter="url(#shadow)"
                        />

                        <circle
                            cx="100"
                            cy="100"
                            r="85"
                            fill="none"
                            stroke="#ffffff"
                            stroke-width="6"
                        />

                        <text
                            x="50%"
                            y="50%"
                            text-anchor="middle"
                            dominant-baseline="central"
                            font-family="Arial, sans-serif"
                            font-size="64"
                            font-weight="bold"
                            fill="#ffffff"
                        >
                            {me}
                        </text>
                    </svg>
                </div>
                <div
                    className="menu lg:hidden md:hidden block"
                    onClick={toggleFunc}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="34"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-menu"
                    >
                        <line x1="4" x2="20" y1="12" y2="12" />
                        <line x1="4" x2="20" y1="6" y2="6" />
                        <line x1="4" x2="20" y1="18" y2="18" />
                    </svg>
                </div>
                <div className="hidden lg:block md:block">
                    <div className="nav-items  lg:space-x-5 lg:flex-row lg:font-bold md:space-x-5 md:flex-row md:font-bold text">
                        <span>Home</span>

                        <span>Blog</span>
                        <span>Projects</span>
                    </div>
                </div>
            </div>

            {toggle && (
                <div className="text-white px-4 pb-3 absolute top-0 right-0 w-72 h-96 bg-gray-500 ">
                    <div className="block lg:hidden md:hidden ">
                        <div className="nav-items flex flex-col md:font-bold text space-y-5">
                            <span>Home</span>

                            <span>Blog</span>
                            <span>Projects</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
