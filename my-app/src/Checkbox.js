import React from "react";
import "./App.css";

const CheckBox = props => {
  return (
    <div className="form-group" class="formgroup">
      <label for={props.name} className="form-label" class="label">
        {props.title}
      </label>
      <div className="checkbox" class="checkbox">
        {props.options.map(option => {
          return (
            <label key={option} className="checkbox-inline">
              <input
                id={props.name}
                name={props.name}
                onChange={props.handleChange}
                value={option}
                checked={props.selectedOptions.indexOf(option) > -1}
                type="checkbox"
              />
              {option}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default CheckBox;
