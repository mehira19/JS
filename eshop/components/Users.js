import React from "react";

import User from "./User";
import users from "../mocks/users";

export default class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let allUsers = users.map((user, i) => <User {...user} key={user._id} />);
    return (
      <div className="container">
        <div className="row row-cols-5">{allUsers}</div>
      </div>
    );
  }
}
