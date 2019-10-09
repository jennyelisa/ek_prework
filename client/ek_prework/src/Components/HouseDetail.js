import React from "react";

function HouseDetail(props) {
    return (
        <div className="addieInfo">
            <h3>Street: {props.street}</h3>
            <h3>City: {props.city}</h3>
            <h3>State: {props.state}</h3>
            <h3>Zip Code: {props.zip}</h3>
        </div>
    );
}

export default HouseDetail; 