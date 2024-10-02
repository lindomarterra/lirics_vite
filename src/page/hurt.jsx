import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md'

import './general.css'
import { Link } from 'react-router-dom'
import LogoLink from '../components/logoLink'

const Hurt = () => {
  return (
    <body>
      <nav
        style={{ backgroundColor: '#121212' }}
        className="navbar position-fixed w-100"
      >
        <Link
          to="/comeasyouare"
          target="_self"
          className="next_arrow btn btn-outline-light d-flex align-items-center"
        >
          <MdOutlineKeyboardDoubleArrowLeft className="fs-4" />
          <span> Come as you are </span>
        </Link>

        <LogoLink />

        <Link
          to="/themanwhosoldtheworld"
          target="_self"
          className="next_arrow btn btn-outline-light d-flex align-items-center"
        >
          <span> The man who sold the world </span>
          <MdOutlineKeyboardDoubleArrowRight className="fs-4" />
        </Link>
      </nav>

      <div style={{ paddingTop: '70px' }} className="container">
        <h2 className="fst-italic fs-6 p-2 mb-4"> Hurt (F#)</h2>
        <div style={{ lineHeight: '1rem' }} className="row text-center">
          <div className="col-md-6">
            <div className="pb-3">
              <p> I hurt myself today </p>
              <p>To see if I still feel</p>
              <p>I focus on the pain</p>
              <p>The only thing that's real</p>
              <p>The needle tears a hole</p>
              <p>
                <abbr
                  className="text-decoration-none"
                  title="A velha e familiar picada"
                >
                  The old familiar sting
                </abbr>
              </p>
              <p>
                <abbr
                  className="text-decoration-none"
                  title="Tente matar tudo isso"
                >
                  Try to kill it all away
                </abbr>
              </p>
              <p>But I remember everything</p>
            </div>
            <div className="pb-3">
              <p>
                <abbr
                  className="text-decoration-none"
                  title="O que eu me tornei"
                >
                  What have I become
                </abbr>
              </p>
              <p> My sweetest friend?</p>
              <p>
                <abbr
                  className="text-decoration-none"
                  title="Todo mundo que eu conheço vai embora no final"
                >
                  Everyone I know goes away in the end
                </abbr>
              </p>
              <p>
                <abbr
                  className="text-decoration-none"
                  title="E você poderia ter tudo"
                >
                  And you could have it all
                </abbr>
              </p>
              <p>My empire of dirt</p>
              <p>
                <abbr
                  className="text-decoration-none"
                  title="Eu vou te decepcionar"
                >
                  I will let you down
                </abbr>
              </p>
              <p>I will make you hurt</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="pb-3">
              <p>
                <abbr
                  className="text-decoration-none"
                  title="Eu uso esta coroa de espinhos"
                >
                  I wear this crown of thorns
                </abbr>
              </p>
              <p>
                <abbr
                  className="text-decoration-none"
                  title="Na minha cadeira de mentiroso"
                >
                  Upon my liar's chair
                </abbr>
              </p>
              <p>
                <abbr
                  className="text-decoration-none"
                  title="Cheio de pensamentos quebrados"
                >
                  Full of broken thoughts
                </abbr>
              </p>
              <p>I cannot repair</p>
              <p>
                <abbr
                  className="text-decoration-none"
                  title="Sob as manchas do tempo"
                >
                  Beneath the stains of time
                </abbr>
              </p>
              <p>The feelings disappear</p>
              <p>You are someone else</p>
              <p>I am still right here</p>
            </div>
            <div className="pb-3">
              <p> What have I become</p>
              <p> My sweetest friend?</p>
              <p>Everyone I know goes away in the end</p>
              <p>And you could have it all</p>
              <p>My empire of dirt</p>
              <p>I will let you down</p>
              <p>I will make you hurt</p>
              <p>If I could start again</p>
              <p>A million miles away</p>
              <p>
                <abbr className="text-decoration-none" title="eu me manteria">
                  I would keep myself
                </abbr>
              </p>
              <p>I would find a way</p>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Hurt
