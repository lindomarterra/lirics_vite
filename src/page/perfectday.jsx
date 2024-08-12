import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md'

import './general.css'
import { Link } from "react-router-dom";
import LogoLink from "../components/logoLink";

const PerfectDay = () => {
  return (
    <body>
      <nav
        style={{ backgroundColor: '#121212' }}
        className="navbar position-fixed w-100"
      >
        <Link
          to="/starman"
          target="_self"
          className="next_arrow btn btn-outline-light d-flex align-items-center"
        >
          <MdOutlineKeyboardDoubleArrowLeft className="fs-4" />
          <span>Starman</span>
        </Link>

        <LogoLink />

        <Link
          to="/#"
          target="_self"
          className="next_arrow btn btn-outline-light d-flex align-items-center"
        >
          <span>xxxx</span>
          <MdOutlineKeyboardDoubleArrowRight className="fs-4" />
        </Link>
      </nav>

      <div style={{ paddingTop: '70px' }} className="container">
        <h2 className="fst-italic fs-6 p-2 mb-4"> Perfect Day (C) </h2>
        <div style={{ lineHeight: '1rem' }} className="row text-center">
          <div className="col-md-6">
            <div className="pb-3">
              <p>Just a perfect day,</p>
              <p>Drink Sangria in the park,</p>
              <p>And then later, when it gets dark,</p>
              <p>We go home.</p>
            </div>
            <div className="pb-3">
              <p>Just a perfect day,</p>
              <p>Feed animals in the zoo</p>
              <p>Then later, a movie, too,</p>
              <p>And then home.</p>
            </div>

            <div className="pb-3">
              <p>Oh it's such a perfect day,</p>
              <p>I'm glad I spent it with you.</p>
              <p>Oh such a perfect day</p>
              <p>You just keep me hanging on,</p>
              <p>You just keep me hanging on,</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="pb-3">
              <p>Just a perfect day,</p>
              <p>Problems all left alone,</p>
              <p>Weekenders on our own.</p>
              <p>It's such fun.</p>
            </div>
            <div className="pb-3">
              <p>Just a perfect day,</p>
              <p>You made me forget myself.</p>
              <p>I thought I was someone else,</p>
              <p>Someone good.</p>
            </div>
            <div className="pb-3">
              <p>Oh it's such a perfect day,</p>
              <p>I'm glad I spent it with you.</p>
              <p>Oh such a perfect day,</p>
              <p>You just keep me hanging on,</p>
              <p>You just keep me hanging on,</p>
            </div>
            <div className="pb-3">
              <p> You're going to reap just what you sow,</p>
              <p> You're going to reap just what you sow,</p>
              <p> You're going to reap just what you sow,</p>
              <p> You're going to reap just what you sow,</p>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default PerfectDay
