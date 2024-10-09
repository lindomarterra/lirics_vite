import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md'

import './general.css'
import { Link } from 'react-router-dom'
import LogoLink from '../components/logoLink'

const Sunseed = () => {
  return (
    <body>
      <nav
        style={{ backgroundColor: '#121212' }}
        className="navbar position-fixed w-100"
      >
        <Link
          to="/knockinonheavensdoor"
          target="_self"
          className="next_arrow btn btn-outline-light d-flex align-items-center"
        >
          <MdOutlineKeyboardDoubleArrowLeft className="fs-4" />
          <span>Knockin On Heavens Door</span>
        </Link>

        <LogoLink />

        <Link
          to="/inbetweendays"
          target="_self"
          className="next_arrow btn btn-outline-light d-flex align-items-center"
        >
          <span> In Between Days </span>
          <MdOutlineKeyboardDoubleArrowRight className="fs-4" />
        </Link>
      </nav>

      <div style={{ paddingTop: '70px' }} className="container">
        <h2 className="fst-italic fs-6 p-2 mb-4"> Sunseed (D) </h2>
        <div style={{ lineHeight: '1rem' }} className="row text-center">
          <div className="col-md-6">
            <div className="pb-3">
              <p>You were born at the ending</p>
              <p>
                <abbr
                  className="text-decoration-none"
                  title="Quando a cortina caiu"
                >
                  As the curtain came down
                </abbr>
              </p>
              <p>I can see you're confused girl but it's all right</p>
              <p>
                It's only the{' '}
                <abbr className="text-decoration-none" title="sinos">
                  chimes
                </abbr>
              </p>
              <p>Announcing a new time</p>
              <p>You see now</p>
            </div>
            <div className="pb-3">
              <p>Boats are cruising the deserts</p>
              <p>
                <abbr
                  className="text-decoration-none"
                  title="Oceanos rachados pelo calor"
                >
                  Oceans cracked by the heat
                </abbr>
              </p>
              <p>
                <abbr
                  className="text-decoration-none"
                  title="Pessoas se afogando em gotas de chuva"
                >
                  People drowning in raindrops
                </abbr>
              </p>
              <p>But it's all right</p>
              <p>
                <abbr
                  className="text-decoration-none"
                  title="Não é uma derrota"
                >
                  It's not a defeat
                </abbr>
              </p>
              <p>
                <abbr
                  className="text-decoration-none"
                  title="fique de pé sozinho"
                >
                  Stand on your own feet
                </abbr>
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="pb-3">
              <p>Right now the sun doesn't shine</p>
              <p>
                <abbr
                  className="text-decoration-none"
                  title="Ele está carregado de vinho"
                >
                  He's loaded on wine
                </abbr>
              </p>
              <p>
                <abbr
                  className="text-decoration-none"
                  title="Embora eu possa rir na tempestade"
                >
                  Though I can laugh in the storm
                </abbr>
              </p>
              <p>Bacause I was born</p>
              <p>When the sun used to</p>
              <p>Shine in June</p>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Sunseed
