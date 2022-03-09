const BASEURL="http://localhost:3005"

// const BASEURL="https://joes-fishies-back.herokuapp.com"

const API = {
    getTokenData: (token)=>{
        return fetch(`${BASEURL}/users/gettokendata`, {
            headers: {
              authorization: `Bearer ${token}`
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
    // getTanks:()=>{
    //     return fetch(`${BASEURL}/api/tanks`)
    //     .then(res => res.json())
    // },
    // getSingleTank:id=>{
    //     return  fetch(`${BASEURL}/api/tanks/${id}`).then(res=>res.json())
    // }
}

export default API;