import {Component} from 'react'

import MyContext from '../../context/MyContext'

import Header from '../Header'

import {
  RegisterContainer,
  RegisterCard,
  RegisterImg,
  RegisterForm,
  RegisterFormHeading,
  FormLabel,
  FormInput,
  SelectInput,
  SelectOption,
  RegisterSubmitBtn,
  ErrorMsg,
} from './styledComponents'

class Register extends Component {
  state = {userInput: '', selectValue: '', isErrorOccured: false}

  componentDidMount() {
    const {topicsList} = this.props
    this.setState({selectValue: topicsList[0].displayText})
  }

  render() {
    const {userInput, selectValue, isErrorOccured} = this.state
    console.log(isErrorOccured)
    const {topicsList} = this.props
    return (
      <MyContext.Consumer>
        {value => {
          const {toRegister, getUsername, getTopics} = value

          const onChangeUsername = event => {
            this.setState({userInput: event.target.value})
          }

          const onChangeSelect = event => {
            const findSelectValue = topicsList.find(
              eachItem => eachItem.id === event.target.value,
            )
            this.setState({selectValue: findSelectValue.displayText})
          }

          const onSubmitForm = event => {
            const {history} = this.props
            event.preventDefault()
            getUsername(userInput)
            getTopics(selectValue)
            toRegister()
            if (userInput.length === 0) {
              this.setState({isErrorOccured: true})
            } else {
              history.replace('/')
            }
          }

          return (
            <RegisterContainer>
              <Header />
              <RegisterCard>
                <RegisterImg
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />
                <RegisterForm onSubmit={onSubmitForm}>
                  <RegisterFormHeading>Let us join</RegisterFormHeading>
                  <FormLabel htmlFor="name">NAME</FormLabel>
                  <FormInput
                    onChange={onChangeUsername}
                    value={userInput}
                    id="name"
                    type="text"
                    placeholder="Your name"
                  />
                  <FormLabel htmlFor="select">TOPICS</FormLabel>
                  <SelectInput onChange={onChangeSelect} id="select">
                    {topicsList.map(eachItem => {
                      const {id, displayText} = eachItem

                      return (
                        <SelectOption key={id} value={id}>
                          {displayText}
                        </SelectOption>
                      )
                    })}
                  </SelectInput>
                  <RegisterSubmitBtn type="submit">
                    Register Now
                  </RegisterSubmitBtn>
                  {isErrorOccured && (
                    <ErrorMsg>Please enter your name</ErrorMsg>
                  )}
                </RegisterForm>
              </RegisterCard>
            </RegisterContainer>
          )
        }}
      </MyContext.Consumer>
    )
  }
}

export default Register
