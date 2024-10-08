import React, { useState } from 'react';
import SearchBox from './components/SearchBox';
import Table from './components/Table';
import Pagination from './components/Pagination';
import Spinner from './components/Spinner';
import { fetchCities } from '../src/service/api';
import './styles/Components.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const handleSearch = async () => {
    if (!query) return;

    setLoading(true);
    setError(null);

    try {
      const result = await fetchCities(query, itemsPerPage);
      setCities(result.data);
    } catch (err) {
      setError('Cities Not Found!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <SearchBox query={query} setQuery={setQuery} handleSearch={handleSearch} />
      {loading ? <Spinner /> : <Table cities={cities} query={query} />}
      {cities.length > 0 && <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalItems={cities.length}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
      />}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default App;
