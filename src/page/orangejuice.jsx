import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md'

import './general.css'
import { Link } from 'react-router-dom'
import LogoLink from '../components/logoLink'

const Sunseed = () => {
  return (
    <body>
      <nav
        style={{ backgroundColor: '#121212' }}
        className="navbar position-fixed w-100"
      >
        <Link
          to="/karmachameleon"
          target="_self"
          className="next_arrow btn btn-outline-light d-flex align-items-center"
        >
          <MdOutlineKeyboardDoubleArrowLeft className="fs-4" />
          <span>Karma Chameleon</span>
        </Link>

        <LogoLink />

        <Link
          to="/gitaiam"
          target="_self"
          className="next_arrow btn btn-outline-light d-flex align-items-center"
        >
          <span> Gita i am </span>
          <MdOutlineKeyboardDoubleArrowRight className="fs-4" />
        </Link>
      </nav>

      <div style={{ paddingTop: '70px' }} className="container">
        <h2 className="fst-italic fs-6 p-2 mb-4"> Orange juice (S.O.S) (G) </h2>
        <div style={{ lineHeight: '1rem' }} className="row text-center">
          <div className="col-md-6">
            <div className="pb-3">
              <p>Sunday is sunday, church and rest the sky is blue</p>
              <p>The papers bloody the news</p>
              <p>Flags that wave along the Main Street</p>
              <p>And far behind the proud and sad White Avenue</p>
              <p>All seems fine with the world</p>
              <p>Ants ride their fancy cars and feel complete</p>
            </div>
            <div className="pb-3">
              <p>And from the window of a seedy boarding-house</p>
              <p>I, being one of God's Vectors</p>
              <p>Try hard to make a king out of a louse</p>
            </div>
            <div className="pb-3">
              <p>Hey, buddy spaceman</p>
              <p>Astride your UFO</p>
              <p>Just take me upon your ride</p>
              <p>Wherever you go I'll go</p>
              <p>Hey buddy spaceman</p>
              <p>You just can't leave me here</p>
              <p>When I know there is a star</p>
              <p>So far and yet so near</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="pb-3">
              <p>Hey buddy spaceman</p>
              <p>You just can't leave me here</p>
              <p>When I know that every man and every woman is a star</p>
            </div>
            <div className="pb-3">
              <p>Yes, I have worshipped Allah, Buddha and Jesus Christ</p>
              <p>Saw heaven in the skies</p>
              <p>While God was seeing the world right through my eyes</p>
              <p>Before, as a mokey, I chittered through the last ice age</p>
              <p>Atlantis was my cage</p>
              <p>I had so many chances that I blew</p>
            </div>
            <div className="pb-3">
              <p>And all the messages that keep comin' and getting through</p>
              <p>No one can see their clue</p>
              <p>'Cause there's no time to think here at the zoo</p>
            </div>
            <div className="pb-3">
              <p>Hey, buddy spaceman</p>
              <p>Astride your UFO</p>
              <p>Just take me upon your ride</p>
              <p>Wherever you go I'll go</p>
              <p>Hey buddy spaceman</p>
              <p>You just can't leave me here</p>
              <p>When I know there is a star</p>
              <p>So far and yet so near</p>
              <p>When I know there is a star</p>
              <p>So far and yet so near</p>
              <p>When I know there is a star</p>
              <p>So far and yet so near</p>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Sunseed
