const Newsletter = () => (
  <div className="p-14 text-white">
    <div className="w-full grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2">
      <div className="mx-auto">
        <h1 className="text-3xl font-bold">
          Newsletter - Stay tuned and get the latest update.
        </h1>
        <p className="my-8">
          We have a lot of things to share with you. Subscribe to our newsletter
          and stay tuned with the latest news and updates.
        </p>
      </div>
      <div className="max-w-[1000px]">
        <div className="flex">
          <h3 className="text-xl font-bold mr-4">Enter email address</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 hover:scale-125 transition duration-300"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </div>
        <div className="flex justify-center items-end">
          <input className="w-full py-4 bg-transparent border-b-2 border-white"></input>
          <button
            type="submit"
            className="rounded mt-8 ml-4 h-14 w-32 px-2 py-2 text-sm font-medium uppercase border border-xs border-white hover:bg-white hover:text-purple-900"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default Newsletter
