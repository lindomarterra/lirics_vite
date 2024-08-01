import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md'

import './general.css'
import { Link } from 'react-router-dom'

const ZiggyStardust = () => {
  return (
    <div className="container">
      <h1 className="text-end fst-italic fs-6 p-2 mb-4"> Ziggy Stardust (G) </h1>

      <div className="d-flex justify-content-center">
        <div className="arrowLeft col-2 ">
          <Link
            to="/lifeonmars"
            target="_self"
            className="next_arrow btn btn-outline-light d-flex align-items-center position-absolute start-0 top-50 me-0 pe-0 "
          >
            <span>Life on Mars?</span>
            <MdOutlineKeyboardDoubleArrowLeft className="fs-3" />
          </Link>
        </div>
        <div className="col-md-8">
          <div style={{ lineHeight: '1rem' }} className="row">
            <div className="col-md-6">
              <div className="pb-3">
                <p>Ziggy played guitar,</p>
                <p>
                  j
                  <abbr className="text-decoration-none" title="tocava bem">
                    amming good
                  </abbr>{' '}
                  with Wierd and Gilly
                </p>
                <p>and the Spiders from Mars</p>
                <p>He played it left hand,</p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="mas, foi longe demais"
                  >
                    but made it too far
                  </abbr>
                </p>
                <p>became the special man,</p>
                <p>and we were Ziggy's band</p>
              </div>
              <div className="pb-3">
                <p>Ziggy really sang,</p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="com seus olhos estragados e penteado bagunçado"
                  >
                    with screwed up eyes and screwed down hairdo
                  </abbr>{' '}
                </p>
                <p>like some cat from Japan</p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="ele poderia lambê-los sorrindo"
                  >
                    He could lick 'em by smiling
                  </abbr>
                </p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="ele poderia deixá-los pendurados"
                  >
                    he could leave 'em to hang
                  </abbr>
                </p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="ele veio tão carregado, cara"
                  >
                    He came on so loaded man
                  </abbr>
                </p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="bem dotado e bronzeado branco como a neve"
                  >
                    well hung and snow-white tan
                  </abbr>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pb-3">
                <p> But where were the spiders </p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="enquanto a mosca tentava quebrar nossas bolas"
                  >
                    while the fly tried to break our balls
                  </abbr>
                </p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="Apenas a luz da cerveja para nos guiar"
                  >
                    Just the beer light to guide us
                  </abbr>
                </p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="E então reclamamos dos fãs dele e deveríamos esmagar suas mãos doces"
                  >
                    And so we bitched about his fans and should we crush his
                    sweet hands
                  </abbr>
                </p>
              </div>
              <div className="pb-3">
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="Ziggy ganhou tempo"
                  >
                    Ziggy played for time
                  </abbr>
                </p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="brincando que éramos vodu"
                  >
                    jiving us that we were voodoo
                  </abbr>
                </p>
                <p>
                  and the kids was{' '}
                  <abbr
                    className="text-decoration-none"
                    title="simplismente grosseiras"
                  >
                    just crass
                  </abbr>
                </p>
                <p>
                  He was the{' '}
                  <abbr
                    className="text-decoration-none"
                    title="mais moderno e magnético dos seres"
                  >
                    nazz
                  </abbr>
                </p>
                <p>
                  with
                  <abbr className="text-decoration-none" title="bumbum bonito">
                    {' '}
                    God-given ass
                  </abbr>
                </p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="Ele levou tudo longe demais"
                  >
                    He took it all too far
                  </abbr>
                </p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="mas cara, ele poderia tocar violão"
                  >
                    but boy could he play guitar
                  </abbr>
                </p>
              </div>
              <div className="pb-3">
                <p>Making love with his ego</p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="Ziggy foi sugado pela sua mente"
                  >
                    Ziggy sucked up into his mind
                  </abbr>
                </p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="Como um messias leproso"
                  >
                    Like a leper messiah
                  </abbr>
                </p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="Quando as crianças mataram o homem, tive que acabar com a banda."
                  >
                    When the kids had killed the man I had to break up the band
                  </abbr>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="arrowRight col-2">
          <Link
            to="/imagine"
            target="_self"
            className="next_arrow btn btn-outline-light d-flex align-items-center position-absolute end-0 top-50 me-1 pe-0 "
          >
            <span>Imagine</span>
            <MdOutlineKeyboardDoubleArrowRight className="fs-3" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ZiggyStardust
