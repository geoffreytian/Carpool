import React from "react";
import './App.css';


const TextArea = props => (
  <div className="form-group">
    <label className="form-label">{props.title}</label>
    <textarea class="input"
      className="form-control"
      name={props.name}
      rows={props.rows}
      cols={props.cols}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder}
    />
  </div>
);

export default TextArea;
