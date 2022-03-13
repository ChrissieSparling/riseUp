// const BASEURL="http://localhost:3005"
const BASEURL="https://rise-up-back-end.herokuapp.com"

const API = {
    getTokenData: (token)=>{
        return fetch(`${BASEURL}/users/gettokendata`, {
            headers: {
              'x-access-token': token,
            }
          })
            .then(res => res.json())
    },
    login: (username,password)=>{
       return fetch(`${BASEURL}/users/login`, {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
    },
    // cs- hopfully routes grabbing the apis 
    // getAffirmationData: (affirmation)=>{
    //     return fetch(`${BASEURL}/AffirmationData`)
    //     .then(res => res.json())
    // },
    // getSingleAffirmation:(Affirmation)=>{
    //     return  fetch(`${BASEURL}/Affirmation`).then(res=>res.json())
    // }
}

export default API;