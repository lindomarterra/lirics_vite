import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md'

import './general.css'
import { Link } from 'react-router-dom'
import LogoLink from '../components/logoLink'

const Themanwhosoldtheworld = () => {
  return (
    <body>
      <nav
        style={{ backgroundColor: '#121212' }}
        className="navbar position-fixed w-100"
      >
        <Link
          to="/hurt"
          target="_self"
          className="next_arrow btn btn-outline-light d-flex align-items-center"
        >
          <MdOutlineKeyboardDoubleArrowLeft className="fs-4" />
          <span> Hurt </span>
        </Link>

        <LogoLink />

        <Link
          to="/howcouldiknow"
          target="_self"
          className="next_arrow btn btn-outline-light d-flex align-items-center"
        >
          <span>How could i know</span>
          <MdOutlineKeyboardDoubleArrowRight className="fs-4" />
        </Link>
      </nav>

      <div style={{ paddingTop: '70px' }} className="container">
        <h2 className="fst-italic fs-6 p-2 mb-4">
          The man who sold the world (C)
        </h2>
        <div style={{ lineHeight: '1rem' }} className="row text-center">
          <div className="col-md-6">
            <div className="pb-3">
              <p>We passed upon the stair</p>
              <p>We spoke of was and when</p>
              <p>Although i wasn't there</p>
              <p>He said i was his friend</p>
              <p>Which came as some surprise</p>
              <p>I spoke into his eyes</p>
              <p>I thought you died alone</p>
              <p>A long long time ago</p>
            </div>
            <div className="pb-3">
              <p>Oh no! not me,</p>
              <p>I never lost control</p>
              <p>You're face to face </p>
              <p>With the man who sold the world </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="pb-3">
              <p>I laughed and shook his hand</p>
              <p>I made my way back home</p>
              <p>I searched for form and land</p>
              <p>For years and years i roamed</p>
              <p>I gazed a gazely stare</p>
              <p>At all the millions here</p>
              <p>We must have died alone</p>
              <p>A long long time ago</p>
            </div>
            <div className="pb-3">
              <p>Oh no! not me,</p>
              <p>I never lost control</p>
              <p>You're face to face </p>
              <p>With the man who sold the world </p>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Themanwhosoldtheworld
