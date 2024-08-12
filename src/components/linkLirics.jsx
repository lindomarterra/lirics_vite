import { Link } from "react-router-dom"
import propTypes from  'prop-types'

const LinkLirics = ({ id, title, link, artist }) => {
  return (
    <div>
      <Link
        to={link}
        target="_self"
        className="btn btn-sm btn-outline-light fs-5 m-2"
      >
        <span> {title} <span className="fs-6">({artist})</span>  </span>
      </Link>
    </div>
  )
}

export default LinkLirics
LinkLirics.propTypes={
  title: propTypes.any
}.isRequired
























