"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-between max-w-6xl px-5 mx-auto"
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search keywords..."
        className="flex-1 w-full bg-transparent rounded-sm outline-none h-14 placeholder-gary-500"
      />
      <button
        disabled={!search}
        type="submit"
        className="text-amber-600 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}