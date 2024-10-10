import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md'

import './general.css'
import { Link } from 'react-router-dom'
import LogoLink from '../components/logoLink'

const Sorrow = () => {
  return (
    <body>
      <nav
        style={{ backgroundColor: '#121212' }}
        className="navbar position-fixed w-100"
      >
        <Link
          to="/polly"
          target="_self"
          className="next_arrow btn btn-outline-light d-flex align-items-center"
        >
          <MdOutlineKeyboardDoubleArrowLeft className="fs-4" />
          <span>Polly</span>
        </Link>

        <LogoLink />

        <Link
          to="/americanjesus"
          target="_self"
          className="next_arrow btn btn-outline-light d-flex align-items-center"
        >
          <span> American Jesus </span>
          <MdOutlineKeyboardDoubleArrowRight className="fs-4" />
        </Link>
      </nav>

      <div style={{ paddingTop: '70px' }} className="container">
        <h2 className="fst-italic fs-6 p-2 mb-4"> Sorrow (G) </h2>
        <div style={{ lineHeight: '1rem' }} className="row text-center">
          <div className="col-md-6">
            <div className="pb-3">
              <p>With your long blonde hair and your eyes of blue</p>
              <p>The only thing I ever got from you was sorrow, sorrow</p>
              <p>You acted funny trying to spend my money</p>
              <p>
                You're out there playing your high class games of sorrow, sorrow
              </p>
            </div>
            <div className="pb-3">
              <p>You never do what you know you oughta</p>
              <p>Something tells me you're a Devil's daughter sorrow, sorrow</p>
              <p>Ahhhh, oo, oooo</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="pb-3">
              <p>
                I tried to find her 'Cause I can't resist her (I tried to find
                her)
              </p>
              <p>I never knew just how much I missed her sorrow, sorrow</p>
              <p>With your long blonde hair and your eyes of blue</p>
              <p>The only thing I ever got from you was sorrow, sorrow</p>
            </div>
            <div className="pb-3">
              <p>Oh-oh-oh-oh</p>
              <p>Oh-oh-oh, ho-ho</p>
            </div>
            <div className="pb-3">
              <p>With your long blonde hair</p>
              <p>I couldn't sleep last night</p>
              <p>With your long blonde hair</p>
            </div>
            <div className="pb-3">
              <p>Hu hu hu</p>
              <p>Hu hu hu yeah</p>
              <p>Hu hu hu</p>
              <p>Hu hu hu yeah</p>
              <p>Hu hu hu</p>
              <p>Hu hu hu yeah</p>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Sorrow
