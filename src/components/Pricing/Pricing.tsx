import { PricingCard } from "./PricingCard"
import { SectionIntro } from "../../ui-components/SectionInto"



const Pricing = () => {

 return(
    <div className="p-6 bg-white">
        <div className="container gap-6 mx-auto lg:grid lg:grid-cols-1 xl:grid-cols-1">
            <SectionIntro section='PRICING' title='CHOOSE YOUR PRICING PLAN' text="Our pricing plans are designed with your needs in mind. Choose from our Basic, Essential, and Premium plans, each offering a unique set of features to cater to your specific requirements. Whether you're a startup looking to establish your online presence or a well-established business seeking advanced strategies, we have a pricing plan that fits your budget and goals. With transparent pricing and flexible options, you can trust our agency to deliver exceptional value while ensuring your digital success." />
            <PricingCard />
        </div>
    </div>
 )
}

export default Pricing