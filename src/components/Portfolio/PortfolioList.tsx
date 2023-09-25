import { portfolioItems } from "./portfolioItems"

export const PortfolioList = () => (
  <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
    {portfolioItems.map((item, index) => (
      <div key={index} className="rounded-xl shadow">
        <div className="flex justify-center items-align">
          <img
            src={item.image}
            className="w-full max-h-[400px] rounded-md"
          ></img>
        </div>
        <h1 className="text-lg font-semibold text-purple-500 p-2">
          {item.name}
        </h1>
        <p className="text-stone-400 p-2">{item.description}</p>
        <div className="flex justify-end items-center px-2 py-2 text-violet-400 text-semibold">
          <p className=" text-sm mr-2 ">SEE PROJECTS</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>
    ))}
  </div>
)