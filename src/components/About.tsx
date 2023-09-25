import { Button } from "../ui-components/Button"
import { useRef } from "react"
import { useIsVisible } from "../hooks/useIsVisible"

const About = () => {
  const refText = useRef(null)
  const isTextVisible = useIsVisible(refText)

  const refImage = useRef(null)
  const isImageVisible = useIsVisible(refImage)

  return (
    <div className="p-6 bg-white text-stone-700">
      <div className="container flex flex-col-reverse gap-6 mx-auto text-left items-center lg:grid lg:grid-cols-2 xl:grid-cols-5">
        <div
          ref={refText}
          className={`w-full px-6 py-6 rounded-md sm:px-0 xl:col-span-2 transition-opacity ease-in duration-700 ${
            isTextVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="block mb-2 dark:text-violet-400">ABOUT US</span>
          <h1 className="text-5xl font-semibold">
            Unwind A Digital Marketing Agency Company.
          </h1>
          <p className="my-8">
            At Unwind, we specialize in bringing clarity to the complex world of
            digital marketing. With a relentless commitment to our clients'
            success, we transform your unique vision into a tangible digital
            reality. Our mission is to seamlessly integrate your brand's essence
            into every facet of our digital solutions, ensuring they resonate
            with the heartbeat of your business.
          </p>
          <p className="my-8">
            In a fast-paced digital landscape, Unwind is your trusted partner,
            guiding you through the intricate pathways of online marketing. Our
            holistic approach prioritizes your brand's authenticity, delivering
            tailored strategies that drive meaningful results. Together, we'll
            navigate the digital chaos and carve a clear path to success for
            your business.
          </p>
          <div className="flex flex-wrap justify-start">
            <Button text="More about us" />
          </div>
        </div>
        <img
          ref={refImage}
          alt=""
          src="/assets/about_illustration.svg"
          className={`object-cover px-6 py-16 w-full xl:col-span-3 transition-opacity ease-in duration-700 ${
            isImageVisible ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  )
}

export default About
