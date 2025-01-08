function SearchProduct({ query, setQuery }) {
  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      type="text"
      className="w-1/2 p-4 m-5 border border-gray-200 focus:border-gray-400 rounded-lg text-gray-500 hover:bg-green-50 focus:shadow-lg"
      placeholder="search for products ...."
    />
  );
}

export default SearchProduct;
