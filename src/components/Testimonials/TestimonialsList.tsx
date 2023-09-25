import { testimonialsListArr, testimonialsListArr2 } from "./testimonialsListArr";

export const TestimonialsList = () => (
  <div className="flex flex-wrap mt-24 md:flex-row md:space-x-6">
    {testimonialsListArr.map((testimonial, index) => (
      <div
        key={index}
        className="flex sm:mb-12 flex-col items-center p-6 space-y-4 rounded-lg bg-stone-100 md:w-1/3 md:flex-1"
      >
        <img
          src={testimonial.img}
          className="w-32 rounded-full -mt-14 hover:transform hover:scale-125 hover:ease-in-out hover:duration-100"
          alt=""
        />
        <h5 className="text-lg font-bold">{testimonial.name}</h5>
        <p className="text-sm">{testimonial.desc}</p>
      </div>
    ))}
    <div className="hidden lg:flex flex-col mt-24 md:flex-row md:space-x-6">
      {testimonialsListArr2.map((testimonial, index) => (
        <div
          key={index}
          className="flex sm:mb-12 flex-col items-center p-6 space-y-4 rounded-lg bg-stone-100 md:w-1/3 md:flex-1"
        >
          <img
            src={testimonial.img}
            className="w-32 rounded-full -mt-14 hover:transform hover:scale-125 hover:ease-in-out hover:duration-100"
            alt=""
          />
          <h5 className="text-lg font-bold">{testimonial.name}</h5>
          <p className="text-sm">{testimonial.desc}</p>
        </div>
      ))}
    </div>
  </div>
)