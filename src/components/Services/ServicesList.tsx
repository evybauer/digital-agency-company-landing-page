import { servicesListArr } from "./servicesListArr";

interface Service {
  icon: string
  name: string
  description: string
}

export const ServicesList = () => (
  <div className="grid grid-rows-2 md:grid-flow-col gap-6 text-center">
    {servicesListArr.map((service: Service, index: number) => (
      <div key={index} className="rounded-xl p-8 shadow-lg">
        <div className="flex justify-center items-center">
          <img src={service.icon} className="w-16 bg-purple-200 rounded-full p-2" alt="" />
        </div>
        <h1 className="text-lg font-semibold text-purple-500 p-2">{service.name}</h1>
        <p className="text-stone-400 text-sm">{service.description}</p>
      </div>
    ))}
  </div>
)