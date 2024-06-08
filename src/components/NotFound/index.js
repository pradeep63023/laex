import {Component} from 'react'

import {NotFoundCon, Img, NotFoundH, NotFoundP} from './style'

class NotFound extends Component {
  render() {
    return (
      <NotFoundCon>
        <Img
          src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
          alt="not found"
        />
        <NotFoundH>Page Not Found</NotFoundH>
        <NotFoundP>
          We are sorry,the page you are requested could not be found.
        </NotFoundP>
      </NotFoundCon>
    )
  }
}

export default NotFound
