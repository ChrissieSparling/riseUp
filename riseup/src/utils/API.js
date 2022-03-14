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
    //USER ROUTES
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
    signUp: (newUser)=>{
      return fetch(`${BASEURL}/users/new`,{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          username: newUser.username,
          password: newUser.password,
          role: newUser.role,
          email: newUser.email,
          birthday: parseInt(newUser.birthday.split('-').reverse().join('-')),
          zipCode: newUser.zipCode,
        }),
      })
        .then((data) => data.json())
    },
    getUser: (userId)=>{
      return fetch(`${BASEURL}/users/${userId}`, {
        method: "GET",
        headers: {
            "x-access-token": localStorage.getItem("token"),
        },
    })
        .then((response) => response.json())
    },
    editUser: (userId, editedUser)=>{
      return fetch(`${BASEURL}/users/${userId}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('token'),
        },
        body: JSON.stringify({
          firstName: editedUser?.firstName,
          lastName: editedUser?.lastName,
          username: editedUser?.username,
          password: editedUser?.password,
          role: editedUser?.role,
          email: editedUser?.email,
          birthday: parseInt(editedUser?.birthday.split('-').reverse().join('-')),
          zipCode: editedUser?.zipCode,
        }),
      })
      .then((data) => data.json())
    },
    deleteUser: (userId)=>{
      return fetch(`${BASEURL}/users/${userId}`, {
        method: "DELETE",
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
        .then((response) => response.json())
    },
    //Affirmation GET
    getAff: (affId)=>{
      return fetch(`${BASEURL}/affirmations/${affId}`, {
        method: "GET",
    })
        .then((response) => response.json())
    },
    //Inspiration GET
    getInsp: (inspId)=>{
      return fetch(`${BASEURL}/inspirations/${inspId}`, {
        method: "GET",
    })
        .then((response) => response.json())
    },
    //Motivation GET
    getMotiv: (motivId)=>{
      return fetch(`${BASEURL}/motivations/${motivId}`, {
        method: "GET",
    })
        .then((response) => response.json())
    },
    //Philosophy GET
    getPhil: (philId)=>{
      return fetch(`${BASEURL}/philosophy/${philId}`, {
        method: "GET",
    })
        .then((response) => response.json())
    },
    //Quote GET
    getQuote: (quoteId)=>{
      return fetch(`${BASEURL}/quotes/${quoteId}`, {
        method: "GET",
    })
        .then((response) => response.json())
    },
    //POST ROUTES
    getPost: (postId)=>{
      return fetch(`${BASEURL}/posts/${postId}`, {
        method: "GET",
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((response) => response.json())
    },
    getTopicPosts: (topic)=>{
      return fetch(`${BASEURL}/posts/forum/${topic}`,{
        method: 'GET',
        headers: {
            'x-access-token': localStorage.getItem('token'),
        },
      })
      .then(response => response.json())
    },
    savePost: (newPost)=>{
      return fetch(`${BASEURL}/posts/new`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': localStorage.getItem('token'),
        },
        body: JSON.stringify({
          topic: newPost.topic,
          title: newPost.title,
          body: newPost.body
        }),
      })
      .then((data) => data.json())
    },
    editPost: (postId, editedPost)=>{
      return fetch(`${BASEURL}/posts/${postId}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('token'),
        },
        body: JSON.stringify({
            // topic: editedPost.topic,
            title: editedPost.title,
            body: editedPost.body
         }),
      })
      .then((data) => data.json())
    },
    deletePost: (postId)=>{
      return fetch(`${BASEURL}/posts/${postId}`, {
        method: "DELETE",
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
        .then((response) => response.json())
    },
        //COMMENT ROUTES
    getComment: (commentId)=>{
      return fetch(`${BASEURL}/comments/${commentId}`, {
        method: "GET",
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((response) => response.json())
    },
    saveComment: (postId, newComment, username)=>{
      return fetch(`${BASEURL}/posts/${postId}/comments/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({
          body: newComment.body,
          author: username,
        }),
      })
        .then((data) => data.json())
    },
    editComment: (commentId, editedComment) =>{
      return fetch(`${BASEURL}/comments/${commentId}`,{
          method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('token'),
        },
        body: JSON.stringify({
            // topic: editedPost.topic,
            body: editedComment.body
         }),
      })
      .then((data) => data.json())
    },
    deleteComment: (commentId)=>{
      return fetch(`${BASEURL}/comments/${commentId}`, {
        method: "DELETE",
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
        .then((response) => response.json())
    }
    // getTanks:()=>{
    //     return fetch(`${BASEURL}/api/tanks`)
    //     .then(res => res.json())
    // },
    // getSingleTank:id=>{
    //     return  fetch(`${BASEURL}/api/tanks/${id}`).then(res=>res.json())
    // }
}

export default API;