import React from 'react';
import { Search, Filter } from 'lucide-react';
import './SearchFilters.css';

const SearchFilters = ({ searchTerm, setSearchTerm, sortYear, setSortYear }) => {
  return (
    <div className="search-filters glass-panel">
      <div className="search-box">
        <Search className="search-icon" size={20} />
        <input 
          type="text" 
          placeholder="Search for movies..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="filter-box">
        <Filter className="filter-icon" size={20} />
        <select 
          value={sortYear || ""}
          onChange={(e) => setSortYear(e.target.value)}
        >
          <option value="">Sort By Year</option>
          <option value="asc">Oldest First</option>
          <option value="desc">Newest First</option>
        </select>
      </div>
    </div>
  );
};

export default SearchFilters;
