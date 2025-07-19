"use client";

import Reviews from "@/components/bannner/review/page";

import WelcomeSection from "@/components/bannner/welcomebanner/page";
import WhyChooseUs from "@/components/bannner/whychooseus/page";
import WhatWeDo from "@/components/bannner/whatwedo/page";
import PopularDestinations from "@/components/bannner/popularplace/page";
import ServicesWeProvide from "@/components/bannner/serviceweprovide/page";

export default function Home() {
  // const location = useLocation();
  // console.log(location, "suamn");
  return (
    <div>
      {/* <Banner /> */}
      <WelcomeSection />
     
    </div>
  );
}
