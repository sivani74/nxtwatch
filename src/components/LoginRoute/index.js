import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'
import {
  LoginMainContainer,
  LoginFormContainer,
  LoginLogoContainer,
  LoginLogo,
  InputContainer,
  InputEl,
  LabelEl,
  CheckboxContainer,
  CheckBoxEl,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    showErrorMsg: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickShowPassword = () => {
    const passwordEl = document.getElementById('password')

    if (passwordEl.type === 'password') {
      passwordEl.type = 'text'
    } else {
      passwordEl.type = 'password'
    }
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onSubmitLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    //  console.log(response)
    const data = await response.json()
    //  console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, showErrorMsg, errorMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext>
        {value => {
          const {isDarkTheme} = value
          const websiteLogo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginMainContainer darkMode={isDarkTheme}>
              <LoginFormContainer
                darkMode={isDarkTheme}
                onSubmit={this.onSubmitLogin}
              >
                <LoginLogoContainer>
                  <LoginLogo src={websiteLogo} alt="website logo" />
                </LoginLogoContainer>
                <InputContainer>
                  <LabelEl htmlFor="username" darkMode={isDarkTheme}>
                    USERNAME
                  </LabelEl>
                  <InputEl
                    type="text"
                    id="username"
                    onChange={this.onChangeUsername}
                    placeholder="Enter Username"
                    value={username}
                  />
                </InputContainer>
                <InputContainer>
                  <LabelEl htmlFor="password" darkMode={isDarkTheme}>
                    USERNAME
                  </LabelEl>
                  <InputEl
                    type="password"
                    id="password"
                    onChange={this.onChangePassword}
                    placeholder="Enter Password"
                    value={password}
                  />
                </InputContainer>
                <CheckboxContainer>
                  <CheckBoxEl
                    type="checkbox"
                    onClick={this.onClickShowPassword}
                    id="checkbox"
                  />
                  <LabelEl htmlFor="checkbox" darkMode={isDarkTheme}>
                    Show Password
                  </LabelEl>
                </CheckboxContainer>
                <LoginButton type="submit" onClick={this.onSubmitLogin}>
                  Login
                </LoginButton>
                {showErrorMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </LoginFormContainer>
            </LoginMainContainer>
          )
        }}
      </ThemeContext>
    )
  }
}

export default LoginRoute
