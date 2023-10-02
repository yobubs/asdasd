const Homepage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-evenly px-2 ">
      <div>
        <p className="text-lg">hey, I'm</p>
        <h1 className="text-5xl sm:text-6xl">Minard Parilsla</h1>
        <div className="flex items-center justify-evenly">
          <p className="text-xl sm:text-2xl">Fullstack Developer</p>
          <a
            href="#About"
            className="rounded-lg border border-violet-500 from-violet-600 to-violet-300 px-4 py-2 text-black hover:bg-gradient-to-tr hover:text-white "
          >
            About me
          </a>
        </div>
      </div>

      <div className="hidden h-52 w-52 items-center justify-center border border-black sm:flex">
        pic here ..
      </div>
    </div>
  )
}

export default Homepage
