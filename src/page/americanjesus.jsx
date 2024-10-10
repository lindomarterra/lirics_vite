import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md'

import './general.css'
import { Link } from 'react-router-dom'
import LogoLink from '../components/logoLink'

const Americanjesus= () => {
  return (
    <body>
      <nav
        style={{ backgroundColor: '#121212' }}
        className="navbar position-fixed w-100"
      >
        <Link
          to="/sorrow"
          target="_self"
          className="next_arrow btn btn-outline-light d-flex align-items-center"
        >
          <MdOutlineKeyboardDoubleArrowLeft className="fs-4" />
          <span>Sorrow</span>
        </Link>

        <LogoLink />

        <Link
          to="/lifeonmars"
          target="_self"
          className="next_arrow btn btn-outline-light d-flex align-items-center"
        >
          <span> Life on Mars </span>
          <MdOutlineKeyboardDoubleArrowRight className="fs-4" />
        </Link>
      </nav>

      <div style={{ paddingTop: '70px' }} className="container">
        <h2 className="fst-italic fs-6 p-2 mb-4"> American Jesus (A) </h2>
        <div style={{ lineHeight: '1rem' }} className="row text-center">
          <div className="col-md-3">
            <div className="pb-3">
              <p> I don't need to be a global citizen</p>
              <p> 'Cuz I'm blessed by nationality</p>
              <p> I'm member of a growing populace</p>
              <p> We enforce our popularity</p>
            </div>
            <div className="pb-3">
              <p> There are things that seem to pull us under and</p>
              <p> There are things that drag us down</p>
              <p> But there's a power and a vital presence</p>
              <p> That's lurking all around</p>
            </div>
            <div className="pb-3">
              <p> We've got the american Jesus</p>
              <p> See him on the interstate</p>
              <p> We've got the american Jesus</p>
              <p> He helped build the president's estate</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="pb-3">
              <p> I feel sorry for the earth's population</p>
              <p> 'Cuz so few live in the USA</p>
              <p> At least the foreigners can copy our morality</p>
              <p> They can visit but they cannot stay</p>
            </div>
            <div className="pb-3">
              <p> Only precious few can garner the prosperity</p>
              <p> It makes us walk with reconfidence</p>
              <p> We've got a place to go when we die</p>
              <p> And the architect resides right here</p>
            </div>
            <div className="pb-3">
              <p> We've got the american Jesus</p>
              <p> Bolstering national faith</p>
              <p> We've got the american Jesus</p>
              <p> Overwhelming millions every day</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="pb-3">
              <p> He's the farmers barren fields (in god)</p>
              <p> The force the army wields (we trust)</p>
              <p> The expression in the faces (because)</p>
              <p> Of the starving millions (he's one of us)</p>
            </div>
            <div className="pb-3">
              <p> The power of the man (break down)</p>
              <p> He's the fuel that drives the clan (cave in)</p>
              <p> He's the motive and conscience (we can)</p>
              <p> Of the murderer (take in our sins)</p>
            </div>
            <div className="pb-3">
              <p> He's the preacher on TV (strong heart)</p>
              <p> The false sincerity (too high)</p>
              <p> The form letter that's written (an infinite)</p>
              <p> By the big computers (kind)</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="pb-3">
              <p> The nuclear bombs (you lose)</p>
              <p> And the kids with no moms (we win)</p>
              <p> And I'm fearful that (he is)</p>
              <p> He's inside me (our champion)</p>
            </div>
            <div className="pb-3">
              <p> We've got the american Jesus</p>
              <p> See him on the interstate (we've got the american Jesus)</p>
              <p> We've got the american Jesus</p>
              <p> Exercisin' his authority</p>
            </div>
            <div className="pb-3">
              <p> We've got the american Jesus</p>
              <p> Bolstering national faith</p>
              <p> We've got the american Jesus</p>
              <p> Overwhelming millions every day</p>
            </div>
            <div className="pb-3">
              <p>
                <i>(one nation under god)</i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Americanjesus
