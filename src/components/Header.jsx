import propTypes from "prop-types"

const Header = ({ title }) => {
  return (
    <header className="row col">
      <h1>{title}</h1>
    </header>
  )
}

Header.propTypes = {
    title: propTypes.string
}

export default Header