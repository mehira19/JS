import React from "react";

import Item from "./Item";
import items from "../mocks/items";

export default class Items extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let allItems = items.map((item, i) => <Item {...item} key={item._id} />);
    return (
      <div className="container">
        <div className="row row-cols-5">{allItems}</div>
      </div>
    );
  }
}
