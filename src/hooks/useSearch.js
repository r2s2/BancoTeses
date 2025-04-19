import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const useSearch = () => {
    const { teses, dispositivos } = useContext(DataContext);
    
    const searchTeses = (searchTerm) => {
        if (!searchTerm || searchTerm.length < 3) {
            return [];
        }
        
        // Dividir os termos de busca por espaço (AND lógico)
        const terms = searchTerm.toLowerCase().split(' ').filter(term => term.length >= 3);
        
        return teses.filter(tese => {
            // Todos os termos devem estar presentes em algum campo
            return terms.every(term => {
                return (
                    (tese.titulo && tese.titulo.toLowerCase().includes(term)) ||
                    (tese.tese && tese.tese.toLowerCase().includes(term)) ||
                    (tese.precedentes && tese.precedentes.toLowerCase().includes(term)) ||
                    (tese.tags && tese.tags.some(tag => tag.toLowerCase().includes(term)))
                );
            });
        });
    };
    
    const searchDispositivos = (searchTerm) => {
        if (!searchTerm || searchTerm.length < 3) {
            return [];
        }
        
        // Dividir os termos de busca por espaço (AND lógico)
        const terms = searchTerm.toLowerCase().split(' ').filter(term => term.length >= 3);
        
        return dispositivos.filter(dispositivo => {
            // Todos os termos devem estar presentes em algum campo
            return terms.every(term => {
                return (
                    (dispositivo.texto && dispositivo.texto.toLowerCase().includes(term)) ||
                    (dispositivo.descricao && dispositivo.descricao.toLowerCase().includes(term))
                );
            });
        });
    };
    
    return { searchTeses, searchDispositivos };
};

export default useSearch;