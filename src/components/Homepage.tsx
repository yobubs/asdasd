import { motion } from 'framer-motion'

const Homepage = () => {
   const variants = {
      hidden1: { x: -100, opacity: 0 },
      hidden2: { x: 100, opacity: 0 },
      show: {
         x: 0,
         opacity: 1,
         transition: {
            delay: 1.4,
            duration: 0.7,
         },
      },
   }
   return (
      <div className="flex  h-screen w-full items-center justify-evenly px-2 ">
         <div>
            <motion.p
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{
                  delay: 0.1,
                  duration: 1.8,
               }}
               className="text-lg"
            >
               hey, I'm
            </motion.p>
            <motion.h1
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.8, duration: 2 }}
               className="text-5xl sm:text-6xl"
            >
               Minard Parilla
            </motion.h1>
            <div className="flex items-center justify-evenly">
               <motion.p
                  variants={variants}
                  initial="hidden1"
                  animate="show"
                  className="text-xl sm:text-2xl"
               >
                  Fullstack Developer
               </motion.p>
               <motion.a
                  variants={variants}
                  initial="hidden2"
                  animate="show"
                  href="#About"
                  className="rounded-lg bg-purple-500 px-4 py-2 text-white shadow-lg "
               >
                  About me
               </motion.a>
            </div>
         </div>

         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
            className="hidden h-52 w-52 items-center justify-center border border-black sm:flex"
         >
            pic here ..
         </motion.div>
      </div>
   )
}

export default Homepage
