import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md'

import './general.css'
import { Link } from 'react-router-dom'
import LogoLink from '../components/logoLink'

const Linger = () => {
  return (
    <body>
      <nav
        style={{ backgroundColor: '#121212' }}
        className="navbar position-fixed w-100"
      >
        <Link
          to="/howcouldiknow"
          target="_self"
          className="next_arrow btn btn-outline-light d-flex align-items-center"
        >
          <MdOutlineKeyboardDoubleArrowLeft className="fs-4" />
          <span> How could i know </span>
        </Link>

        <LogoLink />

        <Link
          to="/imeltwithyou"
          target="_self"
          className="next_arrow btn btn-outline-light d-flex align-items-center"
        >
          <span> I melt with you </span>
          <MdOutlineKeyboardDoubleArrowRight className="fs-4" />
        </Link>
      </nav>

      <div style={{ paddingTop: '70px' }} className="container">
        <h2 className="fst-italic fs-6 p-2 mb-4"> Linger (D)</h2>
        <div style={{ lineHeight: '1rem' }} className="row text-center">
          <div className="col-md-4">
            <div className="pb-3">
              <p>If you, if you could return</p>
              <p>Don't let it burn, don't let it fade</p>
              <p>I'm sure I'm not being rude</p>
              <p>But it's just your attitude</p>
              <p>It's tearing me apart</p>
              <p>It's ruining everyday</p>
            </div>
            <div className="pb-3">
              <p>I swore, I swore I would be true</p>
              <p>And honey so did you</p>
              <p>So why were you holding her hand?</p>
              <p>Is that the way we stand?</p>
              <p>Were you lying all the time?</p>
              <p>Was it just a game to you?</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="pb-3">
              <p>But I'm in so deep</p>
              <p>You know I'm such a fool for you</p>
              <p>You got me wrapped around your finger</p>
              <p>Do you have to let it linger?</p>
              <p>Do you have to? do you have to?</p>
              <p>Do you have to let it linger?</p>
            </div>
            <div className="pb-3">
              <p>Oh, I thought the world of you</p>
              <p>I thought nothing could go wrong</p>
              <p>But I was wrong, I was wrong</p>
            </div>
            <div className="pb-3">
              <p>If you, if you could get by</p>
              <p>Trying not to lie</p>
              <p>Things wouldn't be so confused</p>
              <p>And I wouldn't feel so used</p>
              <p>But you always really knew</p>
              <p>I just wanna be with you</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="pb-3">
              <p>But I'm in so deep</p>
              <p>You know I'm such a fool for you</p>
              <p>You got me wrapped around your finger</p>
              <p>Do you have to let it linger?</p>
              <p>Do you have to? do you have to?</p>
              <p>Do you have to let it linger?</p>
            </div>
            <div className="pb-3">
              <p>But I'm in so deep</p>
              <p>You know I'm such a fool for you</p>
              <p>You got me wrapped around your finger</p>
              <p>Do you have to let it linger?</p>
              <p>Do you have to? do you have to?</p>
              <p>Do you have to let it linger?</p>
            </div>
            <div className="pb-3">              
              <p>You know I'm such a fool for you</p>
              <p>You got me wrapped around your finger</p>
              <p>Do you have to let it linger?</p>
              <p>Do you have to? do you have to?</p>
              <p>Do you have to let it linger?</p>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Linger
