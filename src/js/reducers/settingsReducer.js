export default function reducer(state={
    notifications: [],
    user_id: null
  }, action) {

    switch (action.type) {
      case "GET_NOTIFICATIONS":{
            console.log(action.payload)
            return{
                ...state,
                notifications: action.payload,
                user_id: action.payload.user_id
            }
        }
        case "CREATE_NOTIFICATION":{
            return{
                ...state,
                notifications: state.notifications.concat({setting_id: Date.now(), start_time: null, end_time: null, notification_option_id: null, new: true, user_id: state.user_id})
            }
        }
        case "SAVE_NOTIFICATIONS":{
            
        }
        case "NOTIFICATION_CHANGE":{
            const updatedNotifications = state.notifications.map(setting => {
                if(setting.setting_id == action.payload.setting_id){
                    setting.notification_option_id = action.payload.notification_option_id
                    setting.start_time = action.payload.start_time
                    setting.end_time = action.payload.end_time
                    return setting
                }else{
                    return setting
                }
            })
            return{
                ...state,
                notifications: updatedNotifications
            }
        }
    }

    return state
}
