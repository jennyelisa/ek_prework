import React, { Component } from 'react'
import Form from './Form'
import API from '../utils/API'
import HouseDetail from './HouseDetail'

class AddressContainer extends Component {
  state = {
    result: {},
    search: '',
    street: '',
    city: '',
    state: '',
    zip: ''
    // street_name
    // zip_code
  }

  componentDidMount() {
    // this.searchApi("151 Battle Green Dr, Rochester, NY, 14624");
  }

  searchApi = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data.properties[0] }))
      .catch(err => console.log(err))
    // console.log(query);
    // console.log(this.searchApi);
  }

  handleInputChange = event => {
    const value = event.target.value
    const name = event.target.name
    // const street = event.target.street;
    // const city = event.target.city;
    // const state = event.target.state;
    // const zip = event.target.zip;
    this.setState({
      [name]: value
    })
  }
  handleFormSubmit = event => {
    event.preventDefault()
    // if(!this.state.street || !this.state.city) {
    //     alert("Fill in the all the blanks")
    // } else if ((this.state.street || this.state.city || this.state.city || this.state.zip)){
    //     alert("success");
    // }
    this.searchApi(this.state)
  }

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
          //    street={this.state.result.street}
          //    city={this.state.result.city}
          //    state={this.state.result.state}
          //    zip={this.state.result.zip_code}
        />

        {/* api needs street info to be concatenated, street_number, street_name, street_suffix./ zip_code....all of this under properties object into the addressess object */}
        {/* fixed ^^^ used a different url that was provided */}

        {/* if i remove .result from above then the info that is entered in the form immediatley display under api results */}
        {/* api is being reached/ number of trial hits have been decreasing but noting console logs */}
        {/* CORS? */}
        {/* installed chrome plugin */}
        {/* Now getting CORB----read up on this */}
      </div>
    )
  }
}

export default AddressContainer
