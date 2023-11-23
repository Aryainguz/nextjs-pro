export const getAllUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
    console.log(users)
    return users
}