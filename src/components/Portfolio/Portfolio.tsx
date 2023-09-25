import { PortfolioList } from "./PortfolioList"
import { SectionIntro } from "../../ui-components/SectionInto"

const Portfolio = () => {
  return (
    <div className="p-6 bg-white">
      <div className="container gap-6 mx-auto lg:grid lg:grid-cols-1">
        <SectionIntro
          section="OUR PORTFOLIO"
          title="CHECK OUR AWESOME PORTFOLIO"
          text="From captivating web development that brings your brand to life online to comprehensive branding solutions that establish a strong, memorable identity, we have the tools to elevate your business. Beyond these, our agency provides a multitude of other digital marketing services, all designed to boost your online presence and drive results. Whether it's SEO, PPC, content marketing, or social media management, we're here to tailor strategies that align with your unique goals. Dive into our portfolio to see the tangible results we've achieved for businesses just like yours and discover the endless possibilities awaiting your brand with our digital marketing agency."
        />
        <PortfolioList />
      </div>
    </div>
  )
}

export default Portfolio
