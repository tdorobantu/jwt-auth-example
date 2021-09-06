export let authToken: string = "NO-TOKEN"

export const updateAuthToken = (newAuthToken: string = ""): string => {
    authToken = newAuthToken
    return authToken
}