import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md'

import './general.css'
import { Link } from 'react-router-dom'
import LogoLink from '../components/logoLink'

const InBetweenDays = () => {
  return (
    <body>
      <nav
        style={{ backgroundColor: '#121212' }}
        className="navbar position-fixed w-100"
      >
        <Link
          to="/sunseed"
          target="_self"
          className="next_arrow btn btn-outline-light d-flex align-items-center"
        >
          <MdOutlineKeyboardDoubleArrowLeft className="fs-4" />
          <span> Sunseed </span>
        </Link>

        <LogoLink />

        <Link
          to="/cameasyouare"
          target="_self"
          className="next_arrow btn btn-outline-light d-flex align-items-center"
        >
          <span> Came as you are </span>
          <MdOutlineKeyboardDoubleArrowRight className="fs-4" />
        </Link>
      </nav>

      <div style={{ paddingTop: '70px' }} className="container">
        <h2 className="fst-italic fs-6 p-2 mb-4">In between days (A)</h2>
        <div style={{ lineHeight: '1rem' }} className="row text-center">
          <div className="col-md-6">
            <div className="pb-3">
              <p>Yesterday I got so old I felt like I could die</p>
              <p>Yesterday I got so old it made me want to cry</p>
              <p>Go on, go on, just walk away</p>
              <p>Go on, go on, your choice is made</p>
              <p>Go on, go on, and disappear</p>
              <p>Go on, go on, away from here</p>
            </div>
            <div className="pb-3">
              <p>And I know I was wrong when I said it was true</p>
              <p>
                <abbr
                  className="text-decoration-none"
                  title="Que não poderia ser eu e ela no meio sem você"
                >
                  That it couldn't be me and be her in between without you
                </abbr>
              </p>
              <p>Without you</p>
              <p>Without you</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="pb-3">
              <p>Yesterday I got so scared I shivered like a child</p>
              <p>Yesterday away from you it froze me deep inside</p>
              <p>Come back, come back, don't walk away</p>
              <p>Come back, come back, come back today</p>
              <p>Come back, come back, why can't you see</p>
              <p>Come back, come back, come back to me</p>
            </div>
            <div className="pb-3">
              <p>And I know I was wrong when I said it was true</p>
              <p>
                <abbr
                  className="text-decoration-none"
                  title="Que não poderia ser eu e ela no meio sem você"
                >
                  That it couldn't be me and be her in between without you
                </abbr>
              </p>
              <p>Without you</p>
              <p>Without you</p>
            </div>
            <div className="pb-3">
              <p>Without you</p>
              <p>Without you</p>
              <p>Without you</p>
              <p>Without you</p>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default InBetweenDays
