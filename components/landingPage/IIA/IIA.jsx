import React from "react";
import IIACard from "./IIACard";
import actuate from "@/public/assets/landingPage/IIA/actuate.svg";
import ideate from "@/public/assets/landingPage/IIA/ideate.svg";
import innovate from "@/public/assets/landingPage/IIA/innovate.svg";

export const IIA = () => {
  const data = [
    {
      img: ideate,
      title: "Debate",
      description:
        "Engage in insightful discussions, defend your stance with logic, and challenge perspectives to refine your argumentation skills.",
    },
    {
      img: innovate,
      title: "Deliberate",
      description:
        "Analyze policies, navigate governance frameworks, and collaborate to shape well-informed legislative solutions.",
    },
    {
      img: actuate,
      title: "Lead",
      description:
        "Step into the shoes of decision-makers, influence outcomes, and contribute to impactful policy dialogues.",
    },
  ];
  const cards = data.map((item) => (
    <IIACard
      key={item.title}
      img={item.img}
      title={item.title}
      description={item.description}
    />
  ));
  return (
    <section className="flex flex-col bg-[#0E0E0E] items-center md:flex-row w-full justify-around px-10 gap-5">
      {cards}
    </section>
  );
};
