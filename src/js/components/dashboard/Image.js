import React from "react"

export default class Image extends React.Component{
    
    render(){
        const {image_id, date_time, image} = this.props
        const src = "http://localhost:8000/" + image_id + image;
        return (
            <div class="floated_img">
                <img src={src}/>
                <p>{date_time}</p>
            </div>
        )
    }
}