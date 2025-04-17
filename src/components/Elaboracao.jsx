import React, { useState, useEffect } from 'react';
import { useSearch } from '../hooks/useSearch';
import TextEditor from './TextEditor';

const Elaboracao = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedTese, setSelectedTese] = useState(null);
    const [editorContent, setEditorContent] = useState('');
    const [showEditor, setShowEditor] = useState(false);
    const [selectedDispositivo, setSelectedDispositivo] = useState(null);
    const { searchTeses, searchDispositivos } = useSearch();

    useEffect(() => {
        if (searchTerm.length >= 3) {
            const results = searchTeses(searchTerm);
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    }, [searchTerm, searchTeses]);

    const handleTeseSelect = (tese) => {
        setSelectedTese(tese);
        setEditorContent('');
        setShowEditor(false);
    };

    const handleIncludeText = () => {
        if (editorContent) {
            setSelectedTese((prev) => ({
                ...prev,
                elaboracao: [...(prev.elaboracao || []), editorContent],
            }));
            setEditorContent('');
            setShowEditor(false);
        }
    };

    const handleDispositivoSearch = (term) => {
        if (term.length >= 3) {
            return searchDispositivos(term);
        }
        return [];
    };

    const handleCopyText = () => {
        const textToCopy = selectedTese ? `${selectedTese.titulo}\n${selectedTese.tese}\n${selectedTese.precedentes}\n${editorContent}` : '';
        navigator.clipboard.writeText(textToCopy);
        setSelectedTese(null);
        setEditorContent('');
        setSearchTerm('');
        setSearchResults([]);
    };

    return (
        <div>
            <h1>Elaboração</h1>
            <input
                type="text"
                placeholder="Pesquisar Tese"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {searchResults.map((tese) => (
                    <li key={tese.id} onClick={() => handleTeseSelect(tese)}>
                        {tese.titulo}
                    </li>
                ))}
            </ul>
            {selectedTese && (
                <div>
                    <h2>{selectedTese.titulo}</h2>
                    <p>{selectedTese.tese}</p>
                    <p>{selectedTese.precedentes}</p>
                    <button onClick={() => setShowEditor(!showEditor)}>
                        {showEditor ? 'Cancelar' : 'Adicionar Texto'}
                    </button>
                    {showEditor && (
                        <div>
                            <TextEditor content={editorContent} setContent={setEditorContent} />
                            <button onClick={handleIncludeText}>Incluir</button>
                        </div>
                    )}
                </div>
            )}
            <button onClick={handleCopyText}>Copiar Texto</button>
        </div>
    );
};

export default Elaboracao;