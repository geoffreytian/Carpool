import React, { Component } from "react";
import './App.css';

/* Import Components */
import CheckBox from "./Checkbox";
import Input from "./Input";
import TextArea from "./Textarea";
import Select from "./Select";
import Button from "./Button";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: "",
        locations: [],
        about: "",
        email: ""
      },

      locationOptions: ["Littlefield Fountain    ", "Jester      ", "Wampus     ", "Normpus     "]
    };
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleFullName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          name: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleEmail(e) {
      let value = e.target.value;
      this.setState(
          prevState => ({
              newUser: {
                  ...prevState.newUser,
                  email: value
              }
          }),
          () => console.log(this.state.newUser)
      );
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          [name]: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          about: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleCheckBox(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.newUser.locations.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.locations.filter(
        s => s !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.newUser.locations, newSelection];
    }

    this.setState(prevState => ({
      newUser: { ...prevState.newUser, locations: newSelectionArray }
    }));
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;

    fetch("http://example.com", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newUser: {
        name: "",
        locations: [],
        about: ""
      }
    });
  }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <Input
          class="inputbox"
          inputType={"text"}
          title={"Full Name: "}
          name={"name"}
          value={this.state.newUser.name}
          placeholder={"Enter your name"}
          handleChange={this.handleInput}
        />{" "}

        <Input class="inputbox"
            inputType={"text"}
            title={"E-mail: "}
            name={"e-mail"}
            value={this.state.newUser.e}
            placeholder={"Enter your email"}
            handleChange={this.handleInput}
        />{" "}
        <CheckBox
          title={"Pickup Locations: "}
          name={"Pickup Locations"}
          options={this.state.locationOptions}
          selectedOptions={this.state.newUser.locations}
          handleChange={this.handleCheckBox}
        />{" "}
        <Button class="submit"
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />{" "}
        <Button class="submit"
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
          style={buttonStyle}
        />{" "}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default FormContainer;
