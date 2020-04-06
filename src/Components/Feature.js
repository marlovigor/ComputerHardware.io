import React from "react"


class Feature extends React.Component {
    render(){
        return(
            <div className="features_Styles">
                {this.props.features}
            </div>
        )
    }    
}

export default Feature