import React from 'react'

const MeetUpContext = React.createContext({
  isRegistered: false,
  toRegister: () => {},
  username: '',
  getUsername: () => {},
  topics: '',
  getTopics: () => {},
})

export default MeetUpContext
