import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md'

import './general.css'
import { Link } from 'react-router-dom'
import LogoLink from '../components/logoLink'

const Cameasyouare = () => {
  return (
    <body>
      <nav
        style={{ backgroundColor: '#121212' }}
        className="navbar position-fixed w-100"
      >
        <Link
          to="/inbetweendays"
          target="_self"
          className="next_arrow btn btn-outline-light d-flex align-items-center"
        >
          <MdOutlineKeyboardDoubleArrowLeft className="fs-4" />
          <span> In between days </span>
        </Link>

        <LogoLink />

        <Link
          to="/hurt"
          target="_self"
          className="next_arrow btn btn-outline-light d-flex align-items-center"
        >
          <span> Hurt </span>
          <MdOutlineKeyboardDoubleArrowRight className="fs-4" />
        </Link>
      </nav>

      <div style={{ paddingTop: '70px' }} className="container">
        <h2 className="fst-italic fs-6 p-2 mb-4">Came as you are (F#m)</h2>
        <div style={{ lineHeight: '1rem' }} className="row text-center">
          <div className="col-md-6">
            <div className="pb-3">
              <p>Come as you are, as you were</p>
              <p>As I want you to be</p>
              <p>As a friend, as a friend</p>
              <p>As an old enemy</p>
            </div>
            <div className="pb-3">
              <p>Take your time, hurry up</p>
              <p>Choice is yours, don't be late</p>
              <p>Choice is yours, don't be late</p>
            </div>
            <div className="pb-3">
              <p>As an old memory, yeah</p>
              <p>Memory, yeah</p>
              <p>Memory, yeah</p>
              <p>Memory, yeah</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="pb-3">
              <p>
                <abbr
                  className="text-decoration-none"
                  title="Venha encharcado de lama, encharcado de alvejante"
                >
                  Come doused in mud, soaked in bleach
                </abbr>
              </p>
              <p>As I want you to be</p>
              <p>As a trend, as a friend</p>
            </div>
            <div className="pb-3">
              <p>As an old memory, yeah</p>
              <p>Memory, yeah</p>
              <p>Memory, yeah</p>
              <p>Memory, yeah</p>
            </div>
            <div className="pb-3">
              <p> And I swear that I don't have a gun</p>
              <p>No, I don't have a gun</p>
              <p>No, I don't have a gun</p>
            </div>
            <div className="pb-3"></div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Cameasyouare
