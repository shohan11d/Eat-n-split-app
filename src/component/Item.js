export function Item({ product, items, handleSelect, handleCross }) {
  return (
    <div className="space-x-2 ">
      <input
        type="checkbox"
        name=""
        id=""
        onClick={() => handleSelect(product.id)}
      />
      <span>{product.quantity}</span>
      <span className={product.packed ? "line-through" : ""}>
        {product.describtion}
      </span>
      <button href="#" onClick={() => handleCross(product.id)}>
        ❌
      </button>
    </div>
  );
}
