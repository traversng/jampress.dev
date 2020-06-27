import Head from 'next/head'
import Link from 'next/link'
import { Button } from 'theme-ui'
import Base from '../layouts/Base'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Consult from '../components/svg/Consult'
import Plan from '../components/svg/Plan'
import DevelopSVG from '../components/svg/DevelopSVG'

export default function Home() {
  return (
    <Base>
      <Head>
        <title>Jampress</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Font Awesome if you need it */}
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/tailwindcss/dist/tailwind.min.css"
      />
      {/* Replace with your tailwind.css once created */}
      <link
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700"
        rel="stylesheet"
      />
      <div
        className="leading-normal tracking-normal text-white gradient"
        style={{ fontFamily: `'Source Sans Pro', sans-serif` }}
      >
        {/* Nav */}
        <Nav />

        <Hero />

        <div className="relative -mt-12 lg:-mt-24">
          <svg viewBox="0 0 1428 174" version="1.1">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g
                transform="translate(-2.000000, 44.000000)"
                fill="#FFFFFF"
                fillRule="nonzero"
              >
                <path
                  d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                  id="Path-4"
                  opacity="0.200000003"
                ></path>
              </g>
              <g
                transform="translate(-4.000000, 76.000000)"
                fill="#FFFFFF"
                fillRule="nonzero"
              >
                <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
              </g>
            </g>
          </svg>
        </div>

        <section className="bg-white border-b py-8">
          <div className="container max-w-5xl mx-auto m-8">
            <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
              Jampress model
            </h1>
            <div className="w-full mb-4">
              <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>

            <div className="flex flex-wrap">
              <div className="w-5/6 sm:w-1/2 p-6">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Consult
                </h3>
                <p className="text-gray-600 mb-8">
                  Audit on existing site or discuss your new project
                </p>
              </div>
              <Consult />
            </div>

            <div className="flex flex-wrap flex-col-reverse sm:flex-row">
              <Plan />
              <div className="w-full sm:w-1/2 p-6 mt-6">
                <div className="align-middle">
                  <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                    Planning
                  </h3>
                  <p className="text-gray-600 mb-8">
                  Scope and plan your modern website. Your site will have the highest performance and give you a competitive edge
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-5/6 sm:w-1/2 p-6">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Develop
                </h3>
                <p className="text-gray-600 mb-8">
                  Development starts and you are updated
                </p>
              </div>
              <DevelopSVG />
            </div>
          </div>
        </section>

        <section className="bg-white border-b py-8">
          <div className="container mx-auto flex flex-wrap pt-4 pb-12">
            <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
              Ongoing Support
            </h1>
            <div className="w-full mb-4">
              <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>

            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <a
                  href="#"
                  className="flex flex-wrap no-underline hover:no-underline"
                >
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                    Updates
                  </p>
                  <div className="w-full font-bold text-xl text-gray-800 px-6">
                    We keep your tech stack up to date
                  </div>
                  <p className="text-gray-800 text-base px-6 mb-5">
                    Technologies change and so does the browser
                  </p>
                </a>
              </div>
              {/* <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="flex items-center justify-start">
                  <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                    Stay Updated
                  </button>
                </div>
              </div> */}
            </div>

            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <a
                  href="#"
                  className="flex flex-wrap no-underline hover:no-underline"
                >
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                    Content changes
                  </p>
                  <div className="w-full font-bold text-xl text-gray-800 px-6">
                    Just like Wordpress
                  </div>
                  <p className="text-gray-800 text-base px-6 mb-5">
                    You can edit content just like Wordpress, but without the compromises of it.
                  </p>
                </a>
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="flex items-center justify-center">
                  <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                    Learn How
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <a
                  href="#"
                  className="flex flex-wrap no-underline hover:no-underline"
                >
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                    Bug fixes
                  </p>
                  <div className="w-full font-bold text-xl text-gray-800 px-6">
                    They happen
                  </div>
                  <p className="text-gray-800 text-base px-6 mb-5">
                    Get around the clock support on bug fixes
                  </p>
                </a>
              </div>
              {/* <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="flex items-center justify-end">
                  <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                    Action
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-8">
          <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
            <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
              Pricing
            </h1>
            <div className="w-full mb-4">
              <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
              <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
                <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                  <div className="p-8 text-3xl font-bold text-center border-b-4">
                    Free
                  </div>
                  <ul className="w-full text-center text-sm">
                    <li className="border-b py-4">Thing</li>
                    <li className="border-b py-4">Thing</li>
                    <li className="border-b py-4">Thing</li>
                  </ul>
                </div>
                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                  <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                    £0 <span className="text-base">for one user</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10">
                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                  <div className="w-full p-8 text-3xl font-bold text-center">
                    Basic
                  </div>
                  <div className="h-1 w-full gradient my-0 py-0 rounded-t"></div>
                  <ul className="w-full text-center text-base font-bold">
                    <li className="border-b py-4">Thing</li>
                    <li className="border-b py-4">Thing</li>
                    <li className="border-b py-4">Thing</li>
                    <li className="border-b py-4">Thing</li>
                  </ul>
                </div>
                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                  <div className="w-full pt-6 text-4xl font-bold text-center">
                    £x.99 <span className="text-base">/ per user</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
                <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                  <div className="p-8 text-3xl font-bold text-center border-b-4">
                    Pro
                  </div>
                  <ul className="w-full text-center text-sm">
                    <li className="border-b py-4">Thing</li>
                    <li className="border-b py-4">Thing</li>
                    <li className="border-b py-4">Thing</li>
                  </ul>
                </div>
                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                  <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                    £x.99 <span className="text-base">/ per user</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Change the colour #f8fafc to match the previous section colour --> */}
        <svg className="wave-top" viewBox="0 0 1439 147" version="1.1">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-1.000000, -14.000000)" fillRule="nonzero">
              <g className="wave" fill="#f8fafc">
                <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
              </g>
              <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
                <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                  <path
                    d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                    opacity="0.100000001"
                  ></path>
                  <path
                    d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                    opacity="0.100000001"
                  ></path>
                  <path
                    d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                    opacity="0.200000003"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>

        <section className="container mx-auto text-center py-6 mb-12">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
            Book Us
          </h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <h3 className="my-4 text-3xl leading-tight">
            Help us help you!
          </h3>

          <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">
            Book Us
          </button>
        </section>

        <Footer />
      </div>
      {/* Define your gradient here - use online tools to find a gradient matching your branding */}
      ;
      <style jsx>
        {`
          .gradient {
            background: rgb(0,37,226);
            background: linear-gradient(90deg, rgba(0,37,226,1) 0%, rgba(0,176,255,1) 50%, rgba(187,205,255,1) 100%);
        `}
      </style>
    </Base>
  )
}
