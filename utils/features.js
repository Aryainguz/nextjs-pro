export const getAllUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    if(!res.ok) {
        throw new Error(res.statusText)
    }       
    const users = await res.json()
    console.log(users)
    return users
}