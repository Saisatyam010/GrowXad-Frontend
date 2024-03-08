import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { Button } from "@headlessui/react";
import { Link } from "react-router-dom";

const advertiser = [
  { title: "Benefits for Advertisers" },
  { title: "Pricing Modals" },
  { title: "Self-Serve Platform" },
  { title: "RTB traffic for advertisers " },
  { title: "Smart CPM" },
  { title: "CPA Goals" },
];
const publisher = [
  { title: "Benefits for Publishers" },
  { title: "Referal Program" },
];

const adsFormat = [
  { title: "Banner Ad" },
  { title: "Popunder Ad" },
  { title: "In Pagepush Ad" },
  { title: "Native Ad" },
  { title: "Direct Link Ad" },
  { title: "Interstitial Ad" },
];

const faq = [
  { title: "FAQ for Advertisers" },
  { title: "FAQ for Publishers" },
  { title: "FAQ for Affiliates" },
  { title: "FAQ for Campaign Settings" },
  { title: "FAQ for How to Start" },
  { title: "FAQ for Stats and Tracking" },
  { title: "FAQ for Stats and Payouts" },
  { title: "FAQ for Get Ads Codes" },
];

const freeresources = [
  { title: "Blog" },
  { title: "How to Advertise Offers" },
  { title: "How to Monetize  Traffic" },
  { title: "Case Studies" },
  { title: "GrowXad Newsletter" },
  { title: "Glossary" },
];

const login = [
  { title: "As an advertiser" },
  { title: "As an  publisher" },
  { title: "As an affiliate" },
];
const menu = [
  {
    title: "Advertiser",
    isDropdown: true,
    items: advertiser.map((ele) => {
      return {
        title: ele.title,
        isDropdown: false,
        link: ele.link,
      };
    }),
  },
  {
    title: "Publisher",
    isDropDown: true,
    items: publisher.map((ele) => {
      return {
        title: ele.title,
        isDropdown: false,
        link: ele.link,
      };
    }),
  },
  {
    title: "Ads Format",
    isDropDown: true,
    items: adsFormat.map((ele) => {
      return {
        title: ele.title,
        isDropdown: false,
        link: ele.link,
      };
    }),
  },
  {
    title: "FAQ",
    isDropDown: true,
    items: faq.map((ele) => {
      return {
        title: ele.title,
        isDropDown: false,
        link: ele.link,
      };
    }),
  },
];
console.log(menu);
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-transparent relative top-0 left-0 container flex justify-between  !items-end lg:!items-center py-2.5  ">
        <div className="flex lg:flex-none">
          <a href="#">
            <span className="sr-only">Your Company</span>
            <img
              className="w-40 h-auto cursor-pointer"
              src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/4c01b7fc-36fd-4c9d-cb34-e325db9a2400/public"
              alt=""
            />
          </a>
        </div>

        <button
          type="button"
          className="text-black w-10 h-10 inline-block lg:hidden"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Bars3Icon size={28} />
        </button>

        <nav
          className="hidden lg:flex gap-x-8 !items-center justify-between lg:px-8  "
          aria-label="Global"
        >
          <Popover.Group className="hidden lg:flex lg:gap-x-12 ">
            {menu.map((ele) => (
              <NavItem title={ele.title} items={ele.items} />
            ))}
          </Popover.Group>
        </nav>
        <div className=" gap-4 items-center hidden lg:flex">
          <Popover className="relative ">
            <Popover.Button className="flex text-gray-900 items-center text-center  gap-x-1 text-sm lg:text-lg font-bold ">
              LOG IN
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-black-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="  absolute top-10 shadow-lg -left-8  max-w-md  w-60 overflow-hidden rounded shadow-rounded-3md bg-white  ring-1  ring-gray-900/5">
                <div className="p-4">
                  {login.map((item) => (
                    <div
                      key={item.title}
                      className="group  w-full  cursor-pointer relative flex items-center gap-x-6 rounded-lg p-2 text-sm lg:text-base  hover:bg-[#71065d]"
                    >
                      <a
                        href={item.link}
                        className=" hover:text-white no-underline  block font-semibold text-gray-900 whitespace-nowrap"
                      >
                        {item.title}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <button className=" hidden md:inline-block uppercase bg-[#71065d] text-white mr-4  outline-none border border-500 rounded-lg px-10 py-2">
            SignUp
          </button>
        </div>

        {/* Mobile View*/}
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed left-0 top-0 ease-in-out duration-500 inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img
                  className="h-8 w-auto"
                  src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/4c01b7fc-36fd-4c9d-cb34-e325db9a2400/public"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 flow-root ">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6 ">
                  <Disclosure as="div" className="-mx-3 ">
                    {({ open }) => (
                      <>
                        <div></div>
                        <Disclosure.Button className="   flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          Advertisers
                          <ChevronDownIcon
                            className={classNames(
                              open ? " rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-3 space-y-2">
                          {[...advertiser].map((item) => (
                            <Disclosure.Button
                              key={item.title}
                              as="a"
                              href={item.href}
                              className=" transition-all  duration-500  ease-in block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {item.title}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          Publishers
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...publisher].map((item) => (
                            <Disclosure.Button
                              key={item.title}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {item.title}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          Ads format
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...adsFormat].map((item) => (
                            <Disclosure.Button
                              key={item.title}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {item.title}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  {/* <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          Cpa Network
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...prod, ...callsToAction].map((item) => (
                            <Disclosure.Button
                              key={item.title}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {item.title}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure> */}
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          Faq
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...faq].map((item) => (
                            <Disclosure.Button
                              key={item.title}
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {item.title}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          Free Resources
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...freeresources].map((item) => (
                            <Disclosure.Button
                              key={item.title}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {item.title}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          Login
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...login].map((item) => (
                            <Disclosure.Button
                              key={item.title}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {item.title}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                        <button className="bg-[black] cursor-pointer text-white  outline-none border border-500 rounded-md px-4 py-2">
                          SignUp
                        </button>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}

const NavItem = ({ title, items }) => {
  return (
    <Popover className="relative ">
      <Popover.Button className="flex text-gray-900 items-center text-center  gap-x-1 text-sm lg:text-lg font-bold ">
        {title}
        <ChevronDownIcon
          className="h-5 w-5 flex-none text-black-400"
          aria-hidden="true"
        />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute top-10 shadow-lg -left-8  max-w-md  w-60 overflow-hidden rounded shadow-rounded-3md bg-white  ring-1  ring-gray-900/5">
          <div className="p-4">
            {items.map((item) => (
              <div
                key={item.title}
                className="group  w-full  cursor-pointer relative flex items-center gap-x-6 rounded-lg p-2 text-sm lg:text-base  hover:bg-[#71065d]"
              >
                <a
                  href={item.link}
                  className=" hover:text-white no-underline  block font-semibold text-gray-900 whitespace-nowrap"
                >
                  {item.title}
                  <span className="absolute inset-0" />
                </a>
                <p className="mt-1 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
