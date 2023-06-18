import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { geoApiOptions, GEO_API_URl } from '../../api';
import './Search.css';
const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `${GEO_API_URl}/cities?minPopulation=100000&namePrefix=${inputValue}`,
        geoApiOptions
      );
      const response_1 = await response.json();
      return {
        options: response_1.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          };
        }),
      };
    } catch (err) {
      return console.error(err);
    }
  };
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: 'none',
      fontsize: '18px',
      boxShadow: 'none',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#3699FF' : null,
      color: state.isFocused ? 'white' : null,
    }),
  };

  return (
    <div className="search-container">
      <AsyncPaginate
        className="search-element"
        placeholder="Search for City"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        styles={customStyles}
      />
    </div>
  );
};
export default Search;
