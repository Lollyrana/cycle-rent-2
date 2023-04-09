import React from "react";
 import  "../styles/regstyle.css";
const Register = () => {
     
      return (
        
        <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>login</title>
        <link rel="stylesheet" href="style1.css" />
        <h1>Rent your Bicycles</h1>
        <form className="loginform" method="post" action="/app.js">
          <label className="form-item" htmlFor="fname">First name :</label>
          <input className="form-item" type="text" id="fname" name="fname" />
          <label className="form-item" htmlFor="lname">Last name :</label>
          <input className="form-item" type="text" id="lname" name="lname" />
          <label className="form-item" htmlFor="fname">Rate per hour :</label>
          <input className="form-item" type="text" id="rate" name="fname" />
          <label className="form-item" htmlFor="lname">Selling price :</label>
          <input className="form-item" type="text" id="sell" name="lname" />
          <h2 className="form-item bicycle"> Bicycle type </h2>
          <br />
          <label className="form-item" htmlFor="html">One-seater</label>
          <input className="form-item" type="radio" id="html" name="fav_language" defaultValue="HTML" />
          <label className="form-item" htmlFor="css">Two-seater</label>
          <input className="form-item" type="radio" id="css" name="fav_language" defaultValue="CSS" />
          <label className="form-item" htmlFor="img"><b>Select image:</b></label>
          <input className="form-item" type="file" id="img" name="img" accept="image/*" />
        </form>
        <button className=".register-button" type="submit">Submit </button>
      </div>
      )
    };
    export default Register;
  