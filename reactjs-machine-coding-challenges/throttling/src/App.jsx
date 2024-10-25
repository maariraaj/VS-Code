import React, { useState, useRef } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const throttleTimeout = useRef(null);  // Ref to store timeout

  // Mock function to simulate API call
  const fetchResults = (searchTerm) => {
    console.log('Fetching results for:', searchTerm);
    // Simulating search results
    setResults([`Result 1 for ${searchTerm}`, `Result 2 for ${searchTerm}`]);
  };

  // Throttled function handler
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // If there's no ongoing throttleTimeout, make the API call
    if (!throttleTimeout.current) {
      fetchResults(value);

      // Set a timeout for the next call, e.g., after 1000ms (1 second)
      throttleTimeout.current = setTimeout(() => {
        throttleTimeout.current = null; // Reset timeout after the interval
      }, 1000);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Throttling Search Example</h1>
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
