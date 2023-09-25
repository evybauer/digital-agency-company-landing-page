import { teamMembersArr } from "./teamMembersArr"

export const TeamMembersProfiles = () => (
  <div className="grid grid-rows-2 md:grid-flow-col gap-6">
    {teamMembersArr.map((member, index) => (
      <div key={index} className="rounded-xl p-8 shadow">
        <div className="flex justify-center items-align">
          <div className="h-80 w-80 relative">
            <div className="absolute inset-0 bg-purple-900 opacity-25 rounded-lg shadow-2xl"></div>
            <div className="absolute inset-0 transform hover:scale-75 transition duration-300">
              <div className="">
                <img
                  src={member.image}
                  className="rounded-md flex justify-center items-align bg-pink-500 rounded-lg shadow-2xl"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-lg font-semibold text-purple-500 p-2">
          {member.name}
        </h1>
        <p className="text-stone-400 text-sm">{member.title}</p>
      </div>
    ))}
  </div>
)
