import React from 'react';

const SearchResult = ({ results, onSelect }) => {
    return (
        <div className="search-results">
            {results.length > 0 ? (
                <ul>
                    {results.map((result, index) => (
                        <li key={index} onClick={() => onSelect(result)}>
                            {result.titulo}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
};

export default SearchResult;