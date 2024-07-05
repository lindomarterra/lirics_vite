import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md'

import './general.css'
import { Link } from 'react-router-dom'

const Zombie = () => {
  return (
    <div className="container">
      <h1 className="text-end fst-italic fs-6 p-2 mb-4"> Zombie (tone Em) </h1>

      <div className='d-flex justify-content-center'>

        <div className="arrowLeft col-2 ">
          <Link
            to="/loveismagick"
            target="_self"
            className="next_arrow btn btn-outline-light d-flex align-items-center position-absolute start-0 top-50 me-0 pe-0 "
          >
            <span>Love is Magick</span>
            <MdOutlineKeyboardDoubleArrowLeft className="fs-3" />
          </Link>
        </div>

        <div className="col-8">
          <div style={{ lineHeight: '1rem' }} className="row">
            <div className="col-md-6">
              <div className="pb-3">
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="Outra cabeça paira humildemente"
                  >
                    Another head hangs lowly
                  </abbr>
                </p>
                <p>
                  {' '}
                  <abbr
                    className="text-decoration-none"
                    title="A criança é levada lentamente"
                  >
                    Child is slowly taken
                  </abbr>
                </p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="E a violência causou tanto silêncio"
                  >
                    And the violence caused such silence
                  </abbr>
                </p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="Quem estamos enganados?"
                  >
                    Who are we mistaken?
                  </abbr>
                </p>
              </div>
              <div className="pb-3">
                <p>But you see, it's not me</p>
                <p>It's not my family</p>
                <p>In your head, in your head</p>
                <p>They are fighting</p>
                <p>With their tanks and their bombs</p>
                <p>And their bombs, and their guns</p>
                <p>In your head, in your head </p>
                <p>They are crying</p>
              </div>
              <div className="pb-3">
                <p>In your head, in your head</p>
                <p>Zombie, zombie, zombie</p>
                <p>What's in your head, in your head</p>
                <p>Zombie, zombie, zombie</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pb-3">
                <p>
                  <abbr
                    className="text-decoration-none"
                    title=" Outra mãe de coração partido está assumindo"
                  >
                    Another mother's breaking heart is taking over
                  </abbr>
                </p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="Quando a violência causa silêncio"
                  >
                    When the violence causes silence
                  </abbr>
                </p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="Devemos estar enganados"
                  >
                    We must be mistaken
                  </abbr>
                </p>
              </div>
              <div className="pb-3">
                <p>It's the same old theme</p>
                <p>Since nineteen-sixteen</p>
                <p>In your head, in your head, they're still fighting</p>
                <p>With their tanks and their bombs</p>
                <p>And their bombs, and their guns</p>
                <p>In your head, in your head, they are dying</p>
              </div>
              <div className="pb-3">
                <p>In your head, in your head</p>
                <p>Zombie, zombie, zombie-ie-ie</p>
                <p>What's in your head, in your head</p>
                <p>Zombie, zombie, zombie-ie-ie-ie</p>
              </div>
            </div>
          </div>
        </div>

        <div className="arrowRight col-2">
          <Link
            to="/thekillingmon"
            target="_self"
            className="next_arrow btn btn-outline-light d-flex align-items-center position-absolute end-0 top-50 me-1 pe-0 "
          >
            <span>The killing mon</span>
            <MdOutlineKeyboardDoubleArrowRight className="fs-3" />
          </Link>
        </div>

      </div>

    </div>
  )
}

export default Zombie
