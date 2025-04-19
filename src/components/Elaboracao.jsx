import React, { useState, useContext, useRef } from 'react';
import useSearch from '../hooks/useSearch';
import { formatText } from '../utils/formatter';
import { DataContext } from '../context/DataContext';
import TextEditor from './TextEditor';
import '../styles/Elaboracao.css';

const Elaboracao = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [dispositivoSearch, setDispositivoSearch] = useState('');
    const [selectedTese, setSelectedTese] = useState(null);
    const [selectedDispositivo, setSelectedDispositivo] = useState(null);
    const [elaborationText, setElaborationText] = useState('');
    const [showTeseEditor, setShowTeseEditor] = useState(false);
    const [editorType, setEditorType] = useState(''); // '1grau' or '2grau'
    const [finalText, setFinalText] = useState('');
    const [teseResults, setTeseResults] = useState([]);
    const [dispositivoResults, setDispositivoResults] = useState([]);
    const editorRef = useRef(null);
    
    const { searchTeses, searchDispositivos } = useSearch();
    const { teses, dispositivos } = useContext(DataContext);
    
    const handleTeseSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        
        if (term.length >= 3) {
            const results = searchTeses(term);
            setTeseResults(results);
        } else {
            setTeseResults([]);
        }
    };

    const handleDispositivoSearch = (e) => {
        const term = e.target.value;
        setDispositivoSearch(term);
        
        if (term.length >= 3) {
            const results = searchDispositivos(term);
            setDispositivoResults(results);
        } else {
            setDispositivoResults([]);
        }
    };

    const handleTeseSelect = (tese) => {
        setSelectedTese(tese);
        setSearchTerm('');
        setTeseResults([]);
        
        // Adiciona o conteúdo da tese ao texto final
        const teseContent = `
            <h3>${tese.titulo}</h3>
            <div>${tese.tese}</div>
            <div><strong>Precedentes:</strong> ${tese.precedentes}</div>
        `;
        
        setFinalText(prevText => prevText + teseContent);
    };
    
    const handleDispositivoSelect = (dispositivo) => {
        setSelectedDispositivo(dispositivo);
        setDispositivoSearch('');
        setDispositivoResults([]);
        
        // Adiciona o dispositivo ao texto final
        setFinalText(prevText => prevText + `<div class="dispositivo">${dispositivo.texto}</div>`);
    };
    
    const handleGrauButtonClick = (grau) => {
        setEditorType(grau);
        setShowTeseEditor(true);
    };
    
    const handleEditorSubmit = (text) => {
        let formattedText = '';
        
        if (editorType === '1grau') {
            formattedText = `<div class="primeiro-grau">${text}</div>`;
        } else {
            formattedText = `<div class="segundo-grau">${text}</div>`;
        }
        
        setFinalText(prevText => prevText + formattedText);
        setShowTeseEditor(false);
        setElaborationText('');
    };
    
    const copyToClipboard = () => {
        // Remove HTML tags para copiar apenas o texto
        const tempElement = document.createElement('div');
        tempElement.innerHTML = finalText;
        const textToCopy = tempElement.textContent || tempElement.innerText;
        
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert('Texto copiado para a área de transferência!');
                // Limpar todos os campos
                setFinalText('');
                setSelectedTese(null);
                setSelectedDispositivo(null);
                setElaborationText('');
            })
            .catch(err => {
                console.error('Erro ao copiar texto: ', err);
            });
    };

    return (
        <div className="elaboracao-container">
            <h2>Elaboração de Documentos</h2>
            
            <div className="search-section">
                <h3>Buscar Teses</h3>
                <input 
                    type="text" 
                    value={searchTerm}
                    onChange={handleTeseSearch}
                    placeholder="Digite para buscar teses (mínimo 3 caracteres)"
                    className="search-input"
                />
                
                {teseResults.length > 0 && (
                    <div className="search-results">
                        {teseResults.map(tese => (
                            <div 
                                key={tese.id} 
                                className="result-item"
                                onClick={() => handleTeseSelect(tese)}
                            >
                                {tese.titulo}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            
            <div className="floating-buttons">
                <button 
                    onClick={() => handleGrauButtonClick('1grau')}
                    className="grau-button"
                >
                    1º Grau
                </button>
                <button 
                    onClick={() => handleGrauButtonClick('2grau')}
                    className="grau-button"
                >
                    2º Grau
                </button>
            </div>
            
            {showTeseEditor && (
                <div className="editor-container">
                    <TextEditor 
                        value={elaborationText}
                        onChange={setElaborationText}
                        ref={editorRef}
                    />
                    <button 
                        onClick={() => handleEditorSubmit(elaborationText)}
                        className="submit-button"
                    >
                        Incluir
                    </button>
                </div>
            )}
            
            <div className="search-section">
                <h3>Buscar Dispositivos</h3>
                <input 
                    type="text" 
                    value={dispositivoSearch}
                    onChange={handleDispositivoSearch}
                    placeholder="Digite para buscar dispositivos (mínimo 3 caracteres)"
                    className="search-input"
                />
                
                {dispositivoResults.length > 0 && (
                    <div className="search-results">
                        {dispositivoResults.map(dispositivo => (
                            <div 
                                key={dispositivo.id} 
                                className="result-item"
                                onClick={() => handleDispositivoSelect(dispositivo)}
                            >
                                {dispositivo.descricao || dispositivo.texto.substring(0, 50)}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            
            <div className="final-document">
                <h3>Documento Final</h3>
                <div 
                    className="document-content"
                    dangerouslySetInnerHTML={{ __html: finalText }}
                />
            </div>
            
            <div className="actions">
                <button 
                    onClick={copyToClipboard}
                    className="copy-button"
                >
                    Copiar Texto
                </button>
            </div>
        </div>
    );
};

export default Elaboracao;