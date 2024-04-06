import { useState } from "react";

const data = [
  {
    friend: "Clark",
    amount: -340,
    id: 1,
  },
  {
    friend: "Sarah",
    amount: 20,
    id: 2,
  },
  {
    friend: "Anthony",
    amount: -13,
    id: 3,
  },
  {
    friend: "Jane",
    amount: 41,
    id: 4,
  },
];

function App() {
  const [state, setState] = useState(false);
  const [box, setBox] = useState(data);
  const [current, setCurrent] = useState("");

  function handleSelect(id) {
    setState((state) => !state);
    const found = box.filter((el) => el.id === id);

    setCurrent(...found);
  }

  function handleSplit(value) {
    console.log(value);
    console.log(box);
    // setBox((box) => box.map((el) =>
    //     el.id === current.id ? { ...el, amount: current.amount + value } : el
    //   )
    // );
    setBox((box) =>
      box.map((el) =>
        el.id === current.id ? { ...el, amount: el.amount + value } : el
      )
    );

    console.log(box);
  }

  return (
    <div className="grid grid-cols-2 container mx-auto">
      <div>
        {box.map((friend) => (
          <Friend
            friend={friend}
            onSelect={handleSelect}
            key={crypto.randomUUID()}
          />
        ))}
      </div>

      {state && <Stats current={current} onSplit={handleSplit} />}
    </div>
  );
}

function Friend({ friend, onSelect }) {
  return (
    <div className="mt-5 border-red-500 border space-y-2 bg-orange-100">
      <div>
        <p className="font-bold">{friend.friend}</p>
        <p>
          {friend.amount > 0
            ? `${friend.friend} owes me ${friend.amount}$`
            : `You owe ${friend.friend} ${friend.amount}`}
        </p>
      </div>
      <button
        className="bg-orange-400 rounded-sm"
        onClick={() => onSelect(friend.id)}
      >
        Select
      </button>
    </div>
  );
}

function Stats({ current, onSplit }) {
  const [bill, setBill] = useState("");
  const [expense, setExpense] = useState("");
  const friendsBill = bill > expense ? bill - expense : "";
  const [final, setFinal] = useState("You");
  return (
    <div className="bg-orange-100 p-2 m-5 space-y-5">
      <p className="font-bold">SPLIT A Bill with {current.friend}</p>
      <div>
        <span>Bill value</span>
        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(+e.target.value)}
        />
      </div>
      <div>
        <span>Your expense</span>
        <input
          type="number"
          value={expense}
          onChange={(e) => setExpense(+e.target.value)}
        />
      </div>
      <div>
        <span>{current.friend}'s expense </span>
        <input type="number" disabled className="border" value={friendsBill} />
      </div>
      <div>
        <span>Who is paying the bill?</span>
        <select
          name=""
          id=""
          value={final}
          onChange={(e) => setFinal(e.target.value)}
        >
          <option value="You">You</option>
          <option value="Friend">Friend</option>
        </select>
      </div>
      <button
        className="bg-orange-300 p-1 rounded"
        onClick={() => onSplit(final === "You" ? +friendsBill : -expense)}
      >
        split
      </button>
    </div>
  );
}
export default App;
