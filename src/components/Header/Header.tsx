import { useEffect, useRef, useState } from "react"
import { Menu } from "./Menu"

const Header = () => {
  const buttonRef = useRef<SVGSVGElement>(null)
  const menuRef = useRef< HTMLDivElement>(null)
  const heroRef = useRef< HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    const button = buttonRef.current

    const handleButtonClick = () => {
      setIsOpen(!isOpen)
    }

    if (button) {
      button.addEventListener("click", handleButtonClick)

      return () => {
        button.removeEventListener("click", handleButtonClick)
      }
    }
  }, [isOpen])

  return (
    <div className="relative">
      <nav className="max-h-20 relative bg-blue-900 lg:bg-transparent lg:min-w-full t z-10">
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center">
            <div className="ml-8 py-2">
              <a
                href="#"
                className="text-white font-bold text-xl hover:text-black"
              >
                Unwind.
              </a>
            </div>
          </div>
          <div className="flex">
            <div className="lg:hidden">
              <svg
                ref={buttonRef}
                xmlns="http://www.w3.org/2000/svg"
                id="menu-button"
                className="h-6 w-6 cursor-pointer text-gray-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <div
              className="hidden lg:flex"
              id="menu"
              ref={menuRef}
              style={{ zIndex: 20 }}
            >
              <Menu style={"lg:flex"} />
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`lg:hidden h-64 w-full transition-all duration-500 ease-in-out ${
          isOpen ? "-mt-64" : "mt-0"
        }`}
        ref={heroRef}
      >
        <div
          className={`h-64 w-full flex justify-between items-center transition-all duration-500 ease-in-out ${
            isOpen ? "-mt-64" : "mt-0"
          }`}
          ref={heroRef}
        >
          <div className="p-6">
            <Menu style={"justify-between"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
