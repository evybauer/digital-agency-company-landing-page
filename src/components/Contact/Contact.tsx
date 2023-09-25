import { SocialMediaIcons } from "../Footer/SocialMediaIcons"

const Contact = () => (
    <div className="bg-white text-stone-800 flex flex-col-reverse justify-around px-6 py-12 mx-auto space-y-8 md:flex-row md:space-y-0">
      <SocialMediaIcons />
    <div className="flex justify-around space-x-8">
      <div className="flex flex-col space-y-2">
        <a href="#" className="hover:text-brightRed">Home</a>
        <a href="#" className="hover:text-brightRed">Pricing</a>
        <a href="#" className="hover:text-brightRed">Products</a>
        <a href="#" className="hover:text-brightRed">About</a>
      </div>
      <div className="flex flex-col space-y-2">
        <a href="#" className="hover:text-brightRed">Careers</a>
        <a href="#" className="hover:text-brightRed">Community</a>
        <a href="#" className="hover:text-brightRed">Privacy Policy</a>
      </div>
    </div>
  </div>
)

export default Contact