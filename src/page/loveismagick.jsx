import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md'

import './general.css'
import { Link } from 'react-router-dom'
import LogoLink from '../components/logoLink'

const LoveisMagick = () => {
 
  return (
    <body>
      <nav
        style={{ backgroundColor: '#121212' }}
        className="navbar position-fixed w-100"
      >
        <Link
          to="/lovestreet"
          target="_self"
          className="next_arrow btn btn-outline-light d-flex align-items-center"
        >
          <MdOutlineKeyboardDoubleArrowLeft className="fs-4" />
          <span>Love Street</span>
        </Link>

        <LogoLink />

        <Link
          to="/zombie"
          target="_self"
          className="next_arrow btn btn-outline-light d-flex align-items-center"
        >
          <span>Zombie</span>
          <MdOutlineKeyboardDoubleArrowRight className="fs-4" />
        </Link>
      </nav>

      <div style={{ paddingTop: '70px' }} className="container">
        <h2 className="fst-italic fs-6 p-2 mb-4"> Love is Magick (Am) </h2>
        <div style={{ lineHeight: '1rem' }} className="row text-center">
          <div className="col-md-6">
            <div className="pb-3">
              <p>Love is a magick manifestation</p>
              <p>love is a magick flame</p>
              <p>Love is a magick manifestation</p>
              <p>love is a sacred game</p>
            </div>
            <div className="pb-3">
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
    </body>
  )
}

export default LoveisMagick
