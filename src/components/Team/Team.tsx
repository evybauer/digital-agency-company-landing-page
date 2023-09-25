import { SectionIntro } from "../../ui-components/SectionInto"
import { TeamMembersProfiles } from "./TeamMembersProfiles"

const Team = () => (
  <div className="p-6 bg-white">
    <div className="container gap-6 mx-auto text-center items-center lg:grid lg:grid-cols-1 xl:grid-cols-1">
      <SectionIntro
        section="OUR TEAM"
        title="MEET OUR AMAZING TEAM"
        text="Our services span web design and development, digital marketing, and more. With a team of skilled professionals dedicated to excellence, we offer tailored solutions for your online presence. Whether you need a captivating website, compelling content, or effective SEO, our services are designed to help you achieve your goals. Let us elevate your digital presence and bring your vision to life with our exceptional offerings."
      />
      <TeamMembersProfiles />
    </div>
  </div>
)

export default Team
