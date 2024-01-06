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

  return (
    <div className="flex  w-[700px] mx-auto    my-20">
      <div>
        <FriendList friends={friends} setForm={setForm}></FriendList>

        <AddFriend
          form={form}
          setForm={setForm}
          newFriendName={newFriendName}
          setNewFriendName={setNewFriendName}
          newFriendUrl={newFriendUrl}
          setnewFriendUrl={setnewFriendUrl}
          onSubmit={handleSubmit}
          
        />
        <Button onClick={handleShowAddFriend}>
          {form ? "Close" : "Add Friend"}
        </Button>
      </div>

      <div>
        <SplitBill />
      </div>
    </div>
  );
}

function FriendList({ friends, setForm }) {
  return (
    <div>
      <ul className="w-[350px]">
        {friends.map((friend, i) => (
          <Friend friend={friend} key={i + 2455} setForm={setForm} />
        ))}
      </ul>
    </div>
  );
}

function Friend({ friend, setForm }) {
  return (
    <li className=" flex  justify-around py-4 px-2">
      {" "}
      <img className="w-10 rounded-full " src={friend.photo} alt="" />
      <div className="flex flex-col gap-2 ">
        <p className="text-md font-bold">{friend.name}</p>
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
      <Button>Select</Button>
    </li>
  );
}

function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-amber-500 rounded-lg hover:bg-amber-600 px-3 py-2 self-center"
    >
      {children}
    </button>
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
        className="bg-[#fff4e6] p-5 flex flex-col gap-5"
        onSubmit={onSubmit}
      >
        <div>
          <label>Friend name</label>
          <input
            value={newFriendName}
            onChange={(e) => setNewFriendName(e.target.value)}
            type="text"
          />
        </div>
        <div>
          <label>Image URl</label>
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

function SplitBill() {
  return (
    <form className="p-10 m-5 bg-[#fff4e6] flex flex-col gap-5">
      <h1>Split a Bill with X</h1>
      <div>
        <label>💰 Bill value:</label>
        <input type="number" />
      </div>
      <div>
        <label>🧑‍🦲 Your expense:</label>
        <input type="number" />
      </div>
      <div>
        <label>👲 Friend expense:</label>
        <input type="number" />
      </div>
      <div>
        <label>🤑 Who is paying the bill:</label>
        <select>
          <option value="user">You</option>
          <option value="friend">Friend</option>
        </select>
      </div>
    </form>
  );
}
