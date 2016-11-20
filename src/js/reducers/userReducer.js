export default function reducer(state={
    user: {
      id: null,
      name: null,
      age: null,
    },
    fetching: false,
    fetched: false,
    error: null,
    loggedIn: false,
    userId: null,
    images: [],
    notifications: [],
  }, action) {

    switch (action.type) {
      case "INIT":{
              //console.log(JSON.parse(localStorage.getItem('user')))
              //return JSON.parse(JSON.parse(localStorage.getItem('user')))
          
      }   
      case "FETCH_USER": {
        return {...state, fetching: true}
      }
      case "FETCH_USER_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_USER_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          user: action.payload[0],
        }
      }
        case "LOGIN_SUCCESS":{
//            localStorage.setItem('user', JSON.stringify({
//                ...state,
//                loggedIn: true,
//                userId: action.payload.user_id
//            }))
            return{
                ...state,
                loggedIn: true,
                userId: action.payload.user_id
            }
        }
        case "LOGOUT":{
//            localStorage.setItem('user', JSON.stringify({
//                ...state,
//                user: {
//                  id: null,
//                  name: null,
//                  age: null,
//                },
//                fetching: false,
//                fetched: false,
//                error: null,
//                loggedIn: false,
//                userId: null,
//                images: [],
//                notifications: []
//            }))
            
            return{
                ...state,
                user: {
                  id: null,
                  name: null,
                  age: null,
                },
                fetching: false,
                fetched: false,
                error: null,
                loggedIn: false,
                userId: null,
                images: [],
                notifications: []
            }
        }
        case "GET_IMAGES":{
            console.log(action.payload)
            return{
                ...state,
                images: action.payload
            }
        }
    }

    return state
}
