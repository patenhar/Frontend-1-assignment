import React from "react";
import ProductCard from "./ProductCard";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const storage = Object.values({ ...localStorage });
  const products = storage.map((product, idx) => JSON.parse(product));

  const matchingProducts = products.filter((product) =>
    product.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Search Fruits</h2>

      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div>
        {matchingProducts.length > 0 ? (
          matchingProducts.map((product, index) => (
            <ProductCard
              id={product.id}
              imageUrl={product.imageUrl}
              title={product.title}
              description={product.description}
              price={product.price}
              quantity={product.quantity}
              key={product.id}
            />
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}
