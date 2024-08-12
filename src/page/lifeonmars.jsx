import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'

import './general.css'
import { Link } from 'react-router-dom'
import LogoLink from '../components/logoLink'

const Lifeonmars = () => {
  return (
    <body>
      <nav
        style={{ backgroundColor: '#121212' }}
        className="position-fixed w-100 d-flex justify-content-end p-2 "
      >
        <div className='position-fixed top-0 start-0 p-2'>
          <LogoLink/>
        </div>
        <Link
          to="/ziggystardust"
          target="_self"
          className="next_arrow btn btn-outline-light d-flex align-items-center"
        >
          <span>Ziggy Stardust</span>
          <MdOutlineKeyboardDoubleArrowRight className="fs-4" />
        </Link>
      </nav>

      <div style={{ paddingTop: '70px' }} className="container">
        <h2 className="fst-italic fs-6 p-2 mb-4"> Life on Mars? (Gm) </h2>
        <div style={{ lineHeight: '1rem' }} className="row text-center">
          <div className="col-md-4">
            <div className="pb-3">
              <p>
                Its a{' '}
                <abbr className="text-decoration-none" title="horrivel">
                  God-awful
                </abbr>{' '}
                small{' '}
                <abbr className="text-decoration-none" title="caso">
                  affair
                </abbr>
              </p>
              <p>
                To the girl with the{' '}
                <abbr className="text-decoration-none" title="cabelo castanho">
                  mousy hair
                </abbr>
              </p>
              <p>But her mummy is yelling, No</p>
              <p>And her daddy has told her to go</p>
            </div>
            <div className="pb-3">
              <p>But her friend is nowhere to be seen</p>
              <p>Now she walks through her sunken dream </p>
              <p>To the seat with the clearest view</p>
              <p>
                And{' '}
                <abbr className="text-decoration-none" title="ele esta viciada">
                  she's hooked
                </abbr>{' '}
                to the silver screen
              </p>
            </div>
            <div className="pb-3">
              <p>
                But the film is a{' '}
                <abbr className="text-decoration-none" title="tedio triste">
                  saddening bore
                </abbr>
              </p>
              <p>For she's lived it ten times or more </p>
              <p>
                She could spit{' '}
                <abbr
                  className="text-decoration-none"
                  title="nos olhos dos tolos"
                >
                  in the eyes of fools
                </abbr>
              </p>
              <p>
                <abbr
                  className="text-decoration-none"
                  title="Enquanto eles pedem que ela se concentre em"
                >
                  As they ask her to focus on
                </abbr>
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="pb-3">
              <p>Sailors fighting in the dance hall</p>{' '}
              <p>Oh man, look at those cavemen go</p>
              <p>It's the freakiest show </p>
              <p>Take a look at the lawman </p>
              <p>Beating up the wrong guy</p>
              <p>
                Oh man,{' '}
                <abbr
                  className="text-decoration-none"
                  title="me pergunto se ele algum dia saberá"
                >
                  wonder if he'll ever know
                </abbr>{' '}
              </p>
              <p>He's in the best selling show</p>
              <p>Is there life on Mars?</p>
            </div>
            <div className="pb-3">
              <p>
                It's on{' '}
                <abbr
                  className="text-decoration-none"
                  title="A testa torturada da América"
                >
                  America's tortured brow
                </abbr>
              </p>
              <p>That Mickey Mouse has grown up a cow</p>
              <p>
                Now the workers{' '}
                <abbr className="text-decoration-none" title="atingiram">
                  have struck
                </abbr>{' '}
                for fame
              </p>
              <p>
                '
                <abbr
                  className="text-decoration-none"
                  title="Porque Lennon está à venda novamente"
                >
                  Cause Lennon's on sale again
                </abbr>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="pb-3">
              <p>
                <abbr
                  className="text-decoration-none"
                  title="Veja os ratos em seus milhões de hordas"
                >
                  See the mice in their million hordes
                </abbr>
              </p>
              <p>From Ibiza to the Norfolk Broads</p>
              <p>
                <abbr
                  className="text-decoration-none"
                  title="Regra Britannia está fora dos limites"
                >
                  Rule Britannia is out of bounds
                </abbr>
              </p>
              <p>
                To my mother, my dog, and{' '}
                <abbr className="text-decoration-none" title="palhaços">
                  clowns
                </abbr>
              </p>
            </div>
            <div className="pb-3">
              <p>But the film is a saddening bore</p>
              <p>'Cause I wrote it ten times or more</p>
              <p>
                <abbr
                  className="text-decoration-none"
                  title="Está prestes a ser escrito novamente"
                >
                  It's about to be writ again
                </abbr>
              </p>
              <p>
                <abbr
                  className="text-decoration-none"
                  title="Enquanto eu peço que você se concentre em"
                >
                  As I ask you to focus on
                </abbr>
              </p>
            </div>
            <div className="pb-3">
              <p>Sailors fighting in the dance hall</p>{' '}
              <p>Oh man, look at those cavemen go</p>
              <p>It's the freakiest show </p>
              <p>Take a look at the lawman </p>
              <p>Beating up the wrong guy</p>
              <p>
                Oh man,{' '}
                <abbr
                  className="text-decoration-none"
                  title="me pergunto se ele algum dia saberá"
                >
                  wonder if he'll ever know
                </abbr>{' '}
              </p>
              <p>He's in the best selling show</p>
              <p>Is there life on Mars?</p>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Lifeonmars
