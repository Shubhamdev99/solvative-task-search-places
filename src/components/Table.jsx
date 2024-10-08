import React from 'react';
import '../styles/Components.css';

const Table = ({ cities, query }) => {
  if (!query) {
    return (
      <div className="no-results">
        Please search for a place.
      </div>
    );
  }

  if (cities.length === 0) {
    return (
      <div className="no-results">
        No results found.
      </div>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Place Name</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {cities.map((city, index) => (
          <tr key={city.id}>
            <td>{index + 1}</td>
            <td>{city.name}</td>
            <td className="country-cell">
              <img
                src={`https://flagsapi.com/${city.countryCode}/flat/24.png`}
                alt={`${city.country}`}
              />{' '}
              {city.country}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
