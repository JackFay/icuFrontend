import React from "react";

export default class Settings extends React.Component{
    
    
    render(){
        return(
            <div class="MainContent">
                <section class="FirstSection">
                  <div class="MarketingContainer">
                    <div class="centerDiv">
                        <div class="notificationRule"> Take control of your home security by adding a notification rule.<br/> Provide a <b>start time</b>, <b>end time</b>, and <b>notification preference</b>. We'll take care of the rest!<br/>
                        <button id="addButton" class="ui-button ui-widget ui-corner-all"><b>Add </b></button>
                        <button id="saveButton" class="ui-button ui-widget ui-corner-all"><b>Save</b></button>
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