import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md'

import './general.css'
import { Link } from 'react-router-dom'
import LogoLink from '../components/logoLink'

const Howcouldiknow = () => {
  return (
    <body>
      <nav
        style={{ backgroundColor: '#121212' }}
        className="navbar position-fixed w-100"
      >
        <Link
          to="/themanwhosoldtheworld"
          target="_self"
          className="next_arrow btn btn-outline-light d-flex align-items-center"
        >
          <MdOutlineKeyboardDoubleArrowLeft className="fs-4" />
          <span> The man who sold the world </span>
        </Link>

        <LogoLink />

        <Link
          to="/linger"
          target="_self"
          className="next_arrow btn btn-outline-light d-flex align-items-center"
        >
          <span> Linger </span>
          <MdOutlineKeyboardDoubleArrowRight className="fs-4" />
        </Link>
      </nav>

      <div style={{ paddingTop: '70px' }} className="container">
        <h2 className="fst-italic fs-6 p-2 mb-4"> How could i know (Em)</h2>
        <div style={{ lineHeight: '1rem' }} className="row text-center">
          <div className="col-md-4">
            <div className="pb-3">
              <p>Reformulation rearrange the game you're in</p>
              <p>Let us start from the begin</p>
              <p>With confidence you'll win</p>
              <p>That's the reason you were born</p>
            </div>
            <div className="pb-3">
              <p>Cause Jesus Christ man won't be coming Back no more</p>
              <p>He set up his proper laws</p>
              <p>And you know well that he did</p>
              <p>just what He should have done</p>
            </div>
            <div className="pb-3">
              <p>As I was growing and my hair was getting longer</p>
              <p>I was feeling so much stronger</p>
              <p>I could carry my guitar</p>
              <p>and I knew That I could sing</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="pb-3">
              <p>But hey how could I know</p>
              <p>The wind would blow with the rain</p>
              <p>Hey how could I see</p>
              <p>What would they make out of me</p>
            </div>
            <div className="pb-3">
              <p>When I was little used to dream I was a king</p>
              <p>Now they taught me how to sing</p>
              <p>Think I've got most everything</p>
              <p>I could ever ask for</p>
            </div>
            <div className="pb-3">
              <p>You've got your pencil your guitar Your amplifier</p>
              <p>Searching for the lousy liars</p>
              <p>You will set this world on fire</p>
              <p>Like Nero did to Rome Yeah</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="pb-3">
              <p>But hey how could I know</p>
              <p>My eyes could see in the dark</p>
              <p>Hey don't press on me</p>
              <p>I'm not to blame can't you see</p>
            </div>
            <div className="pb-3">
              <p>It's been so long now</p>
              <p>Since the latest red has gone</p>
              <p>Who knows you'll be the next</p>
              <p>To go down in history</p>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Howcouldiknow
