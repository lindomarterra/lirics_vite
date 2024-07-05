import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md'

import './general.css'
import { Link } from "react-router-dom";

const Imagine = () => {
  return (
    <div className="container">
      <h1 className="text-end fst-italic fs-6 p-2 mb-4"> Imagine (tone c) </h1>

      <div className="d-flex justify-content-center">
        <div className="arrowLeft col-2 ">
          <Link
            to="/ziggystardust"
            target="_self"
            className="next_arrow btn btn-outline-light d-flex align-items-center position-absolute start-0 top-50 me-0 pe-0 "
          >
            <span>Ziggy Stardust</span>
            <MdOutlineKeyboardDoubleArrowLeft className="fs-3" />
          </Link>
        </div>

        <div className="col-8">
          <div style={{ lineHeight: '1rem' }} className="row">
            <div className="col-md-6">
              <div className="pb-3">
                <p> Imagine there's no heaven </p>
                <p> It's easy if you try</p>
                <p> No hell below us</p>
                <p> Above us only sky</p>
              </div>
              <div className="pb-3">
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
              </div>
              <div className="pb-3">
                <p> Imagine all the people</p>
                <p>Living life in peace</p>
              </div>
            </div>
            <div className="col-md-6">
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
              </div>
              <div className="pb-3">
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
                    And the world will live as one
                  </abbr>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="arrowRight col-2">
          <Link
            to="/loveismagick"
            target="_self"
            className="next_arrow btn btn-outline-light d-flex align-items-center position-absolute end-0 top-50 me-0 pe-0 "
          >
            <span>Love is Magick</span>
            <MdOutlineKeyboardDoubleArrowRight className="fs-3" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Imagine
