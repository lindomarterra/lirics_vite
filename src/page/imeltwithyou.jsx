import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md'

import './general.css'
import { Link } from 'react-router-dom'
import LogoLink from '../components/logoLink'

const Imeltwithyou = () => {
  return (
    <body>
      <nav
        style={{ backgroundColor: '#121212' }}
        className="navbar position-fixed w-100"
      >
        <Link
          to="/linger"
          target="_self"
          className="next_arrow btn btn-outline-light d-flex align-items-center"
        >
          <MdOutlineKeyboardDoubleArrowLeft className="fs-4" />
          <span> Linger </span>
        </Link>

        <LogoLink />

        <Link
          to="/karmachameleon"
          target="_self"
          className="next_arrow btn btn-outline-light d-flex align-items-center"
        >
          <span> Karma Chameleon </span>
          <MdOutlineKeyboardDoubleArrowRight className="fs-4" />
        </Link>
      </nav>

      <div style={{ paddingTop: '70px' }} className="container">
        <h2 className="fst-italic fs-6 p-2 mb-4"> I melt with you (C)</h2>
        <div style={{ lineHeight: '1rem' }} className="row text-center">
          <div className="col-md-6">
            <div className="pb-3">
              <p>Moving forward using all my breath </p>
              <p>Making love to you was never second best </p>
              <p>I saw the world thrashing all around your face </p>
              <p>Never really knowing it was always mesh and lace </p>
            </div>
            <div className="pb-3">
              <p>I'll stop the world and melt with you </p>
              <p>
                You've seen the difference and it's getting better all the time
              </p>
              <p>There's nothing you and I won't do </p>
              <p>I'll stop the world and melt with you </p>
            </div>
            <div className="pb-3">
              <p>Dream of better lives the kind which never Hate</p>
              <p>Dropped in the state of imaginary grace </p>
              <p> I made a pilgrimage to save this human Race </p>
              <p>Never comprehending a race that long gone by </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="pb-3">
              <p>I'll stop the world and melt with you </p>
              <p>
                You've seen the difference and it's getting better all the time
              </p>
              <p>There's nothing you and I won't do </p>
              <p>I'll stop the world and melt with you </p>
            </div>
            <div className="pb-3">
              <p>The future's open wide </p>
            </div>
            <div className="pb-3">
              <p>I'll stop the world and melt with you </p>
              <p>
                You've seen the difference and it's getting better all the time
              </p>
              <p>There's nothing you and I won't do </p>
              <p>I'll stop the world and melt with you </p>
            </div>
            <div className="pb-3">
              <p>The future's open wide </p>
            </div>
            <div className="pb-3">
              <p>I'll stop the world and melt with you </p>
              <p>
                You've seen the difference and it's getting better all the time
              </p>
              <p>There's nothing you and I won't do </p>
              <p>I'll stop the world and melt with you </p>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Imeltwithyou
