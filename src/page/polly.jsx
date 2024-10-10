import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md'

import './general.css'
import { Link } from 'react-router-dom'
import LogoLink from '../components/logoLink'

const Polly = () => {
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
        <h2 className="fst-italic fs-6 p-2 mb-4"> Polly (G) </h2>
        <div style={{ lineHeight: '1rem' }} className="row text-center">
          <div className="col-md-4">
            <div className="pb-3">
              <p> Polly wants a cracker</p>
              <p> I think I should get off her first</p>
              <p> I think she wants some water</p>
              <p> To put out the blow torch</p>
            </div>
            <div className="pb-3">
              <p> Isn't me, have a seed</p>
              <p> Let me clip your dirty wings</p>
              <p> Let me take a ride, cut yourself</p>
              <p> Want some help, please myself</p>
              <p> Got some rope, haven't told</p>
              <p> I promise you, I have been true</p>
              <p> Let me take a ride, cut yourself</p>
              <p> Want some help, please myself</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="pb-3">
              <p> Polly wants a cracker</p>
              <p> Maybe she would like some food</p>
              <p> She asks me to untie her</p>
              <p> A chase would be nice for a few</p>
            </div>
            <div className="pb-3">
              <p> Isn't me, have a seed</p>
              <p> Let me clip your dirty wings</p>
              <p> Let me take a ride, cut yourself</p>
              <p> Want some help, please myself</p>
              <p> Got some rope, haven't told</p>
              <p> I promise you, I have been true</p>
              <p> Let me take a ride, cut yourself</p>
              <p> Want some help, please myself</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="pb-3">
              <p> Polly says her back hurts</p>
              <p> And she's just as bored as me</p>
              <p> She caught me off my guard</p>
              <p> Amazes me the will of instinct</p>
            </div>
            <div className="pb-3">
              <p> Isn't me, have a seed</p>
              <p> Let me clip your dirty wings</p>
              <p> Let me take a ride, cut yourself</p>
              <p> Want some help, please myself</p>
              <p> Got some rope, haven't told</p>
              <p> I promise you, I have been true</p>
              <p> Let me take a ride, cut yourself</p>
              <p> Want some help, please myself</p>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Polly
