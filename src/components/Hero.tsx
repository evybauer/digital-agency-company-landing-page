import { Button } from "../ui-components/Button"

const Hero = () => (
  <div className="p-6 w-full min-h-[600px] md:min-h-[650px] md:min-h-full relative text-white bg-gradient-to-b from-purple-900 to-blue-600">
    <div className="md:grid md:grid-cols-2 md:items-center md:py-8 lg:py-20">
      <div className="w-full h-full px-6 py-6 text-left flex flex-col absolute md:relative top-0 left-0 justify-center items-start xl:items-center z-30">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Elevate Your Brand's Impact
        </h1>
        <p className="text-md m-2 text-gray-200 my-6 md:text-xg lg:text-2xl md:my-8">
          Unwind brings clarity to the digital chaos. Dive into digital
          solutions aligned with your brand's heartbeat.
        </p>
        <div className="flex flex-wrap justify-center md:block">
          <Button text="Start a project" hero={true} />
          <button className="px-4 md:px-4 py-3 m-2 text-sm border rounded md:px-12 md:text-lg hover:bg-white hover:text-purple-600 hover:font-semibold">
            Contact us
          </button>
        </div>
      </div>
      <img
        alt=""
        src="/assets/hero_illustration.svg"
        className="opacity-30 md:opacity-100 lg:opacity-100 object-cover"
      />
    </div>
  </div>
)

export default Hero