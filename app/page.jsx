"use client";
import Speakers from "@/components/landingPage/Speakers";
import Sponsors from "@/components/landingPage/Sponsors";
import { IIA } from "@/components/landingPage/IIA/IIA";
import HeroSection from "@/components/landingPage/heroSection/HeroSection";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Schedule from "@/components/landingPage/Schedule/Schedule";
import FAQ from "@/components/landingPage/FAQ/FAQ";
import { Footer } from "@/components/landingPage/Footer/Footer";
import About from "@/components/landingPage/About";
import Who from "@/components/landingPage/Who";
import { useEffect, useRef, useState } from "react";
import Timeline from "@/components/landingPage/Schedule/Timeline";
// import Temp from "@/components/landingPage/Speaker/Temp";
import Loader from "@/components/Loader";

export default function Home() {
  const router = useRouter();
  const scheduleRef = useRef(null);
  const [regOpen, setRegOpen] = useState(true);
  const [loader, setLoader] = useState(false);
  const [caps, setCaps] = useState(null);

  const { data: session, status } = useSession();
 
  // if (status === "authenticated") {
  //     router.push('/userDetails')
  // } else {
  // return (
  //   <div>
  {
    /* main esuumit reg landing page */
  }
  {
    /* <SignInBtn /> */
  }

  // if (status === "authenticated") {
  //     router.push('/userDetails')
  // }
  return (
    <>
      {loader && <Loader />}
      <HeroSection
        scheduleRef={scheduleRef}
        regOpen={regOpen}
        setRegOpen={setRegOpen}
      />
      <IIA />
      <About />
      <Who />
      <Schedule scheduleRef={scheduleRef} />
      {/* <Timeline scheduleRef={scheduleRef} caps={caps} /> */}
      {/* <Temp /> temp for speakers section */}
      <Speakers />
      <Sponsors />
      <FAQ />
      <Footer />
    </>
  );
}
