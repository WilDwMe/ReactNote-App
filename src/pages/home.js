import React, { Fragment } from "react";
import { Form } from "../components/form";
import { Notes } from "../components/notes";


export const Home = () => (
        <Fragment>
            <h1>You notes</h1>
            <Form />
            <Notes/>
        </Fragment>
    )
