import React, { Component } from "react";
import Form from "./Form";
import API from "../utils/API";
import HouseDetail from "./HouseDetail";

class AddressContainer extends Component {
    state = {
        result: {},
        search: '',
        street: '',
        city: '',
        state: '',
        zip: ''

    };

    componentDidMount() {
        this.searchApi("151 Battle Green Dr, Rochester, NY, 14624");
    }

    searchApi = query => {
        API.search(query)
        .then(res => this.setState({ result: res.data}))
        .catch(err => console.log(err));
        // console.log(query);
    };
    

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        // const street = event.target.street;
        // const city = event.target.city;
        // const state = event.target.state;
        // const zip = event.target.zip;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        event.preventDefault();
        // if(!this.state.street || !this.state.city) {
        //     alert("Fill in the all the blanks")
        // } else if ((this.state.street || this.state.city || this.state.city || this.state.zip)){
        //     alert("success");
        // }
        this.searchApi(this.state.search);
    };
    
    render() {
        return (
        <div className="displayAdress">
            <h1>Address</h1>
            <Form 
           search={this.state.search}
           handleInputChange={this.handleInputChange}
           handleFormSubmit={this.handleFormSubmit}
           />
           <h2>API results?</h2>
           <HouseDetail 
           result={this.state.result}
           street={this.state.result.Street}
           city={this.state.result.City}
           state={this.state.result.State}
           zip={this.state.result.Zip}
           />
           
           
        </div>
   
        ) 
    }
}


export default AddressContainer;