import React from "react";
import Layout from "../components/Layout/Layout";

import Faqs from "../components/Faqs/Faqs";
import Testimonials from "../components/Home/Testimonials";
import AdsFormat from "../components/Home/AdFormatAdvertiserCard";
import Welcome from "../components/Home/Welcome";
import SwichComponent from "../components/Shared/SwichComponent";
import CardHome from "../components/Home/CardHome";
import Blog from "../components/Home/Blog";
import UpperFooter from "../components/Home/Rtb";
import BenefitCard from "../components/Home/BenefitsCard";
import SectionSeperator from "../components/Shared/SectionSeperator";
import Verified from "../components/Home/Verified/Verified";
import "animate.css";
import JoinGrowXAd from "../components/Home/HomeStyles/JoinGrowXAd";
import TopBanner from "../components/Home/TopBanner";

const HomePage = () => {
  return (
    <Layout>
      <TopBanner />

      <SectionSeperator />

      <SwichComponent />

      <BenefitCard />

      <SectionSeperator />

      <Testimonials />

      <SectionSeperator />

      <CardHome />

      <SectionSeperator />

      <Faqs />

      <SectionSeperator />

      <UpperFooter />

      <Verified />

      <JoinGrowXAd />

      <SectionSeperator />

      <Blog />

      <SectionSeperator />
    </Layout>
  );
};

export default HomePage;
