import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md'

import './general.css'
import { Link } from 'react-router-dom'
import LogoLink from '../components/logoLink'

const Karmachameleon = () => {
  return (
    <body>
      <nav
        style={{ backgroundColor: '#121212' }}
        className="navbar position-fixed w-100"
      >
        <Link
          to="/imeltwithyou"
          target="_self"
          className="next_arrow btn btn-outline-light d-flex align-items-center"
        >
          <MdOutlineKeyboardDoubleArrowLeft className="fs-4" />
          <span> I melt with you </span>
        </Link>

        <LogoLink />

        <Link
          to="/orangejuice"
          target="_self"
          className="next_arrow btn btn-outline-light d-flex align-items-center"
        >
          <span> Orange juice </span>
          <MdOutlineKeyboardDoubleArrowRight className="fs-4" />
        </Link>
      </nav>

      <div style={{ paddingTop: '70px' }} className="container">
        <h2 className="fst-italic fs-6 p-2 mb-4"> Karma chameleon (A)</h2>
        <div style={{ lineHeight: '1rem' }} className="row text-center">
          <div className="col-md-4">
            <div className="pb-3">
              <p>There´s a loving in your eyes all the way</p>
              <p>If I listen to your lies would you say</p>
              <p>I'm a man without conviction</p>
              <p>I'm a man who doesn't know</p>
              <p>How to sell a contradiction</p>
              <p>You come and go</p>
              <p>You come and go</p>
            </div>
            <div className="pb-3">
              <p>Karma Karma Karma Karma</p>
              <p>Karma Chameleon</p>
              <p>You come and go</p>
              <p>You come and go</p>
            </div>
            <div className="pb-3">
              <p>Loving would be easy</p>
              <p>If your colours were like my dream</p>
              <p>Red, gold and green</p>
              <p>Red, gold and green</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="pb-3">
              <p>Didn't hear your wicked words every day</p>
              <p>And you used to be so sweet I heard you say</p>
              <p>That my love was an addiction</p>
              <p>When we cling our love is strong</p>
              <p>When you go you're gone forever</p>
              <p>You string along</p>
              <p>You string along</p>
            </div>
            <div className="pb-3">
              <p>Karma Karma Karma Karma</p>
              <p>Karma Chameleon</p>
              <p>You come and go</p>
              <p>You come and go</p>
            </div>
            <div className="pb-3">
              <p>Loving would be easy</p>
              <p>If your colours were like my dream</p>
              <p>Red, gold and green</p>
              <p>Red, gold and green</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="pb-3">
              <p>Every day is like survival</p>
              <p>You're my lover, not my rival</p>
              <p>Every day is like survival</p>
              <p>You're my lover, not my rival</p>
            </div>
            <div className="pb-3">
              <p>I'm a man without conviction</p>
              <p>I'm a man who doesn't know</p>
              <p>How to sell a contradiction</p>
              <p>You come and go</p>
              <p>You come and go</p>
            </div>
            <div className="pb-3">
              <p>Karma Karma Karma Karma</p>
              <p>Karma Chameleon</p>
              <p>You come and go</p>
              <p>You come and go</p>
            </div>
            <div className="pb-3">
              <p>Loving would be easy</p>
              <p>If your colours were like my dream</p>
              <p>Red, gold and green</p>
              <p>Red, gold and green</p>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Karmachameleon
