import { AppState, Auth0Provider, User } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useAuth0} from "@auth0/auth0-react";

type Props = {
    children: React.ReactNode
}

const Auth0ProviderWiithNavigate = ({children}:Props) => {
    
    const navigate = useNavigate()
    const domain = import.meta.env.VITE_AUTH0_DOMAIN
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID
    const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL
    const audience = import.meta.env.VITE_AUTH0_AUDIENCE
   
    if(!domain || !clientId || !redirectUri || !audience){
        throw new Error("unable to initialize auth")
    }

    const onRedirectCallback = async (appState?: AppState, user?: User) => {
        navigate("/auth-callback") // navigate is used here because we cannot use AuthO directly here since it is not wrapped inside context
    }

    return (
        <Auth0Provider domain={domain} clientId={clientId} authorizationParams={{
            redirect_uri: redirectUri,
            audience 
        }} onRedirectCallback={onRedirectCallback}>
            {children}
        </Auth0Provider>
    )
}

export default Auth0ProviderWiithNavigate