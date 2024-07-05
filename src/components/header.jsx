import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const [lirics, setLirics] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!lirics) return  alert('please type some lirics in the field!')
    if (
      lirics === 'lifeonmars' ||
      lirics === 'ziggystardust' ||
      lirics === 'imagine' ||
      lirics === 'zombie' ||
      lirics === 'thekillingmon' ||
      lirics === 'loveismagick' || 
      lirics === 'starman'
    ) {
      navigate(`/${lirics}`)
    } else {
        alert('not found!')
    }
    setLirics('')
  }

  return (
    <nav style={{ backgroundColor: '#121212' }} className="navbar py-2">
      <div className="container">
        <div className="dropdown-menu-end">
          <div
            style={{ color: '#ffc107', cursor: 'pointer' }}
            className="dropdown-toggle fw-bolder text-uppercase "
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Lirics
          </div>
          <ul
            style={{ backgroundColor: 'rgba(255, 166, 0, 0.699)' }}
            className="dropdown-menu p-0"
          >
            <li>
              <Link to="/lifeonmars" target="_self" className="dropdown-item">
                Life on Mars?
              </Link>
            </li>
            <li>
              <Link
                to="/ziggystardust"
                target="_self"
                className="dropdown-item"
              >
                Ziggy Stardust
              </Link>
            </li>
            <li>
              <Link to="/imagine" target="_self" className="dropdown-item">
                Imagine
              </Link>
            </li>
            <li>
              <Link to="/loveismagick" target="_self" className="dropdown-item">
                Love is Magick
              </Link>
            </li>
            <li>
              <Link to="/zombie" target="_self" className="dropdown-item">
                Zombie
              </Link>
            </li>
            <li>
              <Link
                to="/thekillingmon"
                target="_self"
                className="dropdown-item"
              >
                The Killing Mon
              </Link>
            </li>
            <li>
              <Link
                to="/starman"
                target="_self"
                className="dropdown-item"
              >
                Starman
              </Link>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="d-flex" role="search">
          <input
            type="search"
            style={{ fontSize: '1rem' }}
            className="form-control me-2"
            placeholder="search"
            onChange={(e) => setLirics(e.target.value)}
            value={lirics}
          />

          <button type="submit" className="btn btn-outline-warning">
            <BsSearch className="d-flex  fw-bolder" />
          </button>
        </form>
      </div>
    </nav>
  )
}

export default Header
