import { useState, useEffect } from "react";

export default function About() {
  const [readMore, setReadMore] = useState(true);

  // This will handle the "Read more" functionality
  function readmore() {
    setReadMore(!readMore);
  }

  useEffect(() => {
    const animatedText = document.getElementById("animatedText");

    // Check if the element exists
    if (animatedText) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Apply the fade-in animation when the element is in view
            animatedText.classList.add("animate-fade-in");
            observer.disconnect(); // Stop observing once animation has been triggered
          }
        });
      });

      // Start observing the element
      observer.observe(animatedText);

      // Cleanup observer when component is unmounted
      return () => {
        observer.disconnect();
      };
    }
  }, []); // Empty dependency array ensures this effect runs only once

  const localstyle = {
    fontFamily: 'Raleway, Arial, sans-serif',
  };

  return (
    <>
      <div
        className="ml-40 mr-20 mt-24 w-1/2 opacity-0 transform translate-y-10" // Added opacity and translation
        id="animatedText"
        style={localstyle}
      >
        <div className="title font-extrabold text-2xl mb-5 text-gray-700">⚡About Me</div>
        <div className="w-11/12 ml-3 mb-3 text-md text-gray-700">
          <p className="mb-3">
            I am a passionate software Engineer experienced in architecturing,
            designing and developing Enterprice Web Applications since 2020. I
            program in various programming languages including and not limited to
            Python, TypeScript, JavaScript, C# and Java.
          </p>

          <p>
            {readMore ? (
              <span>
                I am a certified AWS Professional with extensive experience
                designing, implementing, and managing cloud-based solutions. My
                expertise spans building secure, scalable, and cost-effective
                architectures using core AWS services. I specialize in developing
                and deploying serverless applications, optimizing cloud{" "}
                <i
                  className="text-blue-500 cursor-pointer"
                  onClick={readmore}
                >
                  Read more ...
                </i>
              </span>
            ) : (
              <span>
                I am a certified AWS Professional with extensive experience
                designing, implementing, and managing cloud-based solutions. My
                expertise spans building secure, scalable, and cost-effective
                architectures using core AWS services. I specialize in developing
                and deploying serverless applications, optimizing cloud
                infrastructure for performance and cost, and ensuring compliance
                with industry standards such as ISO 27001 and GDPR. With hands-on
                experience in DevOps practices, I leverage tools like AWS
                CodePipeline, Terraform, and Elastic Beanstalk to automate
                deployments and streamline development workflows{" "}
                <i
                  className="text-blue-500 cursor-pointer"
                  onClick={readmore}
                >
                  Read less ...
                </i>
              </span>
            )}
          </p>
        </div>
      </div>
    </>
  );
}
