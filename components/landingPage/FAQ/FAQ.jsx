import Image from "next/image";
import Accordian from "./Accordian";
import { useState } from "react";
import faqImage from "@/public/assets/landingPage/FAQ/faq.svg";

const FAQ = () => {
  const [showAnsNumber, setShowAnsNumber] = useState(-1);
  const handleClick = (id) => {
    if (id === showAnsNumber) {
      setShowAnsNumber(-1);
    } else {
      setShowAnsNumber(id);
    }
  };

  const faqs = [
    {
      id: 1,
      q: " Will there be any registration fees?",
      ans: ["No, the event is free of cost. You can register Via UNSTOP Website"],
    },
    {
      id: 2,
      q: "What is the duration of the event?",
      ans: [
        "There are a total of 3 events scheduled. Scroll above for the required event details.",
      ],
    },
    {
      id: 3,
      q: "Evaluation Criteria",
      ans: [
        "1. Parliamentary etiquette and adherence to procedures.",  
        "2. Quality of content presented during debates and discussions.",  
        "3. Collaboration with peers in committees or party groups.", 
        "4. Overall performance in representing their assigned roles.",
      ],
    },
    {
      id: 4,
      q: "Will there be cash prize for competitions?",
      ans: [
        "Yes",
        ":- Winners will be rewarded with Pre-Placement Interviews from our sponsors I-PAC and Hammurabi & Solomon Partners, along with a cash prize of INR 25,000 to the team.",
        ":- The first runner-up will be rewarded with Pre-Placement Interviews from our sponsors I-PAC and Hammurabi & Solomon Partners along with a cash prize of INR 15,000 to the team.",
        ":- The second runner-up will be rewarded with Pre-Placement Interviews from our sponsors I-PAC and Hammurabi & Solomon Partners along with a cash prize of INR 10,000 to the team.",
        ":- The top 4-10 teams will be rewarded with Pre-Placement Interviews from our sponsors I-PAC and Hammurabi & Solomon Partners.",
        ":- E-certificates for all the participants."
      ],
    },
    // {
    //   id: 5,
    //   q: "Is there a limit for E-talk ?",
    //   ans: [
    //     "The limit for E-talk is 1500 people, it’s scheduled for 15th April from 2pm-7pm.",
    //   ],
    // },
    {
      id: 6,
      q: "I still have some doubts regarding the event, how can i get them resolved?",
      ans: [
        "Contact the following for assistance:",
        "Shivam Kumar",
        "ppgs.iitkgp@gmail.com",
        "+919832651607",
      ],
    },
  ];

  const faqSection = faqs.map((questionObj) => (
    <Accordian
      key={questionObj.id}
      {...questionObj}
      handleClick={handleClick}
      showAnsNumber={showAnsNumber}
    />
  ));

  return (
    <section className="relative min-h-[60vh] sm:min-h-[80vh] bg-[#0E0E0E] w-full flex justify-center items-center font-poppins">
      <div className="flex flex-col sm:flex-row gap-10 items-center w-3/4">
        <div className="w-full sm:w-1/2 flex sm:flex-col items-center gap-5 sm:gap-0">
          <div className="text-left">
            <Image className="h-44" src={faqImage} />
            <h1 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-br from-[#DCA64E] via-[#FEFAB7] to-[#D6993F] bg-clip-text text-transparent">
              <p>Answers To Some</p>
              <p>Commonly Asked Questions</p>
            </h1>
          </div>
        </div>
        <div className="w-full sm:w-1/2 h-full flex flex-col gap-2 items-start">
          {faqSection}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
