import React from "react";
import Image from "next/image";
import logo from "@/public/assets/logos/Logo.png";

const About = () => {
  return (
    <div id="about" className="sm:px-5 md:px-20 flex bg-[#0E0E0E] items-center justify-center font-poppins">
      <div className="h-full w-full rounded-lg bg-gradient-to-b from-[#ffffff00] via-[#fefab730] to-[#d69a3f20] p-1 border-2 border-[#D6993F] m-12">
        <div className=" h-full w-full items-center justify-center bg-gray-800 back p-4 sm:p-8 text-center text-white bg-transparent">
          <div className="flex justify-center">
            <Image
              src={logo}
              alt="PPGS Logo"
              className="item-center h-[30vh] w-[20vw] "
            />
          </div>
          <h1 className="text-2xl md:text-4xl font-black p-4">
            About PPGS
          </h1>
          <p className="">
            Public Policy and Governance Society, IIT Kharagpur serves as a dynamic platform for impassioned students to rigorously examine, deliberate upon,and actively engage with current public Policy and governance issues. Encouraging critical thinking and fostering innovative ideation, we foster collaborative efforts among students. Our overarching goal is to empower students with the requisite knowledge, skills, and resources to effectuate meaningful change in the realm of public service. Through robust discourse and concerted action, we endeavor to cultivate future leaders dedicated to shaping a more informed, effective, and equitable governance landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
