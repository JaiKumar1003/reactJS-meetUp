import {Component} from 'react'

import MyContext from '../../context/MyContext'

import Header from '../Header'

import {
  HomeContainer,
  HomeCard,
  UnRegisHeading,
  UnRegisDesp,
  RegisterBtn,
  MeetupImg,
  LinkRoute,
  RegisHeading,
  RegisDesp,
} from './styledComponents'

class Home extends Component {
  renderUnRegisteredView = () => (
    <>
      <UnRegisHeading>Welcome to Meetup</UnRegisHeading>
      <UnRegisDesp>Please register for the topic</UnRegisDesp>
      <LinkRoute to="/register">
        <RegisterBtn type="button">Register</RegisterBtn>
      </LinkRoute>
      <MeetupImg
        src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        alt="meetup"
      />
    </>
  )

  renderRegisteredView = (name, topics) => (
    <>
      <RegisHeading>{`Hello ${name}`}</RegisHeading>
      <RegisDesp>{`Welcome to ${topics}`}</RegisDesp>
      <MeetupImg
        src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        alt="meetup"
      />
    </>
  )

  render() {
    return (
      <MyContext.Consumer>
        {value => {
          const {isRegistered, username, topics} = value

          return (
            <HomeContainer>
              <Header />
              <HomeCard>
                {isRegistered
                  ? this.renderRegisteredView(username, topics)
                  : this.renderUnRegisteredView()}
              </HomeCard>
            </HomeContainer>
          )
        }}
      </MyContext.Consumer>
    )
  }
}

export default Home
