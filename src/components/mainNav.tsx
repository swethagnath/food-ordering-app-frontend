import { Button } from "./ui/button"
import {useAuth0} from "@auth0/auth0-react"
import UserNameMenu from '../components/UsernameMenu'

const MainNav = () => {
    const {loginWithRedirect, isAuthenticated } = useAuth0()

    return(
        <span className="flex items-center space-x-2">
            {isAuthenticated ? <UserNameMenu /> : (
                 <Button onClick={async () => await loginWithRedirect()} variant="ghost" className="font-bold hover:text-orange-500 hover:bg-white">
                    Log In
                </Button>
            )}
        </span>
       
    )
}

export default MainNav