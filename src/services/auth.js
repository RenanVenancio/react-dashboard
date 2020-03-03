const Auth = {
    authenticated: window.localStorage.getItem('@sgo-token') ? true : false
}

export default Auth
