import { getTokenCookie } from "../assets/constant/constants"

export const isUserAuthenticated = () => {
    if(getTokenCookie()){
        return true;
    }
    return false;
}

export const buildParams = (filters) => {

    const existingParams = new URLSearchParams(window.location.search);
    const newParams = new URLSearchParams();
  
    existingParams.forEach((value, key) => {
      newParams.append(key, value);
    });

    Object.entries(filters).forEach(([filterName, filterValue]) => {
      if (Array.isArray(filterValue)) {
        newParams.set(filterName, filterValue.join(','));
      } else {
        if(!filterValue) {
            newParams.delete(filterName)
        } else {
            newParams.set(filterName, filterValue);
        }
      }
    });

    console.log(newParams.toString())
  
    return newParams.toString();
  };
  