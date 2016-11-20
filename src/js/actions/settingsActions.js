import axios from "axios";

export function get_notifications(userId){
    return function(dispatch){
        var req = "http://localhost:8000/api/notification_settings/" + userId
        axios.get(req)
        .then((response) => {
            response.data = response.data.map(setting => {
                return {
                    ...setting,
                    new: false,
                }
            })
            response.data.user_id = userId
            dispatch({type: "GET_NOTIFICATIONS", payload: response.data})
        })
        .catch(error => {
            console.log("Error connecting to db " + error)
        })
    }
}

export function create_notification(){
    return function(dispatch){
        dispatch({type: "CREATE_NOTIFICATION"})
    }
}

export function save_notifications(notifications){
    return function(dispatch){
        axios.post("http://localhost:8000/api/notification_settings", notifications)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
        dispatch({type: "SAVE_NOTIFICATIONS", payload: notifications})
    }
}

export function notification_change(settings){
    return function(dispatch){
        dispatch({type: "NOTIFICATION_CHANGE", payload: settings})
    }
}
