import { getTokenCookie } from "../assets/constant/constants"

export const isUserAuthenticated = () => {
    if(getTokenCookie()){
        return true;
    }
    return false;
}

