import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md'

import './general.css'
import { Link } from 'react-router-dom'

const Starman = () => {
  return (
    <div className="container">
      <h1 className="text-end fst-italic fs-6 p-2 mb-4"> Starman (F) </h1>

      <div className="d-flex justify-content-center ">
        <div className="arrowLeft col-1 ">
          <Link
            to="/thekillingmon"
            target="_self"
            className="next_arrow btn btn-outline-light d-flex align-items-center position-absolute start-0 top-50 me-0 pe-0 "
          >
            <span>The Killing Mon</span>
            <MdOutlineKeyboardDoubleArrowLeft className="fs-3" />
          </Link>
        </div>

        <div className="col-10">
          <div style={{ lineHeight: '1rem' }} className="row">
            <div className="col-md-4">
              <div className="pb-3">
                <p> Didn't know what time it was, the lights were low_ow_ow</p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="eu me inclinei/recostei"
                  >
                    I leaned back
                  </abbr>{' '}
                  on my radio_o_o
                </p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="algum gato estava deitando/colocando algum rock'n'roll com muita alma Ele disse"
                  >
                    Some cat was layin'down some rock'n'roll'lotta soul He said
                  </abbr>
                </p>
              </div>
              <div className="pb-3">
                <p>
                  {' '}
                  <abbr
                    className="text-decoration-none"
                    title="Então o som alto pareceu desaparecer"
                  >
                    Then the loud sound did seem to fa_a_ade
                  </abbr>
                </p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="Came back like slow voice on a wave of pha_a_ase"
                  >
                    Came back like slow voice on a wave of pha_a_ase
                  </abbr>
                </p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="Isso não era nenhum DJ que foi uma brincadeira cósmica nebulosa"
                  >
                    That weren't no dj that was hazy cosmic jive
                  </abbr>
                </p>
              </div>
              <div className="pb-3">
                <p>There's a starman waiting in the sky</p>
                <p>He'd like to come and meet us</p>
                <p>
                  But he thinks{' '}
                  <abbr
                    className="text-decoration-none"
                    title="ele explodiria nossas mentes/surpreenderia"
                  >
                    he'd blow our minds
                  </abbr>
                </p>
                <p>There's a starman waiting in the sky</p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="Ele nos disse para não estragar tudo"
                  >
                    He's told us not to blow it
                  </abbr>
                </p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="Porque ele sabe que tudo vale a pena"
                  >
                    'Cause he knows it's all worthwhile He told me
                  </abbr>{' '}
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pb-3">
                <p>
                  {' '}
                  <abbr
                    className="text-decoration-none"
                    title="deixem as crianças perderem isso"
                  >
                    Let the children lose it
                  </abbr>
                </p>
                <p> Let the children use it</p>
                <p>
                  {' '}
                  <abbr
                    className="text-decoration-none"
                    title="deixe as crianças dançarem"
                  >
                    Let all the children boogie
                  </abbr>
                </p>
              </div>
              <div className="pb-3">
                <p>
                  {' '}
                  <abbr
                    className="text-decoration-none"
                    title="Eu tive que ligar para alguém, então eu escolhi você"
                  >
                    I had to phone someone so I picked on you_ou_ou
                  </abbr>
                </p>
                <p>
                  Hey,{' '}
                  <abbr
                    className="text-decoration-none"
                    title="isso está longe, então você também ouviu ele_o_o"
                  >
                    that's far out so you heard him too_o_o
                  </abbr>
                </p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="Ligue a TV, podemos buscá-lo no canal dois"
                  >
                    Switch on the tv we may pick him up on channel two
                  </abbr>
                </p>
                <p>
                  {' '}
                  <abbr
                    className="text-decoration-none"
                    title="Olhe pela sua janela, posso ver a luz"
                  >
                    Look out your window I can see the light_ight_ight
                  </abbr>
                </p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="Se pudermos brilhar, ele pode pousar esta noite"
                  >
                    If we can sparkle he may land tonight
                  </abbr>
                  _ight_ight
                </p>
                <p>
                  <abbr
                    className="text-decoration-none"
                    title="Não conte ao seu papai ou ele vai nos prender de medo/susto "
                  >
                    Don't tell your papa or he'll get us locked up in fright
                  </abbr>
                </p>
              </div>
              <div className="pb-3">
                <p>There's a starman waiting in the sky</p>
                <p>He'd like to come and meet us</p>
                <p>But he thinks he'd blow our minds</p>
                <p>There's a starman waiting in the sky</p>
                <p>He's told us not to blow it</p>
                <p>'Cause he knows it's all worthwhile He told me </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pb-3">
                <p> Let the children lose it</p>
                <p> Let the children use it</p>
                <p> Let all the children boogie</p>
              </div>
              <div className="pb-3">
                <p>A starman waiting in the sky</p>
                <p>He'd like to come and meet us</p>
                <p>But he thinks he'd blow our minds</p>
                <p>There's a starman waiting in the sky</p>
                <p>He's told us not to blow it</p>
                <p>'Cause he knows it's all worthwhile He told me </p>
              </div>
              <div className="pb-3">
                <p> Let the children lose it</p>
                <p> Let the children use it</p>
                <p> and all the children boogie</p>
              </div>
              <div className="pb-3">
                <p> La la la la </p>
                <p> La la la la </p>
                <p> La la la la </p>
                <p> La la la la </p>
              </div>
            </div>
          </div>
        </div>

        <div className="arrowRight col-1">
          <Link
            to="#"
            target="_self"
            className="next_arrow btn btn-outline-light d-flex align-items-center position-absolute end-0 top-50 me-1 pe-0 "
          >
            <span> NEXT </span>
            <MdOutlineKeyboardDoubleArrowRight className="fs-3" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Starman
