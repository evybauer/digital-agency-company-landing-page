import { useRef } from "react"
import { useIsVisible } from "../../hooks/useIsVisible"
import { StatisticsList } from "./StatisticsList"

const Statistics = () => {
  const ref = useRef(null)
  const isVisible = useIsVisible(ref)

  return (
    <div className="p-6 bg-white py-40">
      <div
        ref={ref}
        className={`container gap-6 mx-auto py-12 text-center items-center rounded-md shadow-md transition-opacity ease-in duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <StatisticsList />
      </div>
    </div>
  )
}

export default Statistics