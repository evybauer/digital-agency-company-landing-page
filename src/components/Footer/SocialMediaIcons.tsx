import { socialMediaIcons } from "../Contact/socialMediaIcons"

export const SocialMediaIcons = () => (
  <div className="flex flex-col-reverse space-y-6 md:flex-col md:space-y-0 md:items-start">
    <a
      href="#"
      className="text-center text-purple-900 py-4 font-bold text-2xl lg:text-4xl md:text-left hover:text-black"
    >
      Unwind.
    </a>
    <div className="flex justify-center space-x-4">
      {socialMediaIcons.map((socialMediaIcon, index) => (
        <div key={index}>
          <a href="#">
            <img
              src={socialMediaIcon.icon}
              alt={socialMediaIcon.name}
              className="h-8"
            />
          </a>
        </div>
      ))}
    </div>
  </div>
)
