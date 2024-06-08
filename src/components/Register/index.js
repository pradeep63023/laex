import Header from '../Header'

import RegisterContext from '../../context/RegisterContext'

import {
  MainCon,
  RegisterImgCon,
  Form,
  Heading,
  InputCon,
  Label,
  Input,
  Select,
  RegButton,
} from './style'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        name,
        topic,
        changeName,
        changeTopic,
        showError,
        registerName,
        updateError,
      } = value

      const submitRegis = event => {
        event.preventDefault()

        if ((name !== '', topic !== '')) {
          const {history} = props
          history.replace('/')
          registerName()
        } else {
          updateError()
        }
      }

      const onChangeName = event => {
        changeName(event.target.value)
      }

      const onChangeTopic = event => {
        changeTopic(event.target.value)
      }

      return (
        <div>
          <MainCon>
            <Header />
            <RegisterImgCon>
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
            </RegisterImgCon>
            <Form onSubmit={submitRegis}>
              <Heading>Let us join</Heading>
              <InputCon>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  placeholder="Your name"
                  onChange={onChangeName}
                />
              </InputCon>
              <InputCon>
                <Label htmlFor="topic">Topics</Label>
                <Select
                  id="name"
                  type="text"
                  value={topic}
                  onChange={onChangeTopic}
                >
                  {topicsList.map(each => (
                    <option value={each.id} key={each.id}>
                      {each.displayText}
                    </option>
                  ))}
                </Select>
              </InputCon>
              <RegButton type="submit">RegisterNow</RegButton>
              {showError === true ? <p>Please enter your name</p> : ''}
            </Form>
          </MainCon>
        </div>
      )
    }}
  </RegisterContext.Consumer>
)

export default Register
