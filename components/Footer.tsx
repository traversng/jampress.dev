import LightningSVG from './svg/LightningSVG'

export default function () {
  return (
    <footer className="bg-white">
      <div className="container mx-auto  px-8">
        <div className="w-full flex justify-around flex-col md:flex-row py-6">
          <div className="mb-6">
            <a
              className="text-black no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="#"
            >
              <LightningSVG color='black' />{' '}
              Deep Six
            </a>
          </div>
          <div className="">
            <p className="uppercase text-gray-500 md:mb-6">Social</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://linkedin.com/in/travis-ueki"
                  className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
                  Linkedin
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://twitter.com/traversng"
                  className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Company</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
                  Official Blog
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
                  About Us
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#"
                  className="no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  )
}
