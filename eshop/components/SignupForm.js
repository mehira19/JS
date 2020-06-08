import React from "react";

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      lastname: "",
      firstname: "",
      password: "",
    };
  }

  handleLoginChange(event) {
    this.setState({ login: event.target.value });
  }

  handleFirstNameChange(event) {
    this.setState({ firstname: event.target.value });
  }
  handleLastNameChange(event) {
    this.setState({ lastname: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    const { login, password, firstname, lastname } = this.state;
    if (login != "" && password != "" && firstname != "" && lastname) {
      this.setState({ login: "", password: "", firstname: "", lastname: "" });
      this.props.onSignupFormSubmitted(login, password, firstname, lastname);
    }
    event.preventDefault();
  }

  render() {
    let { login, password, firstname, lastname } = this.state;
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label htmlFor="login">Login</label>
          <input
            type="text"
            className="form-control"
            id="login"
            value={login}
            onChange={this.handleLoginChange.bind(this)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Firstname</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={firstname}
            onChange={this.handleFirstNameChange.bind(this)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={this.handlePasswordChange.bind(this)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Lastname</label>
          <input
            type="text"
            className="form-control"
            id="password"
            value={lastname}
            onChange={this.handleLastNameChange.bind(this)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}
