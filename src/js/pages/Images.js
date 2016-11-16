import React from "react"
import {connect} from "react-redux"
import {hashHistory} from "react-router"
import {get_images} from "../actions/userActions"
import LoginComponent from "../components/login/LoginComponent"
import Image from "../components/dashboard/Image"
@connect((store) => {
  return {
    images: store.user.images,
    userId: store.user.userId,
    loggedIn: store.user.loggedIn
  };
})
export default class Images extends React.Component{
    
    componentWillMount(){
        if(!this.props.loggedIn){
            hashHistory.push('dashboard')
            return;
        }
        this.props.dispatch(get_images(this.props.userId))
    }
    
    render(){
        console.log(this.props.images)
        const {images} = this.props;
        const ImageComponents = images.map((image) => {
            return <Image key={image.image_id}{...image} />
        })
        return(
            <div class="MainContent">
                <section class="FirstSection">
                    <div class="MarketingContainer">
                        {ImageComponents}
                    </div>
                </section>
            </div>
        )
        
    }
}