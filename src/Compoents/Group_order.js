import React from "react";
import { Link } from "react-router-dom";

const cake = { name: "cake1", availablity: true };
const exampleOrders = [
  {
    bakery: "eddy",
    locations: ["massa", "gw"],
    time: "TIME-TIME",
    items: [cake, cake, cake],
  },
  { bakery: "bobby", locations: ["massa", "gw"], time: "TIME-TIME", items: [] },
];

const c = () => {
  const group_orders = Object.entries(exampleOrders).map(([key, value]) => {
    const { bakery, locations, time, items } = value;
    let items_list = "";
    return (
      <Link to="/auth">
        <li key={key}>
          <p>{bakery}</p>
          {locations.map((location, key) => {
            return <span key={key}>{location}, </span>;
          })}
          <p>{time}</p>

          {items.map((item, key) => {
            items_list = items_list.concat(item.name) + ",";
          })}
          <p>{items_list.substring(0, 10)}...</p>
        </li>
      </Link>
    );
  });
  return <div className="pindanMap">{group_orders}</div>;
};

export default c;
