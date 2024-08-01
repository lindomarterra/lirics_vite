import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md'

import './general.css'
import { Link } from 'react-router-dom'

const LoveisMagick = () => {
 
  return (
    <div className="container">
      <h1 className="text-end fst-italic fs-6 p-2 mb-4"> Love is Magick (Am) </h1>

      <div className="d-flex justify-content-center">
        <div className="arrowLeft col-2">
          <Link
            to="/loveismagick"
            target="_self"
            className="next_arrow btn btn-outline-light d-flex align-items-center position-absolute start-0 top-50 me-0 pe-0 "
          >
            <span>Love is Magick</span>
            <MdOutlineKeyboardDoubleArrowLeft className="fs-3" />
          </Link>
        </div>

        <div className="col-8">
          <div style={{ lineHeight: '1rem' }} className="row">
            <div className="col-md-6">
              <div className="pb-3">
                <p>Love is a magick manifestation</p>
                <p>love is a magick flame</p>
                <p>Love is a magick manifestation</p>
                <p>love is a sacred game</p>
              </div>
              <div className="pb-3">
                <p>yes</p>
                <p>Love is a magick manifestation</p>
                <p>love is a magick flame</p>
              </div>
              <div className="pb-3">
                <p>and with the suns I go</p>
                <p>Like a new "star" I flow</p>
                <p>High! As the mountains</p>
                <p>I'm gone</p>
                <p>Deep! As the oceans</p>
                <p>Making love</p>
              </div>
              <div className="pb-3">
                <p>Love is a cosmic magical number</p>
                <p>It's up to you to combine</p>
                <p>Love is a magick cosmic number</p>
                <p>Add multiply and divide</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pb-3">
                <p>Divide the number nine</p>
                <p>Add four and multiply</p>
                <p>Love! Is the answer</p>
                <p>I am God! Spreading cancer</p>
                <p>I love you</p>
                <p>Yes, I do</p>
              </div>
              <div className="pb-3">
                <p>Divide the number nine</p>
                <p>Add four and multiply</p>
                <p>Love! Is the answer</p>
                <p>I am God! Spreading cancer</p>
                <p>yes, I love you</p>
                <p>Yes, I do</p>
              </div>
              <div className="pb-3">
                <p>love is magick</p>
                <p>love is magick</p>
                <p>love is Gloria</p>
              </div>
            </div>
          </div>
        </div>

        <div className="arrowRight col-2">
          <Link
            to="/zombie"
            target="_self"
            className="next_arrow btn btn-outline-light d-flex align-items-center position-absolute end-0 top-50 me-0 pe-0 "
          >
            <span>Zombie</span>
            <MdOutlineKeyboardDoubleArrowRight className="fs-3" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoveisMagick
