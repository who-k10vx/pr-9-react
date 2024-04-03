export const adduser = (data) => {
    return {
        type: "adduser",
        payload: data
    }
}
export const removeuser = (id) => {
    return {
        type: "removeuser",
        payload: id
    }
}