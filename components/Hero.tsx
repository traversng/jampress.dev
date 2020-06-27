import SpeedTest from '../components/svg/SpeedTest'

export default function () {
  return (
    <div className="pt-24">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        {/* <!--Left Col--> */}
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <p className="uppercase tracking-loose w-full">
            Top Tier Website and Application Development
          </p>
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Websites built for tomorrow
          </h1>
          <p className="leading-normal text-2xl mb-8">
            Fast, Mobile First, SEO Optimized
          </p>

          <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">
            Subscribe
          </button>
        </div>
        {/* <!--Right Col--> */}
        <div className="w-full md:w-3/5 py-6 text-center">
          <SpeedTest/>
        </div>
      </div>
    </div>
  )
}
