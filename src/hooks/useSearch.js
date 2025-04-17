import { useState, useEffect } from 'react';

const useSearch = (dataUrl) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(dataUrl);
            const data = await response.json();
            return data;
        };

        const handleSearch = async () => {
            if (searchTerm.length >= 3) {
                const data = await fetchData();
                const filteredResults = data.filter(item =>
                    item.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.tese.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.precedentes.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setResults(filteredResults);
            } else {
                setResults([]);
            }
        };

        handleSearch();
    }, [searchTerm, dataUrl]);

    return { searchTerm, setSearchTerm, results };
};

export default useSearch;