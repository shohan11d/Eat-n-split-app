import { useState } from "react";

const friendsData = [
  {
    name: "Elan",
    photo: "https://randomuser.me/api/portraits/men/4.jpg",
    id: 1,
    balance: -7,
  },
  {
    name: "Adrin",
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
    id: 2,
    balance: 20,
  },
  {
    name: "Faria",
    photo: "https://randomuser.me/api/portraits/women/8.jpg",
    id: 3,
    balance: 0,
  },
];
export default function App() {
  const [friends, setFriends] = useState(friendsData);
  const [newFriendName, setNewFriendName] = useState("");
  const [newFriendUrl, setnewFriendUrl] = useState("https://i.pravatar.cc/48");
  const [form, setForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!newFriendName || !newFriendUrl) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name: newFriendName,
      photo: `${newFriendUrl}?=${id}`,
      balance: 0,
    };
    setFriends((friends) => [...friends, newFriend]);
    setForm(false);
  }

  function handleShowAddFriend(e) {
    e.preventDefault();
    setForm((value) => !value);
  }

  function onHandleSplit(value) {
    setFriends(() =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className=" grid md:grid-cols-2 max-w-[800px] mx-auto content-center    items-center  my-20">
      <div className=" grid justify-center ">
        <FriendList
          friends={friends}
          setForm={setForm}
          setSelectedFriend={setSelectedFriend}
        ></FriendList>

        <AddFriend
          form={form}
          setForm={setForm}
          newFriendName={newFriendName}
          setNewFriendName={setNewFriendName}
          newFriendUrl={newFriendUrl}
          setnewFriendUrl={setnewFriendUrl}
          onSubmit={handleSubmit}
        />
        <div className="  text-right">
          <Button onClick={handleShowAddFriend}>
            {form ? "Close" : "Add Friend"}
          </Button>
        </div>
      </div>

      <div>
        {selectedFriend && (
          <SplitBill
            setSelectedFriend={setSelectedFriend}
            selectedFriend={selectedFriend}
            friends={friends}
            setFriends={setFriends}
            onHandleSplit={onHandleSplit}
          />
        )}
      </div>
    </div>
  );
}

function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-cPrimary rounded-lg text-[13px] self-center hover:bg-cSecondary px-3 py-1 font-medium"
    >
      {children}
    </button>
  );
}

function FriendList({ friends, setForm, setSelectedFriend }) {
  return (
    <ul className="max-w-[400px]">
      {friends.map((friend, i) => (
        <Friend
          friend={friend}
          key={i + 2455}
          setForm={setForm}
          setSelectedFriend={setSelectedFriend}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, setForm, setSelectedFriend }) {
  return (
    <li className="grid grid-cols-[70px_180px_70px] py-4 ">
      <img className="w-12 h-12 rounded-full " src={friend.photo} alt="" />
      <div className="flex  flex-col   items-start  ">
        <p className="text-base font-bold text-[#495057]">{friend.name}</p>
        {friend.balance > 0 && (
          <p className="text-green-600">
            {friend.name} owes me {friend.balance}$
          </p>
        )}
        {friend.balance < 0 && (
          <p className="text-red-500">
            You owe {friend.name} {Math.abs(friend.balance)}$
          </p>
        )}
        {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      </div>
      <Button onClick={() => setSelectedFriend(friend)}>Select</Button>
    </li>
  );
}

function AddFriend({
  newFriendName,
  setNewFriendName,
  newFriendUrl,
  setnewFriendUrl,
  onSubmit,
  form,
}) {
  return (
    form && (
      <form
        className="bg-[#fff4e6] max-w-[320px] p-5 mb-4 flex flex-col  gap-5"
        onSubmit={onSubmit}
      >
        <div className="grid grid-cols-[30%_70%] text-sm gap-y-4">
          <label>🧑‍🤝‍🧑 Friend name</label>
          <input
            value={newFriendName}
            onChange={(e) => setNewFriendName(e.target.value)}
            type="text"
          />

          <label>🌆 Image URl</label>
          <input
            type="text"
            value={newFriendUrl}
            onChange={(e) => setnewFriendUrl(e.target.value)}
          />
        </div>
        <Button>Add</Button>
      </form>
    )
  );
}

function SplitBill({
  setSelectedFriend,
  selectedFriend,
  friends,
  setFriends,
  onHandleSplit,
}) {
  const [bill, setBill] = useState("");
  const [myBill, setMyBill] = useState("");
  // const [friendBill, setFriendBill] = useState("");
  const friendBill = bill - myBill;
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  function handleSplit(e) {
    e.preventDefault();
    if (!bill || !myBill) return;

    onHandleSplit(whoIsPaying === "user" ? friendBill : -myBill);
  }
  return (
    <form
      className="p-5 m-5 bg-[#fff4e6] grid justify-items-start gap-2 grid-cols-2 gap-y-5"
      onSubmit={handleSplit}
    >
      <h1 className="text-xl col-span-2 text-[#495057] font-bold">
        Split a Bill with {selectedFriend?.name}
      </h1>

      <label>💰 Bill value:</label>
      <input
        className="w-24 py-1 px-4"
        type="number"
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
      />

      <label>🧑‍🦲 Your expense:</label>
      <input
        className="w-24 py-1 px-4"
        type="number"
        value={myBill}
        onChange={(e) => setMyBill(+e.target.value)}
      />

      <label>👲 {selectedFriend?.name}'s expense:</label>
      <input className="w-24 py-1 px-4" type="number" disabled value={friendBill} />

      <label>🤑 Who is paying the bill:</label>
      <select
        className="w-24 py-1 px-4"
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend?.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
