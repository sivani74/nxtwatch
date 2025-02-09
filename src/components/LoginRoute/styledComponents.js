import styled from 'styled-components'

export const LoginMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.darkMode ? '#181818' : '#f9f9f9')};
`
export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 35%;
  min-height: 60vh;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0px 0px 1px 1px #ffffff;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#ffffff')};
  @media screen and (max-width: 575px) {
    width: 80%;
  }
`

export const LoginLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  margin-bottom: 50px;
`
export const LoginLogo = styled.img`
  width: 27%;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  padding: 10px;
`

export const InputEl = styled.input`
  border-radius: 5px;
  height: 45px;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #94a3b8;
`

export const LabelEl = styled.label`
  color: ${props => (props.darkMode ? '#ffffff' : '#0f0f0f')};
`

export const CheckboxContainer = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 10px;
`

export const CheckBoxEl = styled.input`
  margin-top: 5px;
`

export const LoginButton = styled.button`
  margin-top: 50px;
  border: none;
  border-radius: 5px;
  background-color: #4f46e5;
  padding: 10px;
  color: #ffffff;
  cursor: ponter;
  text-align: center;
`
export const ErrorMsg = styled.p`
  color: red;
`
