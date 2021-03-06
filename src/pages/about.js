import React, { Fragment } from "react";
import { Link } from "react-router-dom";


export const About = () => {
    return ( 
        <div className="jumbotron">
  <h1 className="display-4">Note App</h1>
  <p className="lead">Its simple React application used Redux-toolkit with midleware async thunk for load and save notes on google firebase. App was created as practice and improve coding skills ;']</p>
  <hr className="my-5"/>
  <p>Stack used: React, Redux-toolkit, Axios, Google FireBase <a className="nav-link active" aria-current="page" href="https://github.com/WilDwMe?tab=following">@WilDwMe/GitHub</a></p>
  <Link className="btn btn-primary btn-lg" to="/" role="button">Back</Link>
</div>
    )
}
