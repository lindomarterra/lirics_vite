import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md'

import './general.css'
import { Link } from 'react-router-dom'

const TheKillingTime = () => {
  return (
    <div className="container">
      <h1 className="text-end fst-italic fs-6 p-2 mb-4">
        The Killing Time (tone C)
      </h1>

      <div className='d-flex justify-content-center'>
        <div className="arrowLeft col-2 ">
          <Link
            to="/zombie"
            target="_self"
            className="next_arrow btn btn-outline-light d-flex align-items-center position-absolute start-0 top-50 me-0 pe-0 "
          >
            <span>Zombie</span>
            <MdOutlineKeyboardDoubleArrowLeft className="fs-3" />
          </Link>
        </div>
        <div className='col-8'>
          <div style={{ lineHeight: '1rem' }} className="row">
            <div className="col-md-6">
              <div className="pb-3">
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="Sob a lua azul eu vi você"
                  >
                    Under blue moon I saw you
                  </abbr>
                </p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="Então em breve você me levará"
                  >
                    So soon you'll take me
                  </abbr>
                </p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="Em seus braços até tarde para implorar"
                  >
                    Up in your arms to late to beg you
                  </abbr>
                </p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="Ou cancele, embora eu saiba que deve ser"
                  >
                    Or cancel it though I know it must be
                  </abbr>
                </p>
                <p>
                  <abbr className="text-decoration-none" title="é hora de matar">
                    {' '}
                    The killing time{' '}
                  </abbr>
                </p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="Involuntariamente meu"
                  >
                    Unwillingly mine
                  </abbr>
                </p>
              </div>
              <div className="pb-3">
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="Destino, contra sua vontade"
                  >
                    Fate, up against your will
                  </abbr>
                </p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="através do grosso e fino"
                  >
                    Through the thick and thin
                  </abbr>
                </p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="Ele vai esperar até"
                  >
                    He will wait until
                  </abbr>
                </p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="Você se entrega a ele"
                  >
                    You give yourself to him
                  </abbr>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pb-3">
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="Nas noites estreladas eu vi você"
                  >
                    In starlit nights I saw you
                  </abbr>
                </p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="Tão cruelmente você me beijou"
                  >
                    So cruelly you kissed me
                  </abbr>
                </p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="Seus lábios um mundo mágico"
                  >
                    Your lips a magic world
                  </abbr>
                </p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="O céu todo coberto de joias"
                  >
                    The sky all hung with jewels
                  </abbr>
                </p>
                <p>
                  <abbr className="text-decoration-none" title="A lua assassina">
                    The killing moon
                  </abbr>
                </p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="Virá muito em breve"
                  >
                    Will come too soon
                  </abbr>
                </p>
              </div>
              <div className="pb-3">
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="Destino, contra sua vontade"
                  >
                    Fate, up against your will
                  </abbr>
                </p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="através do grosso e fino"
                  >
                    Through the thick and thin
                  </abbr>
                </p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="Ele vai esperar até"
                  >
                    He will wait until
                  </abbr>
                </p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="Você se entrega a ele"
                  >
                    You give yourself to him
                  </abbr>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="arrowRight col-2">
          <Link
            to="/starman"
            target="_self"
            className="next_arrow btn btn-outline-light d-flex align-items-center position-absolute end-0 top-50 me-0 pe-0 "
          >
            <span>Starman</span>
            <MdOutlineKeyboardDoubleArrowRight className="fs-3" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TheKillingTime
