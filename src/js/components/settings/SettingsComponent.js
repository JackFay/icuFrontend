import React from "react"
import {connect} from "react-redux"
import {notification_change} from "../../actions/settingsActions"

@connect((store) => {
    return{
        notifications: store.settings.notifications,
    }
})
export default class SettingsComponent extends React.Component{
    
    constructor(){
        super()
        this.state = {
            start_time: null,
            end_time: null,
            notification_option_id: null
        }
    }
    
    componentWillMount(){
        this.setState({
            setting_id: this.props.setting_id,
            start_time: this.props.start_time,
            end_time: this.props.end_time,
            notification_option_id: this.props.notification_option_id
        })
    }
    
    notificationChange(){
        this.state.notification_option_id = parseInt(this.state.notification_option_id)
        this.props.dispatch(notification_change(this.state))
    }

    
    startTimeChange(e){
        this.state.start_time = e.target.value
        this.notificationChange()
    }
    
    endTimeChange(e){
        this.state.end_time = e.target.value
        this.notificationChange()
    }
    
    preferenceChange(e){
        this.state.notification_option_id = e.target.value
        this.notificationChange()
    }
    
    render(){
        const {start_time, end_time, notification_option_id} = this.state
        return (
            <div class="notification">
                <label for="start_time">Start: </label>
                <input type="time" name="start_time" defaultValue={start_time} onChange={this.startTimeChange.bind(this)}/>
                <label for="end_time">End: </label>
                <input type="time" name="end_time" defaultValue={end_time} onChange={this.endTimeChange.bind(this)}/>
                <label for="notification_preference">Preference: </label>
                <select name="notification_preference" defaultValue={notification_option_id} onChange={this.preferenceChange.bind(this)}>
                    <option value="1">Email</option>
                    <option value="2">Text</option>
                    <option value="3">Both</option>
                </select>
            </div>
        )
    }
}