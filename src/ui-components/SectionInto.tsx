
import { useRef } from "react"
import { useIsVisible } from "../hooks/useIsVisible"

type SectionIntroProps = {
    section: string
    title: string
    text: string
}

export const SectionIntro = ({section, title, text}:SectionIntroProps) => {
    const ref = useRef(null)
    const isVisible = useIsVisible(ref)
  
    return (
      <div className="py-6 text-center rounded-md md:px-16">
        <span className="block mb-2 dark:text-violet-400">{section}</span>
        <h1
          ref={ref}
          className={`text-4xl font-noraml text-stone-700 transition-opacity ease-in duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {title}
        </h1>
        <p className="my-8 text-stone-400">{text}</p>
      </div>
    )
  }
  