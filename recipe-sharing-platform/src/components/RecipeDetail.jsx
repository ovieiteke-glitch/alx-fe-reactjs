import React; { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';  // Import user params

const RecipeDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

   
  useEffect(() => {
    const fetchItem = async () => {
      try {
        // Fetch the local JSON file from the public directory
        const response = await fetch('/data.json'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json(); // Parse the JSON data

        // Find the item that matches the route ID
        const foundItem = data.find(item => item.id === id); 

        if (foundItem) {
          setItem(foundItem);
        } else {
          setError('Item not found');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]); // Re-run effect if ID changes

  if (loading) {
    return <p>Loading details...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </div>
  );
};

export default RecipeDetail;