import React, { useState } from "react";
export default function Home(props) {
  const [Text, setText] = useState("");

  const upCase = () => {
    setText(Text.toUpperCase());
  };

  const lowCase = () => {
    setText(Text.toLocaleLowerCase());
  };

  const onChange = (event) => {
    console.log("text chenge");
    setText(event.target.value);
  };
  const clear = () => {
    setText("");
  };

  return (
    <>
      <div className="container mt-5" style={{color:props.mode==='light'?'black':'white'}}>
        <div className="mb-3 ">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h1>Enter Your Text</h1>
          </label>
          <textarea
            className="form-control "
            id="exampleFormControlTextarea1"
            rows="8"
            value={Text}
            onChange={onChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey", color:props.mode==='light'?'black':'white'
            }}
          ></textarea>
          <button type="button" className="btn btn-primary mt-2 " onClick={upCase}>
            upCase
          </button>
          <button
            type="button"
            className="btn btn-danger mt-2 mx-3 "
            onClick={lowCase}
          >
            LowCase
          </button>
          <button type="button" className="btn btn-dark mt-2 mx-2 " onClick={clear}>
            Clear
          </button>
        </div>
      </div>

      <div className="container mt-4" style={{color:props.mode==='light'?'black':'white'}}>
        <h4>YourText summary </h4>
        <p>
          {Text.split(" ").length} words and {Text.length} characters
        </p>
        <p>{0.008 * Text.split(" ").length} Minute read</p>
        <h4>Preview </h4>
        <p>{Text.length>0?Text:"Enter somethin to preview it here"}</p>
      </div>
    </>
  );
}
