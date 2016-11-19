import React from "react"
import SettingsComponent from "../components/settings/SettingsComponent"
import {connect} from "react-redux"
import {get_notifications} from "../actions/settingsActions"
import {create_notification} from "../actions/settingsActions"
import {save_notifications} from "../actions/settingsActions"

@connect((store) => {
    return{
        notifications: store.settings.notifications,
        userId: store.user.userId
    }
})
export default class Settings extends React.Component{
    
    constructor(){
        super()
        this.state = {
            notifications: [],
            settingsComponents: []
        }
    }
    
    componentWillMount(){
        this.props.dispatch(get_notifications(this.props.userId))
    }
    
    
    addSetting(){
        this.props.dispatch(create_notification())        
    }
    
    onSave(settings){
        console.log(settings)
        this.props.dispatch(save_notifications(settings))
    }
    
    notificationChange(e){
        console.log(e)
    }
    
    render(){
        const SettingsComponents = this.props.notifications.map(notification => {
            return <SettingsComponent key={notification.setting_id}{...notification} onChange={this.notificationChange.bind(this)}/>
        })
        return(
            <div class="MainContent">
                <section class="FirstSection">
                  <div class="MarketingContainer">
                    <div class="centerDiv">
                        <div class="notificationRule"> Take control of your home security by adding a notification rule.<br/> Provide a <b>start time</b>, <b>end time</b>, and <b>notification preference</b>. We'll take care of the rest!<br/>
                        {SettingsComponents}
                        <button id="addButton" class="ui-button ui-widget ui-corner-all" onClick={this.addSetting.bind(this)}><b>Add </b></button>
                        <button id="saveButton" class="ui-button ui-widget ui-corner-all" onClick={() => this.onSave(SettingsComponents.map(setting => {return setting.props}))}><b>Save</b></button>
                        </div>
                        <div class="notificationRule" id="notificationContainer">
                        </div>
                    </div>
                  </div>
                </section>
            </div>
        )
    }
}