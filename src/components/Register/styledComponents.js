import styled from 'styled-components'

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const RegisterCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 66px;
  padding-bottom: 66px;
  width: 70%;
`

export const RegisterImg = styled.img`
  width: 48%;
`

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 48%;
`

export const RegisterFormHeading = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-size: 36px;
  font-weight: bold;
`

export const FormLabel = styled.label`
  color: #7b8794;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
`

export const FormInput = styled.input`
  background-color: transparent;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  width: 100%;
  height: 40px;
  padding: 10px;
  color: #334155;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 28px;
`

export const SelectInput = styled.select`
  background-color: transparent;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  width: 100%;
  height: 40px;
  padding: 10px;
  color: #334155;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 28px;
`

export const SelectOption = styled.option`
  color: #334155;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
`

export const RegisterSubmitBtn = styled.button`
  background-color: #3b82f6;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  width: 140px;
  cursor: pointer;
  outline: none;
  margin-top: 10px;
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 6px;
`
