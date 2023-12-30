export default function Header({ children }) {
  return (
    <h1 className="text-3xl font-bold md:text-5xl bg-yellow-200 py-5">
      {children}
    </h1>
  );
}
