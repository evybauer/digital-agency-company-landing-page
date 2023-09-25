type ButtonProps = {
    text: string
    hero?: boolean
}

export const Button = ({text, hero}:ButtonProps) => (
    <button className={`relative ${hero ? "px-4" : "px-8"} py-3 text-lg text-white font-semibold rounded overflow-hidden group bg-purple-800 relative hover:bg-gradient-to-r hover:from-purple-800 hover:to-purple-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple-700 transition-all ease-out duration-300`}>
        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
        <span className="relative">{text}</span>
    </button>
)