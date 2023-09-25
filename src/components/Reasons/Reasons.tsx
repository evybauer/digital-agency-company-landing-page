import { ReasonsList } from "./ReasonsList"
import { useRef } from "react"
import { useIsVisible } from "../../hooks/useIsVisible"

const Reasons = () => {
  const ref = useRef(null)
  const isVisible = useIsVisible(ref)

  return (
    <div className="bg-white">
      <div
        ref={ref}
        className={`p-6 gap-6 text-center items-center lg:grid lg:grid-cols-1 xl:grid-cols-1 transition-opacity ease-in duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="pt-6 px-6 pb-40 bg-purple-900 rounded-md md:px-16 xl:col-span-2">
          <span className="block mb-2 dark:text-violet-400">WHY CHOOSE US</span>
          <h1 className="text-3xl font-semibold text-white">
            Expertise, results, and a journey to success together.
          </h1>
          <p className="my-16 text-stone-200 xl:mx-auto xl:max-w-[1200px]">
            Choose our digital marketing agency and embark on a transformative
            journey to success. With unmatched expertise, we craft strategies
            that propel your brand to new heights. Our commitment to exceptional
            results is unwavering, delivering the ROI you seek. Partner with us,
            and together, we'll navigate the dynamic digital landscape, turning
            your aspirations into a flourishing reality. Join the ranks of our
            satisfied clients who have experienced not just growth, but also the
            inspiration to reach for the stars. Your success story begins here.{" "}
          </p>
        </div>
        <ReasonsList />
      </div>
    </div>
  )
}

export default Reasons
