
import React, { useState } from 'react'
import TestInputData from './TestInputData';

const TestComponent = () => {
    const [box, setBox] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [show, setShow] = useState(false);
    const [loader, setLoader] = useState(false);
    const a = 2;
    const b = 4;
    const sum = a + b;

    const btnClickHandler = () => {
        setBox(!box);
    }

    const submitHandler = () => {
        setLoader(true);
        setTimeout(() => {
            setShow(true);
            setLoader(false);
        }, 1500);
    }

    return (
        <>
            <h1 data-testid="sum_element" >{sum}</h1>
            <div>Testing Component</div> <br />

            <a href="www.youtube.com" >Click me</a> <br />

            <h3 data-testid="h3tag" >Test </h3>

            <button onClick={btnClickHandler} >Openbox</button> <br /> <br />

            <button data-testid="disabled_btn" disabled >Disabled</button>

            {
                box &&
                <div style={{ border: "2px solid red", height: "200px", width: "200px", margin: "auto", marginTop: "10px" }}  >
                    box
                    <h1 data-testid="headings" >Box1</h1>
                    <h2 data-testid="headings" >Box2</h2>
                    <h3 data-testid="headings" >Box3</h3>
                    <span data-testid="headings" >span</span>
                </div>
            }

            <br />
            <br />

            {/* now we will check input elements */}
            <input
                value={email}
                type="text"
                name="email"
                data-testid="email_input"
                placeholder="Your email"
                onChange={(e) => setEmail(e.target.value)}
            /><br/><br/>

            <input
                value={password}
                type="text"
                name="password"
                data-testid="password_input"
                placeholder="Your password"
                onChange={(e) => setPassword(e.target.value)}
            /><br/><br/>

            <button
                onClick={submitHandler}
                data-testid="submit_btn"
                disabled={!email || !password} >
                {loader ? 'Loading' : 'Submit'}
            </button>

            {
                show &&
                <TestInputData email={email} password={password} />
            }
        </>
    )
}

export default TestComponent