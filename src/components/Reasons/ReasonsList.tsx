import { reasonsListArr } from "./reasonsListArr"

export const ReasonsList = () => (
  <div className="grid grid-rows-2 md:grid-flow-col gap-6 p-6 -mt-52 lg:mx-auto lg:max-w-[1000px]">
    {reasonsListArr.map((reason, index) => (
      <div key={index} className="bg-white rounded-md p-8 shadow">
        <div className="flex justify-center items-align">
          <img
            src={reason.icon}
            className="w-16 bg-purple-200 rounded-full p-1"
          ></img>
        </div>
        <h1 className="text-lg font-semibold text-purple-500 p-2">
          {reason.title}
        </h1>
        <p className="text-stone-400 text-sm">{reason.description}</p>
      </div>
    ))}
  </div>
)