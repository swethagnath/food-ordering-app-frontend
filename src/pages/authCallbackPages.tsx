import { useCreateMyUser } from "../api/MyUserApi";
import { useAuth0} from "@auth0/auth0-react";
import {useEffect,  useRef} from "react"
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
    const navigate = useNavigate()
    const {user} = useAuth0()
    const {createUser} = useCreateMyUser()

    const hasCreatedUser = useRef(false) //use ref will persist the value all across , and then whenever there is change in the value data willl not get re render like usestate

    useEffect(() => {
        if(user?.sub && user?.email){
            createUser({auth0Id: user.sub, email: user.email}) // calls the api backend and create the user
            hasCreatedUser.current = true // becoz of useRef this will not be called even when state gets updated, useRef will persist everywhere...
        }
        navigate('/')
    },[createUser, navigate, user])

    return <>Loading....</>
} 


export default AuthCallbackPage