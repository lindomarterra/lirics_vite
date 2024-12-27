import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md'

import './general.css'
import { Link } from 'react-router-dom'
import LogoLink from '../components/logoLink'

const LoveWillTearUsApart = () => {
  return (
    <body>
      <nav
        style={{ backgroundColor: '#121212' }}
        className="navbar position-fixed w-100"
      >
        <Link
          to="/gitaiam"
          target="_self"
          className="next_arrow btn btn-outline-light d-flex align-items-center"
        >
          <MdOutlineKeyboardDoubleArrowLeft className="fs-4" />
          <span>Gita i am</span>
        </Link>

        <LogoLink />

        <Link
          to="/sorrow"
          target="_self"
          className="next_arrow btn btn-outline-light d-flex align-items-center"
        >
          <span> Sorrow </span>
          <MdOutlineKeyboardDoubleArrowRight className="fs-4" />
        </Link>
      </nav>

      <div style={{ paddingTop: '70px' }} className="container">
        <h2 className="fst-italic fs-6 p-2 mb-4"> Love will tear us apart (D) </h2>
        <div style={{ lineHeight: '1rem' }} className="row text-center">
          <div className="col-md-4">
            <div className="pb-3">
              <p> When routine bites hard </p>
              <p> and ambitions are low</p>
              <p> And resentment rides high, </p>
              <p> but emotions won't grow</p>
              <p>And we're changing our ways, </p>
              <p>taking different roads</p>
            </div>
            <div className="pb-3">
              <p>Then love, love will tear us apart again</p>
              <p>Love, love will tear us apart again</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="pb-3">
              <p>Why is the bedroom so cold? </p>
              <p>You've turned away on your side</p>
              <p>Is my timing that flawed? </p>
              <p>Our respect runs so dry</p>
              <p>Yet there's still this appeal </p>
              <p>that we've kept through our lives</p>
            </div>
            <div className="pb-3">
              <p>But love, love will tear us apart again</p>
              <p>Love, love will tear us apart again</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="pb-3">
              <p>You cry out in your sleep, </p>
              <p>all my failings exposed</p>
              <p>There's a taste in my mouth </p>
              <p>as desperation takes hold</p>
              <p>just that something so good, </p>
              <p>just can't function no more</p>
            </div>
            <div className="pb-3">
              <p>Then love, love will tear us apart again</p>
              <p>Love, love will tear us apart again</p>
            </div>
            <div className="pb-3">
              <p>love, love will tear us apart again</p>
              <p>Love, love will tear us apart again</p>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default LoveWillTearUsApart
