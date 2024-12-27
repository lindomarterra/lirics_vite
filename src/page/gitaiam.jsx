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
          to="/orangejuice"
          target="_self"
          className="next_arrow btn btn-outline-light d-flex align-items-center"
        >
          <MdOutlineKeyboardDoubleArrowLeft className="fs-4" />
          <span>Orange juice</span>
        </Link>

        <LogoLink />

        <Link
          to="/lovewilltearusapart"
          target="_self"
          className="next_arrow btn btn-outline-light d-flex align-items-center"
        >
          <span> Love will tear us apart </span>
          <MdOutlineKeyboardDoubleArrowRight className="fs-4" />
        </Link>
      </nav>

      <div style={{ paddingTop: '70px' }} className="container">
        <h2 className="fst-italic fs-6 p-2 mb-4"> Gita i am (A) </h2>
        <div style={{ lineHeight: '1rem' }} className="row text-center">
          <div className="col-md-3">
            <div className="pb-3">
              <p>
                <i>Since the beginning of time</i>
              </p>
              <p>
                <i>Man has search for the great answer</i>
              </p>
              <p>
                <i>It was given</i>
              </p>
              <p>
                <i>Today I give it once more</i>
              </p>
            </div>
            <div className="pb-3">
              <p>Sometimes you ask me a question</p>
              <p>You ask why I talk so little</p>
              <p>I hardly ever speak of love</p>
              <p>Don't side you and smiling so brittle</p>
            </div>
            <div className="pb-3">
              <p>You think of me all the time</p>
              <p>You eat me, spew me and leave me</p>
              <p>Come forth, see through your ears</p>
              <p>Cause today I'll challenge your sight</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="pb-3">
              <p>I am the light of the starlights</p>
              <p>I am the child of the Moon</p>
              <p>Yes, I am your hatred of love</p>
              <p>I am too late and too soon</p>
            </div>
            <div className="pb-3">
              <p>Yes, I am the fear of failure</p>
              <p>I am the power of will</p>
              <p>I am the bluff of the gambler</p>
              <p>I am. I move, I'm still</p>
            </div>
            <div className="pb-3">
              <p>Yes, I am your sacrifice</p>
              <p>The placard that spells forbidden</p>
              <p>Blood in the eyes of the vampire</p>
              <p>I am the curse unbidden</p>
            </div>
            <div className="pb-3">
              <p>Yes, I am the black and the Indian</p>
              <p>I am the WASP and the jew</p>
              <p>I am the Bible and the I-Ching</p>
              <p>The red, the white and the blue</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="pb-3">
              <p>Why do you ask me a question?</p>
              <p>Asking is not going to show</p>
              <p>That I am all things in existence</p>
              <p>I am, I was, I go</p>
            </div>
            <div className="pb-3">
              <p>You have me with you forever</p>
              <p>Not knowing if it's bad or good</p>
              <p>But know that I am in yourself</p>
              <p>Why don't you just meet me in the woods?</p>
            </div>
            <div className="pb-3">
              <p>For I am the eaves of the roof</p>
              <p>I am the fish and the fisher</p>
              <p>"A" is the first of my name</p>
              <p>Yes, I am the hope of the wisher</p>
            </div>
            <div className="pb-3">
              <p>I am the housewife and the whore</p>
              <p>Hunting the markets asleep</p>
              <p>I am the devil at your door</p>
              <p>I'm shallow, wide and deep</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="pb-3">
              <p>I am the law of Thelema</p>
              <p>I am the fang of the shark</p>
              <p>I am the eyes of the blind man</p>
              <p>I am the light in the dark</p>
            </div>
            <div className="pb-3">
              <p>I am bitter in your tongue</p>
              <p>Mother, father and the riddle</p>
              <p>I am the son yet to come</p>
              <p>Yes, I'm the beginning, the end and the middle</p>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Sunseed
