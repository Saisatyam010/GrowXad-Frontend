import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, ChevronDownIcon, PlayCircleIcon, PhoneIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { ArrowPathIcon, ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, SquaresPlusIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import welcomeStyles from '../../Home/HomeStyles/Welcome.module.css'
import './Navbar.css'
const HeaderMenu = [
  {
    name: 'Advertisers', data: [
      { name: 'Benefits for Advertisers', to: "/advetisers-benfits/" },
      { name: 'Pricing Models', to: "/advetisers-pricing/" },
      { name: 'Self-Serve Platform', to: "/advetisers-selfserve/" },
      { name: 'RTB traffic for advertisers', to: "/advetisers-rtbtraffic" },
      { name: 'Smart CPM', to: "/advetisers-smartcpm" },
      { name: 'CPA Goal', to: "/advetisers-cpagoal/" },
    ]
  },
  {
    name: 'Publishers', data: [
      { name: 'Benefits for Publishers', to: "/benifitsforpublishers" },
      { name: 'Referral Program', to: "/referralprogram" },
    ]
  },
  {
    name: 'Ads Format',
    data: [
      { name: 'Banner Ad', to: "/bannerads" },
      { name: 'Popunder Ad', to: "/popunderads" },
      { name: 'In Pagepush Ad', to: "/inpagepushad" },
      { name: 'Native Ad', to: "/nativead" },
      { name: 'Direct Link Ad', to: "/directlinkad" },
      { name: 'Interstitial Ad', to: "/interstitialad" },
    ]
  },
  {
    name: 'Cpa Network', to: "/cpanetwork"
    // data: [
    //   { name: "Cpa Network", to: "/cpanetwork" }
    // ]
  },
  {
    name: 'Faq',
    data: [
      { name: 'FAQ for Advertisers', to: "/faqforadvertisers" },
      { name: 'FAQ for Publishers', to: "/faqforpublishers" },
      { name: 'FAQ for Affiliates', to: "/faqforaffiliates" },
      { name: 'FAQ for Campaign Settings', to: "/faqforcampaignsettings" },
      { name: 'FAQ for How to Start', to: "/faqforhowtostart" },
      { name: 'FAQ for Stats and Tracking', to: "/faqforstatsandtracking" },
      { name: 'FAQ for Stats and Payouts', to: "/faqforstatsandandpayouts" },
      { name: 'FAQ for Get Ads Codes', to: "/faqforgetadscodes" },
    ]
  },
  {
    name: 'Free Resources',
    data: [
      { name: 'Blog', to: '/blogs' },
      { name: 'How to Advertise Offers', to: '/howtoadvertiseoffers' },
      { name: 'How to Monetize Traffic', to: '/trafficmonitization' },
      { name: 'Case Studies', to: '/casestudies' },
      { name: 'GrowXAd Newsletter', to: '/newsletters' },
      { name: 'Glossary', to: '/glossary' },
    ]
  },
  {
    name: 'Login', data: [
      { name: 'As an advertiser' },
      { name: 'As a publisher' },
      { name: 'As an affiliate' },
    ]
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  console.log(mobileMenuOpen, "mobileMenuOpen")
  return (
    <header className="bg-black  sticky top-0 flex items-center justify-center w-100" style={{ zIndex: "9999" }}>
      <nav className="flex items-center justify-center !container mx-auto py-[0.4rem]" aria-label="Global">
        <div className="flex lg:flex-1 ">
          <Link to="/">
            <div>
              <img className="" src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/ab447981-3b6d-4f3a-3739-e75b2032e900/public"
                alt="" height={100} width={200} />
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex items-center gap-x-4 xl:gap-x-12 " >
          {HeaderMenu.map((menu, index) => (
            <Popover key={index} >
              {({ open }) => (
                <>
                  {menu.name == "Cpa Network" ?
                    <Popover.Button className="flex items-center gap-x-1 xl:text-lg font-semibold leading-6 text-white hover:text-indigo-600 focus:outline-none pophover">
                      <Link to="/cpanetwork" className='no-underline text-white hover:no-underline'> {menu.name} </Link>
                      {menu.data && <ChevronDownIcon className="h-5 w-5 flex-none text-white transform transition-transform itemicon itemicon" aria-hidden="true" />}
                    </Popover.Button>
                    :
                    <Popover.Button className="flex items-center gap-x-1 xl:text-lg font-semibold leading-6 text-white hover:text-indigo-600 focus:outline-none">
                      {menu.name}
                      {menu.data && <ChevronDownIcon className="h-5 w-5 flex-none text-white transform transition-transform itemicon" aria-hidden="true" />}
                    </Popover.Button>
                  }
                  {menu.data && (
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute bg-white shadow rounded-md w-60 mt-3 p-4">
                        <div className="p-0 ">
                          {menu.data.map((item) => (
                            <>
                              {/* {item.name === 'Login' && } */}
                              <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-2  text-sm leading-6 hoverClChange ">
                                <div className="w-100">
                                  <Link to={item.to || '#'} className="block font-semibold text-gray-900 no-underline text-[1rem]">
                                    {item.name}
                                    <span className="absolute inset-0" />
                                  </Link>
                                </div>
                              </div>
                            </>
                          ))}
                        </div>
                      </Popover.Panel>
                    </Transition>
                  )}
                </>
              )}
            </Popover>
          ))}
          <Link to="#" className=" w-90">
            <Button variant="outline" className='gradient_signup w-100'>Signup</Button>{' '}
          </Link>
        </Popover.Group>
        {/* Mobile Menu */}
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed top-20 inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex flex-col gap-y-4">
              {HeaderMenu.map((menu, index) => (
                <Fragment key={index}>
                  {menu.data ? (
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex justify-between items-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-md focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span>{menu.name}</span>
                            <ChevronDownIcon
                              className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-gray-500`}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Transition
                            enter="transition-all ease-out duration-300"
                            enterFrom="opacity-0 max-h-0"
                            enterTo="opacity-100 max-h-screen"
                            leave="transition-all ease-in duration-200"
                            leaveFrom="opacity-100 max-h-screen"
                            leaveTo="opacity-0 max-h-0"
                          >
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                              {menu.data.map((item, index) => (
                                <Link key={index} to={item.to || '#'} className="block py-2">
                                  {item.name}
                                </Link>
                              ))}
                            </Disclosure.Panel>
                          </Transition>
                        </>
                      )}
                    </Disclosure>
                  ) : (
                    <Link to="#" className="block px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-md focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      {menu.name}
                    </Link>
                  )}
                </Fragment>
              ))}
              <Link to="#" className="block px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-md focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                Signup
              </Link>
            </div>
          </Dialog.Panel>
        </Dialog>
      </nav>
    </header>
  );
}
