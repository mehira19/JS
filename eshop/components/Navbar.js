import React from "react";

import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import Item from "./Item";
import Items from "../components/Items";
import User from "./User";
import Users from "./Users";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }
  handleLoginFormSubmitted(login, password) {
    const user = { login: login, password: password };
    let body = JSON.stringify(user);
    let requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: body,
    };
    fetch("http://localhost:3000/auth/login", requestOptions)
      .then((user) => user.json())
      .then(this.setState({ isLoggedIn: true }))
      .catch((error) => window.alert(error.message));
    // console.log(login, password);
    // state = { isLoggedIn: true };
  }

  handleSignupFormSubmitted(login, password, firstname, lastname) {
    const newUser = {
      firstname: firstname,
      lastname: lastname,
      login: login,
      password: password,
    };
    let body = JSON.stringify(newUser);
    let requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: body,
    };
    fetch("http://localhost:3000/auth/signup", requestOptions).then((user) =>
      user.json()
    );
    // .then(console.log("vous êtes bien inscrits"))
  }

  handleDisconectClicked() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {isLoggedIn && (
            <div>
              <a href="#" className="navbar-brand">
                <img
                  src="https://pngimage.net/wp-content/uploads/2018/06/personne-logo-png-1.png"
                  height="28"
                  alt="User"
                />
              </a>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          )}
          <a className="navbar-brand" href="#">
            <h1>E-SHOP</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link "
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Classements
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <table className="table table-dark">
                    <thead>
                      <tr>
                        <th scope="col"> Rang</th>
                        <th scope="col">Firstname</th>
                        <th scope="col">Lastname</th>
                        <th scope="col">login</th>
                        <th scope="col"> </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Penda</td>
                        <td>Diallo</td>
                        <td>@P</td>
                        <td>
                          {" "}
                          <form action="#">
                            <label for="vol">A toi de noter:</label>
                            <input
                              type="range"
                              id="vol"
                              name="vol"
                              min="0"
                              max="100"
                            />
                            <input type="submit" />
                          </form>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>User</td>
                        <td>2</td>
                        <td>@terj</td>
                        <td>
                          {" "}
                          <form action="#">
                            <label for="vol">A toi de noter:</label>
                            <input
                              type="range"
                              id="vol"
                              name="vol"
                              min="0"
                              max="100"
                            />
                            <input type="submit" />
                          </form>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Imourane</td>
                        <td>Diallo</td>
                        <td>@Imo</td>
                        <td>
                          {" "}
                          <form action="#">
                            <label for="vol">A toi de noter:</label>
                            <input
                              type="range"
                              id="vol"
                              name="vol"
                              min="0"
                              max="100"
                            />
                            <input type="submit" />
                          </form>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>User</td>
                        <td>1</td>
                        <td>@fekf</td>
                        <td>
                          {" "}
                          <form action="#">
                            <label for="vol">A toi de noter:</label>
                            <input
                              type="range"
                              id="vol"
                              name="vol"
                              min="0"
                              max="100"
                            />
                            <input type="submit" />
                          </form>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>User</td>
                        <td>3</td>
                        <td>@fdsz</td>
                        <td>
                          {" "}
                          <form action="#">
                            <label for="vol">A toi de noter:</label>
                            <input
                              type="range"
                              id="vol"
                              name="vol"
                              min="0"
                              max="100"
                            />
                            <input type="submit" />
                          </form>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </li>
            </ul>
            <ul className="navbar-nav my-2 my-lg-0">
              {isLoggedIn || (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link "
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <button type="button" className="btn btn-info">
                      Se connecter{" "}
                    </button>
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <LoginForm
                      onLoginFormSubmitted={(login, password) =>
                        this.handleLoginFormSubmitted(login, password)
                      }
                    />
                  </div>
                </li>
              )}
              {isLoggedIn || (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link "
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <button type="button" className="btn btn-info">
                      S'inscrire{" "}
                    </button>
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <SignupForm
                      onSignupFormSubmitted={(
                        login,
                        password,
                        firstname,
                        lastname
                      ) =>
                        this.handleSignupFormSubmitted(
                          login,
                          password,
                          firstname,
                          lastname
                        )
                      }
                    />
                  </div>
                </li>
              )}
              {isLoggedIn && (
                <li className="nav-item dropdown">
                  <img
                    className="nav-link "
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    src="https://st.depositphotos.com/2711989/3513/v/950/depositphotos_35135909-stock-illustration-bell-icon.jpg"
                    className="card-img-top"
                    alt="Notifications"
                    height="52px"
                  />
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <div className="alert alert-success" role="alert">
                      <small>11 mins ago</small> <br />
                      <strong>Penda Diallo</strong> a vendu un article.
                      <button
                        type="button"
                        className="close"
                        data-dismiss="alert"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="alert alert-secondary" role="alert">
                      <small>30 mins ago</small> <br />
                      <strong>User 2</strong> a vendu un article.
                      <button
                        type="button"
                        className="close"
                        data-dismiss="alert"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                  </div>
                </li>
              )}
              {isLoggedIn && (
                <li className="nav-item">
                  <a className="nav-link" href="#" tabIndex="-1">
                    {" "}
                    <button
                      type="button"
                      className="btn btn-info"
                      onClick={this.handleDisconectClicked.bind(this)}
                    >
                      Se deconnecter
                    </button>
                  </a>
                </li>
              )}
            </ul>
          </div>{" "}
        </nav>
        <h2>
          {" "}
          <p>
            <strong>Bienvenue sur la page E-SHOP</strong>
          </p>{" "}
        </h2>
        {isLoggedIn && (
          <div>
            {" "}
            A present vous pouvez faire des ventes; c'est pas GENIALL!!! <br />{" "}
            <br />
            Vous serez en mesure de voir le classement de vos concurrents, de
            les noter. Ainsi que des notifications lorsque ces derniers
            effectuent des ventes. <br /> <br /> Bonne chance. <br /> <br />
          </div>
        )}
        {isLoggedIn && (
          <h3>
            {" "}
            <p>
              <strong>Liste des autres Vendeurs</strong>
            </p>{" "}
          </h3>
        )}
        {isLoggedIn && <br />}
        {isLoggedIn && <Users />}
        {isLoggedIn || (
          <div>
            Vous êtes un vendeur professionel ou un débutant dans le metier ?
          </div>
        )}
        {isLoggedIn || (
          <div>
            {" "}
            Voulez- vous vendre des tupperwares ? <br /> <br />
            N'attendez plus connectez-vous ou inscrivez-vous pour faire les
            meilleures ventes.
          </div>
        )}
        <h3>
          {" "}
          <br />
          NOS ARTICLES <br /> <br />
        </h3>
        <Items /> <br />
      </div>
    );
  }
}
