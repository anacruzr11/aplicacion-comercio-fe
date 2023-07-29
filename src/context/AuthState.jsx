import { useReducer } from "react"
import AuthContext from "./AuthContext" 
import authReducer from "./AuthReducer"
import PropTypes from "prop-types"

import { loginService, registerService, renewTokenService } from "../services/authServices"

const initialState = {
    user: {},
}

const AuthState = ({ children }) => {

    const [globalState, dispatch] = useReducer(authReducer, initialState)

    const iniciarSesion = async (form) => {
        try {
            const resp = await loginService(form)
            
            dispatch({
                type: "INICIAR_SESION",
                payload: resp.data.data
            })
            
            localStorage.setItem("token", resp.data.token)
      
          } catch (error) {
            console.log(error.response.data)
          }
    };

    const registarUsuario = async (form) => {
      try {
          const resp = await registerService(form)
          
          dispatch({
              type: "INICIAR_SESION",
              payload: resp.data.data
          })
          
          localStorage.setItem("token", resp.data.token)
    
        } catch (error) {
          console.log(error.response.data)
        }
  };

    const renewToken = async () => {
      try {

        const resp = await renewTokenService

      } catch (error) {
        
      }
    }

    const logout = () => {
      dispatch({
        type: "LOGOUT",
        payload: null,
      })

      localStorage.removeItem("token")

    }

  return (
    <AuthContext.Provider value={{user: globalState.user, iniciarSesion, registarUsuario, logout}}>
        {children}
    </AuthContext.Provider>
  )
}

AuthState.propTypes = {
    children: PropTypes.node,
}

export default AuthState
