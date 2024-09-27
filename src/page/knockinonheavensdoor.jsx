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
          to="/perfectday"
          target="_self"
          className="next_arrow btn btn-outline-light d-flex align-items-center"
        >
          <MdOutlineKeyboardDoubleArrowLeft className="fs-4" />
          <span> Perfect Day </span>
        </Link>

        <LogoLink />

        <Link
          to="/sunseed"
          target="_self"
          className="next_arrow btn btn-outline-light d-flex align-items-center"
        >
          <span>Sunseed</span>
          <MdOutlineKeyboardDoubleArrowRight className="fs-4" />
        </Link>
      </nav>

      <div style={{ paddingTop: '70px' }} className="container">
        <h2 className="fst-italic fs-6 p-2 mb-4">
          {' '}
          Knockin On Heavens Door (G){' '}
        </h2>
        <div style={{ lineHeight: '1rem' }} className="row text-center">
          <div className="col-md-6">
            <div className="pb-3">
              <p> Mama, take this badge off of me</p>
              <p> Cause I can't use it anymore</p>
              <p> It's getting dark, too dark to see</p>
              <p> I feel like I'm knocking on heaven's door</p>
            </div>
            <div className="pb-3">
              <p> Knock, knock, knocking on heaven's door</p>
              <p> Knock, knock, knocking on heaven's door</p>
              <p> Knock, knock, knocking on heaven's door</p>
              <p> Knock, knock, knocking on heaven's door</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="pb-3">
              <p> Mama, put that gun to the ground</p>
              <p> I can't shoot them anymore</p>
              <p> There's a long black cloud coming on down</p>
              <p> I feel like I'm knocking on heaven's door</p>
            </div>
            <div className="pb-3">
              <p> Knock, knock, knocking on heaven's door</p>
              <p> Knock, knock, knocking on heaven's door</p>
              <p> Knock, knock, knocking on heaven's door</p>
              <p> Knock, knock, knocking on heaven's door</p>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Zombie
