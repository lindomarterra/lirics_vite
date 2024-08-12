import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md'

import './general.css'
import { Link } from 'react-router-dom'
import LogoLink from '../components/logoLink'

const Imagine = () => {
  return (
    <body>
      <nav
        style={{ backgroundColor: '#121212' }}
        className="navbar position-fixed w-100"
      >
        <Link
          to="/ziggystardust"
          target="_self"
          className="next_arrow btn btn-outline-light d-flex align-items-center"
        >
          <MdOutlineKeyboardDoubleArrowLeft className="fs-4" />
          <span>Ziggy Stardust</span>
        </Link>

        <LogoLink />

        <Link
          to="/lovestreet"
          target="_self"
          className="next_arrow btn btn-outline-light d-flex align-items-center"
        >
          <span>Love Street</span>
          <MdOutlineKeyboardDoubleArrowRight className="fs-4" />
        </Link>
      </nav>

      <div style={{paddingTop:'70px'}} className="container">
        <h2 className="fst-italic fs-6 p-2 mb-4"> Imagine (C) </h2>
        <div style={{ lineHeight: '1rem' }} className="row text-center">
          <div className="col-sm-6">
            <div className="pb-3">
              <p> Imagine there's no heaven </p>
              <p> It's easy if you try</p>
              <p> No hell below us</p>
              <p> Above us only sky</p>
              <p> Imagine all the people</p>
              <p> Living for today </p>
            </div>
            <div className="pb-3">
              <p> Imagine there's no countries</p>
              <p> It isn't hard to do</p>
              <p>
                <abbr
                  className="text-decoration-none"
                  title="nada para matar ou morrer"
                >
                  Nothing to kill or die for
                </abbr>
              </p>
              <p> And no religion too</p>
              <p> Imagine all the people</p>
              <p>Living life in peace</p>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="pb-3">
              <p> You may say I'm a dreamer</p>
              <p>
                <abbr
                  className="text-decoration-none"
                  title="mas eu não sou o único"
                >
                  But I'm not the only one
                </abbr>
              </p>
              <p>I hope some day you'll join us</p>
              <p>
                <abbr
                  className="text-decoration-none"
                  title="E o mundo será como um só"
                >
                  And the world will be as one
                </abbr>
              </p>
            </div>
            <div className="pb-3">
              <p>
                <abbr
                  className="text-decoration-none"
                  title="imagine sem posses"
                >
                  Imagine no possessions
                </abbr>
              </p>
              <p>
                <abbr
                  className="text-decoration-none"
                  title="eu me pergunto se você pode"
                >
                  I wonder if you can
                </abbr>
              </p>
              <p>
                {' '}
                <abbr
                  className="text-decoration-none"
                  title="sem necessidade de ganância ou fome"
                >
                  No need for greed or hunger
                </abbr>
              </p>
              <p>
                <abbr
                  className="text-decoration-none"
                  title="uma irmandade entre os homens"
                >
                  A brotherhood of man
                </abbr>
              </p>
              <p> Imagine all the people</p>
              <p> Sharing all the world</p>
            </div>
            <div className="pb-3">
              <p> You may say I'm a dreamer</p>
              <p>
                <abbr
                  className="text-decoration-none"
                  title="mas eu não sou o único"
                >
                  But I'm not the only one
                </abbr>
              </p>
              <p>I hope some day you'll join us</p>
              <p>
                <abbr
                  className="text-decoration-none"
                  title="E o mundo será como um só"
                >
                  And the world will be as one
                </abbr>
              </p>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Imagine
