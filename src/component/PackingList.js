import { useState } from "react";
import { Item } from "./Item";

export function PackingList({ items, handleSelect, handleCross }) {
  const [sort, setSort] = useState("input");
  let sortedItems;
  if (sort === "input") sortedItems = items;
  if (sort === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  if (sort === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.describtion.localeCompare(b.describtion));

  console.log(sortedItems, items);
  console.log(sort);
  return (
    <div>
      <div className="grid grid-cols-4 gap-5 py-28 bg-amber-900   text-white">
        {sortedItems.map((product, i) => (
          <Item
            product={product}
            items={sortedItems}
            key={i}
            handleSelect={handleSelect}
            handleCross={handleCross}
          />
        ))}
      </div>
      <div className="bg-amber-900">
        <select
          name=""
          value={sort}
          id=""
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="input">Sort by input Order</option>
          <option value="packed">Sort by Packed status</option>
          <option value="description">Sort by description</option>
        </select>
      </div>
    </div>
  );
}
