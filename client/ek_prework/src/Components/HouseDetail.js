import React from 'react'

function HouseDetail(props) {
  return (
    <div className="addieInfo">
      {/* Here is where you would want to parse this out and do whatever with it.
        I'm just displaying the whole response as a string as an example */}
      <pre>${JSON.stringify(props, null, '  ')}</pre>

      {/* <h3>Street: {props.street}</h3>
            <h3>City: {props.city}</h3>
            <h3>State: {props.state}</h3>
            <h3>Zip Code: {props.zip}</h3> */}
    </div>
  )
}

export default HouseDetail
