export function Footer({ items }) {
  const total = items.length;
  const selected = items.filter((item) => item.packed).length;
  return (
    <div className="p-5 bg-blue-400">
      <p>
        {" "}
        You have {total} items on your list. You have packed {selected}(
        {Math.round((selected / total) * 100)}%)
      </p>
    </div>
  );
}
