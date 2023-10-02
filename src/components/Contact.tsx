import { motion, useAnimation } from 'framer-motion'

const Projects = () => {
   const controls = useAnimation()
   const handleSubmit = (e) => {
      e.preventDefault()
      controls.start({
         opacity: [0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
         transition: {
            duration: 7,
         },
      })
   }
   return (
      <div className=" w-full bg-gradient-to-b from-sky-800 to-slate-900 px-5 py-16 text-white">
         <h1 className="text-center text-xl">Contacts</h1>

         <h1 className="mt-5 text-lg">
            Want to send me a message?
            <span className="text-purple-500"> let me know!</span>
         </h1>
         <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex h-full w-full flex-col gap-3 py-2 md:w-1/2"
         >
            <div className="flex flex-col">
               <label className="ps-2 opacity-70">your name:</label>
               <input
                  type="text"
                  placeholder="ex: minard parilla"
                  required
                  className="rounded-xl border-2 bg-transparent px-3 py-1 focus:outline-none"
               />
            </div>

            <div className="flex flex-col">
               <label className="ps-2 opacity-70">your email:</label>
               <input
                  type="email"
                  placeholder="ex: minardmuedan@gmail.com"
                  required
                  className="rounded-xl border-2 bg-transparent px-3 py-1 focus:outline-none"
               />
            </div>

            <div className="flex flex-col">
               <label className="ps-2 opacity-70">subject:</label>
               <input
                  type="text"
                  placeholder="input subject"
                  required
                  className="rounded-xl border-2 bg-transparent px-3 py-1 focus:outline-none"
               />
            </div>

            <div className="flex flex-col">
               <label className="ps-2 opacity-70">your message:</label>
               <textarea
                  placeholder="enter message"
                  required
                  className="h-52 resize-none rounded-xl border-2 bg-transparent px-3 py-1 focus:outline-none"
               ></textarea>
            </div>
            <button
               type="submit"
               className="10px 0 0 10px] w-fit self-end rounded-xl bg-yellow-500 px-4 py-2 shadow-xl"
            >
               send
            </button>

            <motion.div
               initial={{ opacity: 0 }}
               animate={controls}
               className="fixed bottom-4 left-1 z-50 rounded-xl bg-purple-500 px-4 py-2"
            >
               message sent!
            </motion.div>
         </form>
      </div>
   )
}

export default Projects
