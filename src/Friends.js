import { Display } from "./Display";

export function Friends({ datas, handleSelect }) {
  return (
    <div className=" my-5 bg-neutral-300 p-2">
      <ul className="flex flex-col gap-5">
        {datas.map((friend, i) => (
          <Item friend={friend} handleSelect={handleSelect} key={i} />
        ))}
      </ul>
    </div>
  );
}

function Item({ friend, handleSelect }) {
  return (
    <div className="flex flex-col space-y-5">
      <div className="grid grid-cols-3 space-y-5">
        <img className="h-20" src={friend.photo} alt="" />
        <div>
          <p>{friend.person}</p>
          <p>{`You and ${friend.person} are even`}</p>
        </div>
        <button
          className="bg-orange-500 rounded-md px-2"
          onClick={(e) => handleSelect(friend.id)}
        >
          select
        </button>
      </div>
    </div>
  );
}
