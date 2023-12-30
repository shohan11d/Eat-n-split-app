export function Friends({ data }) {
  return (
    <div>
      <ul>
        {data.map((friend) => (
          <Item friend={friend} />
        ))}
      </ul>
    </div>
  );
}

function Item({ friend }) {
  return (
    <div>
      <p>{friend.person}</p>
      <img src={friend.photo} alt="" />
    </div>
  );
}
