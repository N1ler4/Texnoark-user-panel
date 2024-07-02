import Cookies from "js-cookie"


export const saveAccessToken = (accessToken: string) => {
    Cookies.set("token", accessToken)
}

export const getAccessToken = () => {
    return Cookies.get("token")
}

export const removeAccessToken = () => {
    Cookies.remove("token")
}
