import axios from "axios";

export function get_state(){
    return function(dispatch){
        dispatch({type: "INIT"})
    }
}

export function fetchUser() {
  return function(dispatch) {
    axios.get("http://rest.learncode.academy/api/wstern/users")
    .then((response) => {
        dispatch({type: "FETCH_USER_FULFILLED", payload: response.data})
    })
    .catch((error) => {
        dispatch({type: "FETCH_USER_REJECTED", payload: error})
    })
  }
}

export function user_login(userData) {
  return function(dispatch) {
    axios.post('http://localhost:8000/api/login', userData)
    .then((response) => {
        if(response.data != "failure"){
            dispatch({type: "LOGIN_SUCCESS", payload: response.data})
        }else{
            dispatch({type: "LOGIN_FAILURE", payload: false})
        }
        
    })
    .catch((error) => {
        dispatch({type: "LOGIN_FAILURE", payload: error})
    })
  }
}

export function logout(){
    return function(dispatch){
        dispatch({type: "LOGOUT"})
    }
}

export function get_images(userId){
    return function(dispatch){
        /*Returns all rows and columns from images table where user_id = userId */
        var req = "http://localhost:8000/api/image/" + userId;
        axios.get(req)
        .then((response) => {
            dispatch({type: "GET_IMAGES", payload: response.data})
        })
        .catch((error) => {
            console.log(error)
        })
    }
}


