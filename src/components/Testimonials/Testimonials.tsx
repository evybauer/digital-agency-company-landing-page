import { SectionIntro } from "../../ui-components/SectionInto"
import { TestimonialsList } from "./TestimonialsList"

const Testimonials = () => (
  <div className="p-6 bg-white">
    <div className="container gap-6 mx-auto text-center items-center lg:grid lg:grid-cols-1 xl:grid xl:grid-cols-1">
      <SectionIntro
        section="TESTIMONIALS"
        title="HAPPY CUSTOMERS"
        text="Discover the genuine experiences and success stories shared by our satisfied clients. These testimonials serve as a testament to the quality of our work and the results we've consistently delivered, providing you with confidence in choosing us as your trusted digital marketing partner"
      />
      <TestimonialsList />
    </div>
  </div>
)

export default Testimonials
