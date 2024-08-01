import React, { useState } from "react";
import { generateConfirm } from "./utility";

function FoodOrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [order, setOrder] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Order Sucessful!\n
      Your order was ${order}.\n
      Your conformation number is ${generateConfirm()}
      Please show your conformation number for pickup.
      `
    );
  };
  return (
    <form onSubmit={handleSubmit}>
      <label for="name"> Name:</label>
      <input
        value={name}
        id="name"
        type="text"
        onChange={({ target }) => setName(target.value)}
      />
      <label for="phone"> Phone:</label>
      <input
        value={phone}
        id="phone"
        type="text"
        onChange={({ target }) => setPhone(target.value)}
      />
      <label for="address"> Address:</label>
      <input
        value={address}
        id="address"
        type="text"
        onChange={({ target }) => setAddress(target.value)}
      />
      <label for="order"> Order:</label>
      <input
        value={order}
        id="order"
        type="text"
        onChange={({ target }) => setOrder(target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FoodOrderForm;
