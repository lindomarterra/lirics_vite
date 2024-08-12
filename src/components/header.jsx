import propTypes from 'prop-types'
import { BsSearch } from 'react-icons/bs'
import { GiGuitarHead } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const Header = ({ search, setSearch }) => {
  return (
    <header style={{ backgroundColor: '#121212' }} className="p-2">
      <nav className="d-flex justify-content-around align-items-center">
        <Link
          to={'/'}
          target="_self"
          className="btn btn-sm btn-outline-secondary"
        >
          <GiGuitarHead className="fs-3" />
        </Link>
        <form className="d-flex">
          <input
            type="text"
            placeholder="type some song..."
            className="fst-italic form-control me-1 "
            style={{ fontSize: '14px' }}
            value={search}
            onChange={(e)=> setSearch(e.target.value) }
          />
          <button className="btn btn-sm btn-outline-secondary">
            <BsSearch className="fs-3" />
          </button>
        </form>
      </nav>
    </header>
  )
}

export default Header
Header.propTypes={
  search:propTypes.shape({})
}.isRequired
