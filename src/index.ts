import fetchUser from "./githubAPI"

(async () => {
    const userData = await fetchUser("kbinu42")
    
    document.querySelector("h1").innerHTML = JSON.stringify(userData)
})()