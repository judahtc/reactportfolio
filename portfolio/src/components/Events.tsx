import { useEffect } from "react";

export default function Events() {
    useEffect(() => {
        const animatedTextOne = document.getElementById("one");

        if (animatedTextOne) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animatedTextOne.classList.add("animate-fade-in");
                        observer.disconnect();
                    }
                });
            });

            // Start observing the element
            observer.observe(animatedTextOne);

            // Cleanup observer when component is unmounted
            return () => {
                observer.disconnect();
            };
        }
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <div className=" text-gray-700">
            <div className="flex space-x-8 mx-32 mt-8 rounded-md shadow-sm ">
                <img
                    className="rounded-s-lg"
                    style={{ height: "20rem", width: "20rem" }}
                    src="\src\assets\images\indabax.jpg"
                ></img>
                <div>
                    <div className=" pt-16">
                        <div className="font-semibold text-2xl">
                            INDABA X SOUTH AFRICA 2024
                        </div>

                        <div className="content">
                            In July 2024, l had a previledge of attending and
                            presenting on the Topic "Deploying Machine Learning
                            models on AWS" at the IndabaX Conference hosted at
                            WITS University, Johhanesburg, South Africa.
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex space-x-8 lg:mx-32 md:mx-32 mx-8 mt-8 rounded-md shadow-sm  pl-8">
                <div>
                    <div className=" pt-16">
                        <div className="font-semibold text-2xl">
                            AMAZON Q WORKSHOP
                        </div>

                        <div className="content">
                            In November 2024, l co-presented on the significance
                            of utilizing AWS' Amazon Q for Developers. I also
                            presented on how to use bucket replication for
                            financial object audits for banks and insurance
                            companies.
                        </div>
                    </div>
                </div>

                <img
                    className="rounded-e-lg"
                    style={{ height: "20rem", width: "14rem" }}
                    src="\src\assets\images\amazong.jpg"
                ></img>
            </div>
        </div>
    );
}
