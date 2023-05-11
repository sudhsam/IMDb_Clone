// import Card from "./Card";

export default function Results({ results }) {
  return (
    <div className="max-w-6xl py-4 mx-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {results.map((result) => (
        <div key={result.id}>{result.original_title}</div>
      ))}
    </div>
  );
}
