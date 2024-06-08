import {Link} from 'react-router-dom'

import {NavCon, Img} from './style'

const Header = () => (
  <NavCon>
    <Link to="/" />
    <Img
      src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
      alt="website logo"
    />
  </NavCon>
)

export default Header
