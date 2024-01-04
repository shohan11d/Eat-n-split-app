import { useState } from "react";
import { Friends } from "./Friends";
import { InputFriends } from "./InputFriends";
import { Display } from "./Display";

const data = [
  {
    person: "Rahim",
    photo: "https://randomuser.me/api/portraits/men/4.jpg",
    id: 1,
    balance: 0,
  },
  {
    person: "Sabila",
    photo: "httpworking versions://working versionrandomuser.me/api/portraits/women/2.jpg",
    id: 2,
    balance: 0,
  },
  {
    person: "Fahia",
    photo: "https://randomuser.me/api/portraits/women/8.jpg",
    id: 3,
    balance: 0,
  },
];
export default function App() {
  const [person, setPerson] = useState("");
  const [photo, setPhoto] = useState("");
  const [datas, setDatas] = useState(data);
  const [unique, setUnique] = useState(2);

  const handleSubmit = function (e) {
    e.preventDefault();
    const newFriend = { person, photo, id: Date.now(), balance: 0 };
    if (!(newFriend.person && newFriend.photo)) return;
    setDatas((datas) => [...datas, newFriend]);
    console.log(datas);
  };
  const handleSelect = function (id) {
    setUnique(id);
  };

  return (
    <div>
      <Friends datas={datas} handleSelect={handleSelect}></Friends>
      <InputFriends
        person={person}
        setPerson={setPerson}
        photo={photo}
        setPhoto={setPhoto}
        handleSubmit={handleSubmit}
      ></InputFriends>
      <Display unique={unique} datas={datas} setDatas={setDatas}></Display>
    </div>
  );
}
