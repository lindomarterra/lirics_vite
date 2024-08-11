import { useState } from "react"
import { Link } from "react-router-dom"

const Home = () => {

  const [sort, setSort] = useState('Asc')

  return (
    <main className="p-2">
      <h1 className="fs-4 fst-italic p-3"> Pick up some song: </h1>
      <div className="p-3 d-flex flex-column justify-content-center align-items-center">
        <Link
          to="lifeonmars"
          target="_self"
          className="btn btn-sm btn-outline-light fs-5 m-2"
        >
          Life on Mars (David Bowie)
        </Link>
        <Link
          to="ziggystardust"
          target="_self"
          className="btn btn-sm btn-outline-light fs-5 m-2"
        >
          Ziggy Stardust (David Bowie)
        </Link>
        <Link
          to="imagine"
          target="_self"
          className="btn btn-sm btn-outline-light fs-5 m-2"
        >
          Imagine (John Lennon)
        </Link>

        <Link
          to="lovestreet"
          target="_self"
          className="btn btn-sm btn-outline-light fs-5 m-2"
        >
          Love Street (the Doors)
        </Link>
        <Link
          to="loveismagick"
          target="_self"
          className="btn btn-sm btn-outline-light fs-5 m-2"
        >
          Love is Magick (Raul Seixas)
        </Link>
        <Link
          to="zombie"
          target="_self"
          className="btn btn-sm btn-outline-light fs-5 m-2"
        >
          Zombie (The Cranberries)
        </Link>

        <Link
          to="thekillingmoon"
          target="_self"
          style={{maxHeight:'42px'}}
          className="btn btn-sm btn-outline-light fs-5 m-2 overflow-hidden"
        >
          The Killing Moon (Echo & the Bunnymen)
        </Link>
        <Link
          to="starman"
          target="_self"
          className="btn btn-sm btn-outline-light fs-5 m-2"
        >
          Starman (David Bowie)
        </Link>
        <Link
          to="perfectday"
          target="_self"
          className="btn btn-sm btn-outline-light fs-5 m-2"
        >
          Perfect Day (Lou Reed)
        </Link>
      </div>
    </main>
  )
}

export default Home
