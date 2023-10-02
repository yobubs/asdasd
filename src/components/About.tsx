import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

import { IconContext } from 'react-icons'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3Full } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io5'
import { FaBootstrap, FaReact, FaPhp } from 'react-icons/fa6'
import { BiLogoTailwindCss } from 'react-icons/bi'
import { SiMysql } from 'react-icons/si'

const About = () => {
   const ref = useRef(null)
   const ref1 = useRef(null)
   const isView = useInView(ref, { margin: '-25% 0%', once: true })
   const isView1 = useInView(ref1, { margin: '-25% 0%', once: true })
   const controls = useAnimation()
   const controls1 = useAnimation()

   useEffect(() => {
      if (isView) {
         controls.start({
            x: 0,
            opacity: 1,
            transition: {
               duration: 1,
            },
         })
      }
   }, [isView])

   useEffect(() => {
      if (isView1) {
         controls1.start({
            x: 0,
            opacity: 1,
            transition: {
               duration: 1,
            },
         })
      }
   }, [isView1])
   return (
      <div className="w-full rounded-t-3xl bg-gradient-to-t from-sky-500 to-sky-100 px-10 py-16 lg:px-20">
         <h1 className="text-center text-xl">About</h1>

         <div className="mt-5 flex flex-col flex-wrap items-center justify-center gap-8 md:flex-row md:items-start ">
            <motion.div
               ref={ref}
               initial={{ x: -100, opacity: 0 }}
               animate={controls}
               className="flex h-96 w-96 items-center justify-center border md:h-72 md:w-72 lg:h-96 lg:w-96"
            >
               ur pic
            </motion.div>
            <motion.div
               ref={ref1}
               initial={{ x: 100, opacity: 0 }}
               animate={controls1}
               className=" flex flex-1 flex-col"
            >
               <div className="mb-2 flex items-center justify-between pe-10 ps-2">
                  <h1 className="text-3xl">Minard Parilla</h1>

                  <a
                     href=""
                     data-tooltip-target="tooltip-default"
                     className="rounded-xl bg-purple-500 px-3 py-1 text-white"
                  >
                     cv
                  </a>
               </div>
               <p>
                  Lorem ipsum dolor sit amet consecteturs adipisicing elit.
                  Quaerat repudiandae illum atque distinctio quis iusto enim
                  obcaecati aspernatur voluptates et eligendi cum cumque
                  quisquam vitae, sunt qui hic optio a doloribus deserunt sequi
                  exercitationem totam possimus. Explicabo sequi eligendi soluta
                  et nesciunt repellat, velit ratione repellendus vitae,
                  assumenda ad saepe, odio dolore laboriosam quibusdam
                  necessitatibus dicta id sapiente animi possimus!
               </p>

               <h1 className="mt-5 text-lg">Web development stack I know: </h1>
               <div className="flex flex-wrap items-center gap-3 lg:gap-5">
                  <IconContext.Provider
                     value={{ className: 'hover:text-violet-500' }}
                  >
                     <AiFillHtml5 size="2rem" />
                     <DiCss3Full size="2.1rem" />
                     <IoLogoJavascript size="1.8rem" />
                     <FaBootstrap size="1.9rem" />
                     <BiLogoTailwindCss size="2.1rem" />
                     <FaReact size="1.9rem" />
                     <FaPhp size="2.2rem" />
                     <SiMysql size="2.3rem" />
                  </IconContext.Provider>
               </div>
            </motion.div>
         </div>
      </div>
   )
}

export default About
