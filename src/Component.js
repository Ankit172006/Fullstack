import React from 'react'
import "./Component.css"
import {Link} from "react-router-dom"
function Component(props) {
  return (
    <div className='main'>
        <div className="btn">
            <Link to="/add">
            <button id='add'>Add+</button>
            </Link>
        </div>
    <div className='main_container'>
<table>
  <thead>
    <tr className='heading_name'>
      <th>Name</th>
      <th>Email</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{props.Names}</td>
      <td>{props.Email}</td>
      <td>{props.Age}</td>
    </tr>
  </tbody>
</table>
    </div>
    </div>
  )
}

export default Component
