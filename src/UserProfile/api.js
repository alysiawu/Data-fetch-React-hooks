export const fetchProfile = async id => {
    const response = await fetch(`https://api.example.com/profile/${id}`)
    const jsonData = response.json()
    if (response.ok) {
        throw new HttpError(jsonData, response.statusCode)
    }
    return jsonData
}

// making the synchronous function to return an async function
// modify to const fetchProfile = id => async () => {
// use closure to allow async function acccess id
// }

// one the important of closure in javascript is that, child function can access the function of their ancestor
