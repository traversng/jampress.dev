export default function () {
  return (
    <div>
      {/* <!-- Full width column --> */}
      <div className="flex mb-4">
        <div className="w-full bg-gray-500 h-12"></div>
      </div>

      {/* <!-- Two columns --> */}
      <div className="flex mb-4">
        <div className="w-1/2 bg-gray-400 h-12"></div>
        <div className="w-1/2 bg-gray-500 h-12"></div>
      </div>

      {/* <!-- Three columns --> */}
      <div className="flex mb-4">
        <div className="w-1/3 bg-gray-400 h-12"></div>
        <div className="w-1/3 bg-gray-500 h-12"></div>
        <div className="w-1/3 bg-gray-400 h-12"></div>
      </div>

      {/* <!-- Four columns --> */}
      <div className="flex mb-4">
        <div className="w-1/4 bg-gray-500 h-12"></div>
        <div className="w-1/4 bg-gray-400 h-12"></div>
        <div className="w-1/4 bg-gray-500 h-12"></div>
        <div className="w-1/4 bg-gray-400 h-12"></div>
      </div>

      {/* <!-- Five columns --> */}
      <div className="flex mb-4">
        <div className="w-1/5 bg-gray-500 h-12"></div>
        <div className="w-1/5 bg-gray-400 h-12"></div>
        <div className="w-1/5 bg-gray-500 h-12"></div>
        <div className="w-1/5 bg-gray-400 h-12"></div>
        <div className="w-1/5 bg-gray-500 h-12"></div>
      </div>

      {/* <!-- Six columns --> */}
      <div className="flex">
        <div className="w-1/6 bg-gray-400 h-12"></div>
        <div className="w-1/6 bg-gray-500 h-12"></div>
        <div className="w-1/6 bg-gray-400 h-12"></div>
        <div className="w-1/6 bg-gray-500 h-12"></div>
        <div className="w-1/6 bg-gray-400 h-12"></div>
        <div className="w-1/6 bg-gray-500 h-12"></div>
      </div>
    </div>
  )
}
