import React, { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(0);

  // Mock function to simulate API call
  const fetchResults = (searchTerm) => {
    console.log('Fetching results for:', searchTerm);
    // Simulating search results
    setResults([`Result 1 for ${searchTerm}`, `Result 2 for ${searchTerm}`]);
  };

  // Handle input change with manual debouncing
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Clear the previous timeout if it exists
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    // Set a new timeout for 500ms before making the API call
    setTypingTimeout(
      setTimeout(() => {
        fetchResults(value);
      }, 500)
    );
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Debouncing Search Example</h1>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        style={{ padding: '10px', width: '300px' }}
      />
      <div style={{ marginTop: '20px' }}>
        {results.length > 0 && (
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
