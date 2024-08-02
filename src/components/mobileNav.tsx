import { Button } from './ui/button'
import { CircleUserRound, Menu } from "lucide-react";
import {Sheet, SheetDescription, SheetTrigger, SheetContent, SheetTitle, } from './ui/sheet'
import { useAuth0 } from '@auth0/auth0-react';
import MobileNavLinks from './MobileNavLinks'

const MobileNav = () => {

    const {isAuthenticated, loginWithRedirect, user} = useAuth0()
    
    return( <Sheet>
        <SheetTrigger>
            <Menu className="text-orange-500"/>
        </SheetTrigger>
        <SheetContent className="space-y-3">
            <SheetTitle>
                <span>Welcome to MernEats.com</span>
                {isAuthenticated ? <span className="flex items-center gap-2 font-bold">
                    <CircleUserRound className="text-orange-500" />
                    {user?.email}
                </span> : (<span>Welcome to MEREats.com!</span>) }
            </SheetTitle>
            <SheetDescription className="flex flex-col gap-4">
                {
                    isAuthenticated ? (<MobileNavLinks/>) : (<Button onClick={() => loginWithRedirect()} className="flex-1 font-bold bg-orange-500">Log In</Button>)
                }
                
            </SheetDescription>
        </SheetContent>
    </Sheet>)
}

export default MobileNav