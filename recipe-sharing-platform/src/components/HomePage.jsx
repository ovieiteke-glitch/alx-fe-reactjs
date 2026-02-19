import React from "react";
import React, { useState, useEffect } from 'react'; 

function DataFetcher() {
  const [data, setData] = useState(null); // Initialize as null or [] if it's an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch from the public directory
        const response = await fetch('./data.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []); // The empty array ensures this effect runs only once after the initial render

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render the data once available
  return (
    <div>
      <h1>Data Loaded:</h1>
      {/* Conditionally render based on your JSON structure */}
      {data && Array.isArray(data) ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Data loaded, but not an array or structure is different.</p>
      )}
    </div>
  );
}


function HomePage() {
    return (
    <div className="homepage-container flex items-center justify-center min-h-screen bg-gray-100">
      <header>
        <h1>Welcome to My Website!</h1>
      </header>
      <section>
        <p>This is the homepage content.</p>
      </section>
      <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-md hover:text-blue-800">
        <DataFetcher />
      </div>
    </div>
  );
}
export default HomePage;