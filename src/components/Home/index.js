import {Link} from 'react-router-dom'

import Header from '../Header'

import RegisterContext from '../../context/RegisterContext'

import {Container, Heading, Button, Para, Img, H} from './style'

const Home = props => {
  const onRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <RegisterContext.Consumer>
      {value => {
        const {isRegisterd, name, topic} = value
        console.log(isRegisterd)
        return (
          <Container>
            <Header />
            {isRegisterd === true ? (
              <H>
                <Heading>Hello {name}</Heading>
                <Para>Welcome to {topic}</Para>
                <Img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </H>
            ) : (
              <H>
                <Heading>Welcome To Meetup</Heading>
                <Para>Please register for the topic</Para>
                <Link to="/register">
                  <Button onClick={onRegister}>Register</Button>
                </Link>
                <Img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </H>
            )}
          </Container>
        )
      }}
    </RegisterContext.Consumer>
  )
}

export default Home
