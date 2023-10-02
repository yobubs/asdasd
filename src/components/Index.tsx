import { useState, useRef, useEffect } from "react"
import { useInView } from "framer-motion"

import Homepage from "./Homepage"
import Navbar from "./Navbar"
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"

const Index = () => {
  const [active, setActive] = useState(0)
  const sections = [
    {
      name: "Home",
      content: <Homepage />,
      ref: useRef(null),
    },
    {
      name: "About",
      content: <About />,
      ref: useRef(null),
    },
    {
      name: "Projects",
      content: <Projects />,
      ref: useRef(null),
    },
    {
      name: "Contact",
      content: <Contact />,
      ref: useRef(null),
    },
  ]

  sections.map((section, index) => {
    const isView = useInView(section.ref, { margin: "-60% 0% -40% 0%" })
    useEffect(() => {
      if (isView) setActive(index)
    }, [isView])
  })

  return (
    <>
      <Navbar active={active} />
      {sections.map((section, index) => (
        <div
          key={index}
          ref={section.ref}
          id={section.name}
          className="w-sceen bg-white px-0 lg:px-[5%]"
        >
          {section.content}
        </div>
      ))}
    </>
  )
}

export default Index
