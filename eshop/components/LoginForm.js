import React from "react";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
    };
  }

  handleLoginChange(event) {
    this.setState({ login: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    const { login, password } = this.state;
    if (login != "" && password != "") {
      this.setState({ login: "", password: "" });
      this.props.onLoginFormSubmitted(login, password);
    }
    event.preventDefault();
  }

  render() {
    let { login, password } = this.state;
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
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={this.handlePasswordChange.bind(this)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}
