import { useState } from "react";
import { Friends } from "./Friends";
import { InputFriends } from "./InputFriends";
import { Display } from "./Display";

const data = [
  {
    person: "Rahim",
    photo: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    person: "Sakib",
    photo: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    person: "Fahim",
    photo: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];
export default function App() {
  return (
    <div>
      <Friends data={data}></Friends>
      <InputFriends></InputFriends>
      <Display></Display>
    </div>
  );
}
