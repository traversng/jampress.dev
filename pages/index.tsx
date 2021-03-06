import Head from 'next/head'
import { InferGetStaticPropsType } from 'next'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import Consult from '../components/svg/ConsultSVG'
import WebSearchSVG from '../components/svg/WebSearchSVG'
import MeditateSVG from '../components/svg/MeditateSVG'
import SpeedTestSVG from '../components/svg/SpeedTestSVG'
import ContactLink from '../components/ContactLink'

function Home({ pages }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <html lang="en">
      <Head>
        <title>Deep Six</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="deepsix website consultancy" />
      </Head>
      <link
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700&display=swap"
        rel="preload"
      />
      <div
        className="leading-normal tracking-normal text-white gradient"
        style={{
          fontFamily: `'Source Sans Pro', sans-serif`,
        }}
      >
        {/* Nav */}
        <Nav pages={pages} />

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

        <section className="bg-white border-b pt-8">
          <div className="container max-w-5xl mx-auto m-8">
            <h1 className="w-full px-6 my-2 text-5xl font-bold leading-tight text-gray-800">
              Modern Web Development
            </h1>
            <div className="w-full px-6 mb-4">
              <div className="h-1 gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>

            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Performance
              </h3>
              <p className="text-gray-600 mb-8">
                We use the latest technologies to ensure you have the highest
                performance and SEO capabilities
              </p>
            </div>
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                SEO
              </h3>
              <p className="text-gray-600 mb-8">
                When you ditch the older technologies, you can take advantage of
                the cool stuff. Now you can serve dynamic page previews in
                social media posts!
              </p>
            </div>
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Reliable
              </h3>
              <p className="text-gray-600 mb-8">
                No servers needed. Eliminate server hacks and crashes.
              </p>
            <ContactLink classes="mx-auto lg:mx-0 hover:underline gradient text-white bg-black font-bold rounded-full my-6 py-4 px-8 shadow-lg" />
            </div>
          </div>
        </section>

        <section className="bg-white border-b py-8">
          <div className="container max-w-5xl mx-auto m-8">
            <h1 className="w-full px-6 my-2 text-5xl font-bold leading-tight text-gray-800">
              How we do it
            </h1>
            <div className="w-full px-6 mb-4">
              <div className="h-1 gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>

            <div className="flex flex-wrap md:my-12">
              <div className="w-5/6 sm:w-1/2 p-6">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Performance First
                </h3>
                <p className="text-gray-600 mb-8">
                  We build mobile first sites to the highest performance
                  standards, using the latest cutting edge technologies.
                </p>
              </div>
              <SpeedTestSVG />
            </div>

            <div className="flex flex-wrap flex-col-reverse sm:flex-row md:my-12">
              <WebSearchSVG />
              <div className="w-full sm:w-1/2 p-6 mt-6">
                <div className="align-middle">
                  <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                    SEO
                  </h3>
                  <p className="text-gray-600 mb-8">
                    SEO is no mystery. Google tells us how to improve our
                    rankings through providing good relevant content. The
                    challenge is ensuring we are telling google about our
                    content.
                  </p>
                  <p className="text-gray-600 mb-8">
                    Performance is also a key factor in your SEO strategy. Did
                    you know that Google penalizes slow websites? We ensure that
                    all pages load as fast as possible and tell Google
                    everything about them. This ensures that you are doing
                    everything possible to rank higher.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap md:my-12">
              <div className="w-5/6 sm:w-1/2 p-6">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Reliability
                </h3>
                <p className="text-gray-600 mb-8">
                  Using the latest technologies, we ensure that your site will
                  be available throughout the world. Because we are not limited
                  by the old methods of developing, we can take advantage of the
                  cloud.
                </p>
                <p className="text-gray-600 mb-8">
                  Users requesting your site in Austin, Texas means it will be
                  served at the closest server to them in Austin, Texas.
                </p>
                <p className="text-gray-600 mb-8">
                  We also eliminate server hacks and crashes which means less
                  headache and more uptime for your business.
                </p>
              </div>
              <MeditateSVG />
            </div>
          </div>
        </section>

        <section className="bg-white border-b py-8">
          <div className="container mx-auto flex flex-wrap pt-4 pb-12">
            <h1 className="w-full my-2 px-6 md:text-center text-5xl font-bold leading-tight text-gray-800">
              Ongoing Support
            </h1>
            <div className="w-full mb-4 px-6">
              <div className="h-1 md:mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>

            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <a
                  href="#"
                  className="flex flex-wrap no-underline hover:no-underline"
                >
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                    We keep your tech stack up to date
                  </p>
                  <div className="w-full font-bold text-xl text-gray-800 px-6">
                    Updates
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
                    Just like Wordpress
                  </p>
                  <div className="w-full font-bold text-xl text-gray-800 px-6">
                    Content changes
                  </div>
                  <p className="text-gray-800 text-base px-6 mb-5">
                    You can edit content just like Wordpress or other
                    traditional website builders, but without the baggage that
                    comes along.
                  </p>
                </a>
              </div>
            </div>

            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <a
                  href="#"
                  className="flex flex-wrap no-underline hover:no-underline"
                >
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                    They happen
                  </p>
                  <div className="w-full font-bold text-xl text-gray-800 px-6">
                    Bug fixes
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

        <section className="container px-6 mx-auto text-center py-6 mb-12">
          <ContactForm />
        </section>

        <Footer />
      </div>
      <style jsx>
        {`
          .gradient {
            background: rgb(0,0,0);
background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(92,92,92,1) 50%, rgba(129,129,129,1) 100%);
        `}
      </style>
    </html>
  )
}

export const getStaticProps = async () => {
  type Pages = string[]
  const pages: Pages = ['Contact']
  return {
    props: {
      pages,
    },
  }
}

export default Home
