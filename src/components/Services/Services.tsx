import { Button } from "../../ui-components/Button"
import { ServicesList } from "./ServicesList"

import { useRef } from "react"
import { useIsVisible } from "../../hooks/useIsVisible"

const Services = () => {
  const ref = useRef(null)
  const isVisible = useIsVisible(ref)

  return (
    <div className="p-6 pt-20 bg-white">
      <div className="container gap-6 mx-auto text-left items-center lg:grid md:grid-rows-2 lg:grid-cols-1 xl:grid-cols-1">
        <div
          ref={ref}
          className={`py-6 md:mx-40 rounded-md xl:col-span-2 transition-opacity ease-in duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="block text-sm mb-2 dark:text-violet-400">
            OUR SERVICES
          </span>
          <h1 className="text-3xl font-normal text-stone-700">
            We provide a range of exceptional services
          </h1>
          <p className="my-8 text-stone-400">
            Our services span web design and development, digital marketing, and
            more. With a team of skilled professionals dedicated to excellence,
            we offer tailored solutions for your online presence. Whether you
            need a captivating website, compelling content, or effective SEO,
            our services are designed to help you achieve your goals. Let us
            elevate your digital presence and bring your vision to life with our
            exceptional offerings.
          </p>
          <div className="flex flex-wrap justify-start mb-8">
            <Button text="Our services" />
          </div>
        </div>
        <ServicesList />
      </div>
    </div>
  )
}

export default Services