import React from "react";

export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { _id, name, isSold, price, createdAt } = this.props;
    return (
      <div>
        {" "}
        <div className="col">
          <div className="card text-center">
            <img
              src="http://www.mavieentupperware.com/wp-content/uploads/2020/04/couverture-hotesse-al-fresco.jpg"
              className="card-img-top"
              alt="..."
              height="170px"
            />
            <div className="card-body">
              <p className="card-text"> {name} </p>
              <p className="card-text"> {price} € </p>
              {isSold ? (
                <a href="#" className="btn btn-alert disabled">
                  Vendu
                </a>
              ) : (
                <a href="#" className="btn btn-success ">
                  Vendre
                </a>
              )}
            </div>
          </div>
        </div>{" "}
        <br /> <br />
        <div className="col">
          <div className="card text-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0366/7473/2169/products/SpeedyChefpackshot1copie_1024x1024@2x.png?v=1585495237"
              className="card-img-top"
              alt="Speedy chef"
              height="170px"
            />
            <div className="card-body">
              <p className="card-text"> {name} Speedy Chef </p>
              <p className="card-text"> {20.06} € </p>
              {isSold ? (
                <a href="#" className="btn btn-alert disabled">
                  Vendu
                </a>
              ) : (
                <a href="#" className="btn btn-success ">
                  Vendre
                </a>
              )}
            </div>
          </div>
        </div>{" "}
        <br /> <br />
        <div className="col">
          <div className="card text-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0366/7473/2169/products/D208_1024x1024@2x.jpg?v=1585559699"
              className="card-img-top"
              alt="Speedy chef"
              height="170px"
            />
            <div className="card-body">
              <p className="card-text"> {name} Bol mélangeur 3,25 l</p>
              <p className="card-text"> {19.91} € </p>
              {isSold ? (
                <a href="#" className="btn btn-alert disabled">
                  Vendu
                </a>
              ) : (
                <a href="#" className="btn btn-success ">
                  Vendre
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
