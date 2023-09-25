import { statisticsListArr } from "./statisticsListArr"

export const StatisticsList = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-16 gap-x-6 px-6">
    <div className="col-span-1 md:col-span-2 lg:col-span-1 relative before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-black before:opacity-30">
      <img
        src="/assets/photos/statistics_photo.jpg"
        alt="Statistics"
        className="w-full relative z-0"
      />
    </div>
    {statisticsListArr.map((item, index) => (
      <div key={index} className="flex flex-col gap-y-4 mx-auto max-w-xs">
        <span className="text-3xl font-semibold tracking-tight text-purple-500 sm:text-5xl">
          {item.title}
        </span>
        <span className="text-base leading-7 text-gray-600">
          {item.subtitle}
        </span>
      </div>
    ))}
  </div>
)