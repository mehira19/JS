import React from "react";

export default class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      _id,
      firstname,
      lastname,
      login,
      password,
      soldItems,
      createdAt,
    } = this.props;
    return (
      <div className="col">
        <div className="card text-center">
          <img
            src="https://pngimage.net/wp-content/uploads/2018/06/personne-logo-png-1.png"
            className="card-img-top"
            alt="..."
            height="170px"
          />

          <div className="card-body">
            <p className="card-text"> {firstname} </p>
            <p className="card-text"> {lastname} </p>
            <p className="card-text"> {login} </p>

            {soldItems ? (
              <a href="#" className="btn btn-alert disabled">
                Il a vendu un ou plusieurs article
              </a>
            ) : (
              <a href="#" className="btn btn-success ">
                Il n'a pas vendu d'articles
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
}
