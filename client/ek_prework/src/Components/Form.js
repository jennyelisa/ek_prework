import React from "react";

function Form(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="street">Street</label>
        <input
          onChange={props.handleInputChange}
          value={props.street}
          name="street"
          type="text"
          className="form-control"
          placeholder="Street Name"
          id="street"
        />
        <label htmlFor="city">City</label>
      <input
        onChange={props.handleInputChange}
        value={props.city}
        name="city"
        type="text"
        className="form-control"
        placeholder="Enter city"
        id="city"
        />
          <label htmlFor="state">State</label>
        <input
        onChange={props.handleInputChange}
        value={props.state}
        name="state"
        type="text"
        className="form-control"
        placeholder="Enter state"
        id="state"
        />
        <label htmlFor="zip">Zip Code</label>
        <input
        onChange={props.handleInputChange}
        value={props.zip}
        name="zip"
        type="integer"
        className="form-control"
        placeholder="Enter zip code"
        id="zip"
        />
    
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
  }

export default Form;
