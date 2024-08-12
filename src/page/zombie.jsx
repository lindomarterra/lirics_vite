import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md'

import './general.css'
import { Link } from 'react-router-dom'
import LogoLink from '../components/logoLink'

const Zombie = () => {
  return (
    <body>
      <nav
        style={{ backgroundColor: '#121212' }}
        className="navbar position-fixed w-100"
      >
        <Link
          to="/loveismagick"
          target="_self"
          className="next_arrow btn btn-outline-light d-flex align-items-center"
        >
          <MdOutlineKeyboardDoubleArrowLeft className="fs-4" />
          <span>Love is Magick</span>
        </Link>

        <LogoLink />

        <Link
          to="/killingmoon"
          target="_self"
          className="next_arrow btn btn-outline-light d-flex align-items-center"
        >
          <span>Killing Moon</span>
          <MdOutlineKeyboardDoubleArrowRight className="fs-4" />
        </Link>
      </nav>

      <div style={{ paddingTop: '70px' }} className="container">
        <h2 className="fst-italic fs-6 p-2 mb-4"> Zombie (Em) </h2>
        <div style={{ lineHeight: '1rem' }} className="row text-center">
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
    </body>
  )
}

export default Zombie
