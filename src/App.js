import {Switch, Route} from 'react-router-dom'

import {Component} from 'react'

import MyContext from './context/MyContext'

import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'

import './App.css'

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

class App extends Component {
  state = {isRegistered: false, username: '', topics: ''}

  getTopics = value => {
    console.log(value)
    this.setState({topics: value})
  }

  getUsername = value => {
    this.setState({username: value})
  }

  toRegister = () => {
    this.setState({isRegistered: true})
  }

  render() {
    const {isRegistered, username, topics} = this.state
    return (
      <MyContext.Provider
        value={{
          username,
          topics,
          isRegistered,
          toRegister: this.toRegister,
          getUsername: this.getUsername,
          getTopics: this.getTopics,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/register"
            component={props => <Register {...props} topicsList={topicsList} />}
          />
          <Route component={NotFound} />
        </Switch>
      </MyContext.Provider>
    )
  }
}

export default App
