import html from "../assets/icons/html5.png"
import css from "../assets/icons/css3.png"
import js from "../assets/icons/js.png"
import bootstrap from "../assets/icons/bootstrap.png"
import tailwind from "../assets/icons/tailwind.svg"
import react from "../assets/icons/react.svg"
import php from "../assets/icons/php.png"
import mysql from "../assets/icons/mysql.png"

const About = () => {
  return (
    <div className=" w-full rounded-t-3xl bg-gradient-to-t from-violet-500 to-sky-300 px-10 py-7 lg:px-20">
      <h1 className="text-center text-xl">About</h1>

      <div className="mt-5 flex flex-col flex-wrap items-center justify-center gap-8 md:flex-row md:items-start ">
        <div className="flex h-96 w-96 items-center justify-center border md:h-72 md:w-72 lg:h-96 lg:w-96">
          ur pic
        </div>
        <div className=" flex flex-1 flex-col">
          <div className="mb-2 flex flex-wrap items-center justify-between pe-10 ps-2">
            <h1 className="text-3xl">Minard Parilla</h1>

            <a
              href=""
              data-tooltip-target="tooltip-default"
              className="rounded-xl bg-yellow-500 px-3 py-1"
            >
              curriculum vitae
            </a>
          </div>
          <p>
            Lorem ipsum dolor sit amet consecteturs adipisicing elit. Quaerat
            repudiandae illum atque distinctio quis iusto enim obcaecati
            aspernatur voluptates et eligendi cum cumque quisquam vitae, sunt
            qui hic optio a doloribus deserunt sequi exercitationem totam
            possimus. Explicabo sequi eligendi soluta et nesciunt repellat,
            velit ratione repellendus vitae, assumenda ad saepe, odio dolore
            laboriosam quibusdam necessitatibus dicta id sapiente animi
            possimus!
          </p>

          <h1 className="mt-5 text-lg">Web development stack I know: </h1>
          <div className="flex flex-wrap items-center gap-5">
            <img src={html} alt="" className="w-8" />
            <img src={css} alt="" className="w-8" />
            <img src={js} alt="" className="w-7" />
            <img src={bootstrap} alt="" className="w-10" />
            <img src={tailwind} alt="" className="w-10" />
            <img src={react} alt="" className="w-8" />
            <img src={php} alt="" className="w-11" />
            <img src={mysql} alt="" className="w-8" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
