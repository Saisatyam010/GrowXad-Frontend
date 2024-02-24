import React from 'react'
import Layout from '../components/Layout/Layout'

import Faqs from '../components/Faqs/Faqs'
import Testimonials from '../components/Home/Testimonials'
import AdsFormat from '../components/Home/AdFormatAdvertiserCard'
import Welcome from '../components/Home/Welcome'
import SwichComponent from '../components/Shared/SwichComponent'
import CardHome from '../components/Home/CardHome'
import Blog from '../components/Home/Blog'
import UpperFooter from '../components/Home/Rtb'
import BenefitCard from '../components/Home/BenefitsCard'
import SectionSeperator from '../components/Shared/SectionSeperator'
import Verified from '../components/Home/Verified/Verified'
import AllWhiteCards from '../components/Home/AllWhiteCards/AllWhiteCards'
import { BenefitCardMenu } from '../components/Shared/data/benefitCardMenu'






const HomePage = () => {
  return (
    <Layout>


      <Welcome />
      <SectionSeperator />

      <AllWhiteCards message={BenefitCardMenu} />
      <SwichComponent />
      <SectionSeperator />
      <SectionSeperator />
      <SectionSeperator />

      <SectionSeperator />
      <SectionSeperator />
      <SectionSeperator />

      <Testimonials />
      <SectionSeperator />
      <SectionSeperator />
      <SectionSeperator />

      <CardHome />
      <SectionSeperator />
      <SectionSeperator />
      <SectionSeperator />
      <Faqs />
      <SectionSeperator />
      <SectionSeperator />
      <SectionSeperator />
      <UpperFooter />
      <SectionSeperator />
      <SectionSeperator />
      <SectionSeperator />
      <Verified />
      <SectionSeperator />
      <SectionSeperator />
      <SectionSeperator />
      <Blog />

    </Layout>

  )
}

export default HomePage