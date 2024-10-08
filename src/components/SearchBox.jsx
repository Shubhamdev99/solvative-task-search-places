import React, { useEffect, useRef } from 'react';

const SearchBox = ({ query, setQuery, handleSearch }) => {
  const inputRef = useRef(null);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  const handleGlobalKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === '/') { 
      e.preventDefault();
      inputRef.current.focus(); 
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleGlobalKeyDown); 

    return () => {
      window.removeEventListener('keydown', handleGlobalKeyDown); 
    };
  }, []);

  return (
    <div className="search-box">
      <input
        ref={inputRef} 
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Search for places..."
      />
    </div>
  );
};

export default SearchBox;
