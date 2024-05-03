import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const HomeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 90%;
  padding-top: 66px;
  padding-bottom: 66px;
`

export const UnRegisHeading = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-size: 42px;
  font-weight: bold;
`

export const UnRegisDesp = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 22px;
  margin-top: 0px;
`

export const RegisterBtn = styled.button`
  background-color: #3b82f6;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  height: 40px;
  width: 120px;
  cursor: pointer;
  outline: none;
  margin-top: 12px;
  margin-bottom: 56px;
`

export const MeetupImg = styled.img`
  width: 90%;
`

export const LinkRoute = styled(Link)`
  text-decoration: none;
`

export const RegisHeading = styled.h1`
  color: #2563eb;
  font-family: 'Roboto';
  font-size: 56px;
  font-weight: bold;
  margin-bottom: 8px;
`

export const RegisDesp = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-top: 0px;
  margin-bottom: 28px;
`
