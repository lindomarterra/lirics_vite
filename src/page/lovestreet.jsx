import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md'

import './general.css'
import { Link } from 'react-router-dom'

const LoveStreet = () => {
 
  return (
    <div className="container">
      <h1 className="text-end fst-italic fs-6 p-2 mb-4"> Love street (C) </h1>

      <div className="d-flex justify-content-center">
        <div className="arrowLeft col-2">
          <Link
            to="/imagine"
            target="_self"
            className="next_arrow btn btn-outline-light d-flex align-items-center position-absolute start-0 top-50 me-0 pe-0 "
          >
            <span>Imagine</span>
            <MdOutlineKeyboardDoubleArrowLeft className="fs-3" />
          </Link>
        </div>

        <div className="col-8">
          <div style={{ lineHeight: '1rem' }} className="row">
            <div className="col-md-6">
              <div className="pb-3">
                <p>She lives on Love Street</p>
                <p>lingers long on Love Street.</p>
                <p> She has a house and garden,</p>
                <p>I would like to see what happens.</p>
              </div>
              <div className="pb-3">
                <p>She has robes and she has monkeys,</p>
                <p> lazy diamond studded flunkies.</p>
              </div>
              <div className="pb-3">
                <p>She has wisdom and knows what to do,</p>
                <p> she has me and she has you.</p>
              </div>
              <div className="pb-3">
                <p> She has wisdom and knows what to do,</p>
                <p> she has me and she has you.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pb-3">
                <p> I see you live on Love Street,</p>
                <p> there's a store where the creatures meet.</p>
                <p> I wonder what they do in there,</p>
                <p>summer sunday and a year.</p>
                <p> I guess I like it fine so far.</p>
              </div>
              <div className="pb-3">
                <p>She lives on Love Street</p>
                <p>lingers long on Love Street.</p>
                <p> She has a house and garden,</p>
                <p>I would like to see what happens.</p>
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

export default LoveStreet
