import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import Register from './components/Register'
import Home from './components/Home'
import NotFound from './components/NotFound'

import RegisterContext from './context/RegisterContext'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
class App extends Component {
  state = {
    name: '',
    topic: 'Arts and Culture',
    isRegisterd: false,
    showError: false,
  }

  changeName = name => {
    this.setState({name})
  }

  changeTopic = topic => {
    this.setState({topic})
  }

  registerName = () => {
    this.setState({isRegisterd: true})
  }

  updateError = () => {
    this.setState({showError: true})
  }

  render() {
    const {name, topic, isRegisterd, showError} = this.state
    return (
      <RegisterContext.Provider
        value={{
          name,
          topic,
          isRegisterd,
          showError,
          changeName: this.changeName,
          changeTopic: this.changeTopic,
          registerName: this.registerName,
          updateError: this.updateError,
        }}
      >
        <Switch>
          <Route exact Path="/" Component={Home} />
          <Route exact Path="/register" Component={Register} />
          <NotFound />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
