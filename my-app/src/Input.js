import React from "react";
import "./App.css"

const Input = props => {
  //console.log(props.value);
  return (
    <div className="form-group" class="formgroup">
      <label for={props.name} className="form-label" class="label">
        {props.title}
      </label>
        <br/>
      <input
        class="inputbox"
        className="form-control"
        id={props.name}
        name={props.name}
        type={props.inputType}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        {...props}
      />
    </div>
  );
};

export default Input;
