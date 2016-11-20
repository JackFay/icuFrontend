import React from "react"

export default class Image extends React.Component{
    
    render(){
        /* image refers to the file type of the image (ie .png, .jpg, etc) */
        const {image_id, date_time, image} = this.props
        const src = "http://localhost:8000/" + image_id + image;
        console.log(src)
        return (
            <div class="floated_img">
                <img src={src}/>
                <p>{date_time}</p>
            </div>
        )
    }
}