export const openLoginModal = () => {
    return {
        type : 'OPEN_LOGIN_MODAL'
    }
}

export const closeLoginModal = () => {
    return {
        type : 'CLOSE_LOGIN_MODAL'
    }
}

export const currentLocation = (location) => {
    return {
        type : "STORE_CURRENT_LOCATION",
        payload : location
    }
}