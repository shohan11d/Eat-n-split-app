import { useState } from "react";

export function Display({ unique, datas, setDatas }) {
  const found = datas.find((item) => item.id === unique);
  const [bill, setBill] = useState("");
  const [myBill, setMyBill] = useState("");
  const [friendBill, setFriendBill] = useState("");
  const [paying, setPaying] = useState("");

  const xyz = bill - myBill;

  function handleSplit() {
    if (paying === "You") datas.debt = +xyz;
    if (paying === found.person) datas.gets = +myBill;
  
    setDatas()

  }

  return (
    <div className="my-5 bg-blue-400">
      <h2>Split a bill with {found.person}</h2>
      <form>
        <div className="grid grid-cols-2 gap-4">
          <label htmlFor="">Bill value</label>
          <input
            className="border-2 px-2"
            type="number"
            onChange={(e) => setBill(+e.target.value)}
          />
          <label htmlFor="">Your expense</label>
          <input
            className="border-2 px-2"
            type="number"
            onChange={(e) => setMyBill(+e.target.value)}
          />
          <label htmlFor=""> {found.person}'s expense</label>
          <input className="border-2 px-2" type="number" value={xyz} />
          <label htmlFor="">Who is playing the bill?</label>
          <select name="" id="" onChange={(e) => setPaying(e.target.value)}>
            <option value="You">You</option>
            <option value="Friend">{found.person}</option>
          </select>
        </div>
      </form>
      <button className="border-2 bg-red-300" onClick={handleSplit}>
        split
      </button>
    </div>
  );
}
