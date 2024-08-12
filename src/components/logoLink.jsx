import { GiGuitarHead } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const LogoLink = () => {
  return (
    <div >
      <Link
        to={'/'}
        target="_self"
        className="btn btn-sm btn-outline-secondary"
      >
        <GiGuitarHead className="fs-3" />
      </Link>
    </div>
  )
}

export default LogoLink
