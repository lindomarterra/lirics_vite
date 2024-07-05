import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md'

import './general.css'
import { Link } from 'react-router-dom'

const LoveisMagick = () => {
  return (
    <div className="container">
      <h1 className="text-end fst-italic fs-6 p-2 mb-4"> Love is Magick </h1>

      <div className='d-flex justify-content-center'>

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

        <div className='col-8' >
          <div style={{ lineHeight: '1rem' }} className="row">
            <div className="col-md-6">
              <div className="pb-3">
                <p>Love is a cosmic magical number</p>
                <p>Add multiply and divide</p>
                <p>Love is a cosmic magical number</p>
                <p>Add multiply and divide</p>
              </div>
              <div className="pb-3">
                <p>Divide the number nine</p>
                <p>Add four and multiply</p>
                <p>Love is the answer</p>
                <p>I am God spreading cancer</p>
                <p>Under will love is the law</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pb-3">
                <p>Love is a cosmic magical number</p>
                <p>It's up to you to combine</p>
                <p>Love is a magick cosmic number</p>
                <p>Add multiply and divide</p>
              </div>
              <div className="pb-3">
                <p>Divide the number nine</p>
                <p>Add four and multiply</p>
                <p>Love is the answer</p>
                <p>I am God spreading cancer</p>
                <p>Under will love is the law</p>
              </div>
              <div className="pb-3">
                <p>Love is magick</p>
                <p>Love is magick</p>
                <p>Love is magick</p>
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
