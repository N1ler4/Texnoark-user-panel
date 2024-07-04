import Cookies from "js-cookie"


export const saveAccessToken = (accessToken: string) => {
    Cookies.set("token", accessToken)
}
export const saveId = (id: any) => {
    Cookies.set("id", id)
}

export const getAccessToken = () => {
    return Cookies.get("token")
}

export const getId = () => {
    return Cookies.get("id")
}

export const removeAccessToken = () => {
    Cookies.remove("token")
}
