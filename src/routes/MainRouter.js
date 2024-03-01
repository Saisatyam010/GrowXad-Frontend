import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../main/pages/HomePage'
import CpaNetworks from '../main/pages/cpaNetworks/CpaNetworks'
import BannerAd from '../main/pages/adFormatPages/BannerAds'

import PopunderAd from '../main/components/AdFormat/PopunderAd/PopunderAd'
import NativeAd from '../main/components/AdFormat/NativeAd/NativeAd'
import InPagePushAds from '../main/pages/adFormatPages/InPagePushAds'
import DirectLinkAd from '../main/components/AdFormat/Direct_Link/DirectLinkAd'
import InterstitialAd from '../main/components/AdFormat/Interstitial/InterstitialAd'
import FaqForAdvertisers from '../main/pages/faq/FaqForAdvertisersPage'
import { FaqForPublishersPage } from '../main/pages/faq/FaqForPublishersPage'
import { FaqForAffiliatesPage } from '../main/pages/faq/FaqForAffiliatesPage'
import { CampaignSettingPage } from '../main/pages/faq/CampaignSettingPage'
import { HowToStartPage } from '../main/pages/faq/HowToStartPage'
import { StatsAndTrackingPage } from '../main/pages/faq/StatsAndTrackingPage'
import { StatsAndPayoutPage } from '../main/pages/faq/StatsAndPayoutsPage'
import { GetAdsCodes } from '../main/pages/faq/GetAdsCodes'
import { Blogs } from '../main/pages/freeResources/Blogs/Blogs'
import { TrafficMonitization } from '../main/pages/freeResources/TrafficMonitization/TrafficMonitization'
import { CaseStudies } from '../main/pages/freeResources/CaseStudies/CaseStudies'
import { Newsletter } from '../main/pages/freeResources/NewsLetter/Newsletter'
import { Glossary } from '../main/pages/freeResources/Glossary/Glossary'
import { HowToAdvertise } from '../main/pages/freeResources/HowToAdvertiseOffers/HowToAdvertise'
import { BenifitsForPublishers } from '../main/pages/publisherPages/BenifitsForPublisher/BenifitsForPublishers'
import { ReferralProgram } from '../main/pages/publisherPages/ReferralProgram/ReferralProgram'

import AdvertisersPricingPage from '../main/pages/advertiserPages/AdvertisersPricingPage'
import AdvertisersCpaGoalPage from '../main/pages/advertiserPages/AdvertisersCpaGoalPage'
import AdvertisersBenefitsPage from '../main/pages/advertiserPages/AdvertisersBenefitsPage'
import AdvertisersSelfServePage from '../main/pages/advertiserPages/AdvertisersSelfServePage'
import AdvertisersSmartCpmPage from '../main/pages/advertiserPages/AdvertisersSmartCpmPage'
import AdvertisersRtbPage from '../main/pages/advertiserPages/AdvertisersRtbPage'


const MainRouter = () => {
  const mainRoutes = [

    // Aadvertiser Pages

    {
      path: '/home',
      component: <HomePage />,
      exact: true
    },

    {
      path: '/advetisers-benfits/',
      component: <AdvertisersBenefitsPage />,
      exact: true
    },
    {
      path: '/advetisers-pricing/',
      component: <AdvertisersPricingPage />,
      exact: true

    },
    // {
    //   path: '/advetisers-rtb/',
    //   component: <AdvertisersRtbPage />,
    //   exact: true

    // },
    {
      path: '/advetisers-cpagoal/',
      component: <AdvertisersCpaGoalPage />,
      exact: true
    },
    {
      path: '/advetisers-selfserve/',
      component: <AdvertisersSelfServePage />,
      exact: true
    },
    {
      path: '/advetisers-rtbtraffic/',
      component: <AdvertisersRtbPage />,
      exact: true
    },


    {
      path: '/advetisers-smartcpm/',
      component: <AdvertisersSmartCpmPage />,
      exact: true

    },



    // Ad Format 
    {
      path: '/bannerAds',
      component: <BannerAd />,
      exact: true

    },
    {
      path: '/popunderAds',
      component: <PopunderAd />,
      exact: true

    },
    {
      path: '/nativeAd',
      component: <NativeAd />,
      exact: true

    },
    {
      path: '/inpagepushAd',
      component: <InPagePushAds />,
      exact: true

    },
    {
      path: '/directlinkad',
      component: <DirectLinkAd />,
      exact: true

    },
    {
      path: '/interstitialad',
      component: <InterstitialAd />,
      exact: true

    },

    // CPA Network 

    {
      path: '/cpanetwork',
      component: <CpaNetworks />,
      exact: true
    },

    // FAQ Pages

    {
      path: '/faqforadvertisers',
      component: <FaqForAdvertisers />,
      exact: true
    },

    {
      path: '/faqforpublishers',
      component: <FaqForPublishersPage />,
      exact: true
    },
    {
      path: '/faqforaffiliates',
      component: <FaqForAffiliatesPage />,
      exact: true
    },
    {
      path: '/faqforcampaignsettings',
      component: <CampaignSettingPage />,
      exact: true
    },
    {
      path: '/faqforhowtostart',
      component: <HowToStartPage />,
      exact: true
    },
    {
      path: '/faqforstatsandtracking',
      component: <StatsAndTrackingPage />,
      exact: true
    },
    {
      path: '/faqforstatsandandpayouts',
      component: <StatsAndPayoutPage />,
      exact: true
    },
    {
      path: '/faqforgetadscodes',
      component: <GetAdsCodes />,
      exact: true
    },

    // Free Resources

    {
      path: '/blogs',
      component: <Blogs />,
      exact: true
    },
    {
      path: '/trafficmonitization',
      component: <TrafficMonitization />,
      exact: true
    },
    {
      path: '/casestudies',
      component: <CaseStudies />,
      exact: true
    },
    {
      path: '/newsletters',
      component: <Newsletter />,
      exact: true
    },
    {
      path: '/glossary',
      component: <Glossary />,
      exact: true
    },
    {
      path: '/howtoadvertiseoffers',
      component: <HowToAdvertise />,
      exact: true
    },

    // Advertiser Pages

    {
      path: '/benifitsforpublishers',
      component: <BenifitsForPublishers />,
      exact: true
    },
    {
      path: '/referralprogram',
      component: <ReferralProgram />,
      exact: true
    },









    // 


  ]
  return (

    <Routes>
      <Route path="/" element={<HomePage />} />
      {mainRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={route.component}
          exact={route.exact}
        />

      ))}
    </Routes>
  )
}

export default MainRouter