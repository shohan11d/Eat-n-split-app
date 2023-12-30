export function Form({
  children,
  quantity,
  setQuantity,
  product,
  setProduct,
  handleSubmit,
}) {
  return (
    <form className="py-5 flex gap-5 justify-center bg-amber-600">
      <p>{children}</p>
      <select
        name=""
        id=""
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (value, index) => index + 1).map(
          (num, i) => (
            <option value={num} key={i}>
              {num}
            </option>
          )
        )}
      </select>
      <input
        type="text"
        placeholder="Item..."
        className="p-1 pl-3 rounded-full"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
      />
      <button
        className="rounded-full px-4 py-1 bg-blue-300 hover:bg-blue-600"
        type="submit"
        onClick={handleSubmit}
      >
        ADD
      </button>
    </form>
  );
}
