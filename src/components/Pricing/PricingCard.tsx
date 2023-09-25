import { Button } from "../../ui-components/Button"
import { useRef } from "react"
import { useIsVisible } from "../../hooks/useIsVisible"
import { pricingDetails } from "./pricingDetails"

export const PricingCard = () => {
  const ref = useRef(null)
  const isVisible = useIsVisible(ref)

  return (
    <div className="grid grid-rows-1 md:grid-flow-col gap-6">
      {pricingDetails.map((pricingDetail) => (
        <div ref={ref} className={`rounded-xl p-8 border border-sm min-h-[620px] min-w-[100px] transition-opacity ease-in duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <h1 className="text-3xl font-semibold text-blue-500 p-2">
            {pricingDetail.name}
          </h1>
          <p className="text-stone-400 text-sm">{pricingDetail.description}</p>
          <div className="flex justify-start items-end text-stone-700">
            <h1 className="text-4xl font-semibold py-6 text-gray-700">
              ${pricingDetail.price}
            </h1>
            <span className="text-lg py-6 text-gray-700">
              /{pricingDetail.priceType}
            </span>
          </div>
          <Button text="Buy plan" />
          <ul className="list-disc py-12 text-stone-400 leading-loose">
            {pricingDetail.features.map((feature) => (
              <li>{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
