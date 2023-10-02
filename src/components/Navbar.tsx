import { FaHouseChimney, FaUser, FaFolder, FaPhone } from "react-icons/fa6"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"

interface Props {
  active: number
}

const Navbar = ({ active }: Props) => {
  const navlinks = [
    { text: "Home", img: <FaHouseChimney size="1.6rem" /> },
    { text: "About", img: <FaUser size="1.4rem" /> },
    { text: "Projects", img: <FaFolder size="1.5rem" /> },
    { text: "Contact", img: <FaPhone size="1.5rem" /> },
  ]

  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (latest > previous && latest > 200) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  return (
    <nav className="fixed top-0 w-screen border-b bg-white px-[5%]">
      <motion.div
        variants={{
          hidden: { opacity: 0, height: 0 },
          visible: { opacity: 1, height: 32 },
        }}
        initial="hidden"
        animate={hidden ? "hidden" : "visible"}
        className="flex items-center justify-center sm:hidden"
      >
        <h1 className="text-xl tracking-widest text-violet-600 ">
          minard parilla
        </h1>
      </motion.div>

      <div className="flex h-16  w-full flex-row items-center justify-between py-2 sm:h-14">
        <h1 className="hidden cursor-pointer select-none text-xl text-violet-600 sm:inline-block">
          minard parilla
        </h1>

        <ul className="relative flex h-full w-full sm:w-3/5 lg:w-5/12 ">
          {navlinks.map((navlink, index) => (
            <li
              key={index}
              className={`z-10 flex h-full flex-1 items-center justify-center ${
                active !== index && "hover:text-violet-600"
              }`}
            >
              <a
                href={"#" + navlink.text}
                className="flex h-full w-full items-center justify-evenly"
              >
                <div
                  className={`w-6 sm:hidden ${
                    active === index ? "hidden" : "opacity-60"
                  }`}
                >
                  {navlink.img}
                </div>
                <p
                  className={` sm:inline-block ${active !== index && "hidden"}`}
                >
                  {navlink.text}
                </p>
              </a>
            </li>
          ))}
          <motion.div
            initial={{ marginLeft: "-10%" }}
            animate={{ marginLeft: 25 * active + "%" }}
            transition={{ type: "spring", stiffness: 1000, damping: 20 }}
            className="absolute bottom-0 left-0 h-full w-1/4 rounded-2xl bg-violet-400"
          ></motion.div>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
