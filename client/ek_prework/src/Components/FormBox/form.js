import React from "react";





// class addressInput extends React.Component {
    
//     handleSubmit = (event) => {
//         event.preventDefault();
//         console.log(event.target.street.value, event.target.city.value, event.target.state.value, event.target.zipCode.value)
//     }
// }

function grabAddie() {
    var street = document.addieForm.street.value;
    var city = document.addieForm.city.value;
    var state =document.addieForm.state.value;
    var zipCode = document.addieForm.zipCode.value;
console.log(street, city, state,zipCode);
}


function Form(props) {
    return (
        <div>
             <form className="addieForm">
                <div className="form-group">
                    <label htmlFor="address">Street Address</label>
                    <input
                    onChange={props.handleInputChange}
                    value={ props.street }
                    name="street"
                    type="text"
                    className="form-control"
                    placeholder="Enter street address"
                    id="street"
                    />
                    <label htmlFor="city">City</label>
                    <input
                    onChange={props.handleInputChange}
                    value={ props.city }
                    name="city"
                    type="text"
                    className="form-control"
                    placeholder="Enter city"
                    id="city"
                    />
                     <label htmlFor="state">State</label>
                    <input
                    onChange={props.handleInputChange}
                    value={ props.state }
                    name="state"
                    type="text"
                    className="form-control"
                    placeholder="Enter state"
                    id="state"
                    />
                    <label htmlFor="zipCode">Zip Code</label>
                    <input
                    onChange={props.handleInputChange}
                    value={ props.zipCode }
                    name="zip"
                    type="integer"
                    className="form-control"
                    placeholder="Enter zip code"
                    id="zip"
                    />

<button type="submit" onClick={ grabAddie } className="btn btn-success">Submit</button>
                </div>
            </form>
               
            </div> 
    )
}

export default Form; 