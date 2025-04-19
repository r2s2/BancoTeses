import React, { useState, useContext } from 'react';
import { useAuth } from '../context/AuthContext';
import { DataContext } from '../context/DataContext';
import { checkPermission } from '../utils/permissions';

const Cadastro = () => {
    const [titulo, setTitulo] = useState('');
    const [tese, setTese] = useState('');
    const [precedentes, setPrecedentes] = useState('');
    const [tags, setTags] = useState('');
    const [grupo, setGrupo] = useState('');
    const [message, setMessage] = useState('');
    
    const { user } = useAuth();
    const { addTese } = useContext(DataContext);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!user || !checkPermission(user.role, 'canCreate')) {
            setMessage('Você não tem permissão para criar teses.');
            return;
        }
        
        const newTese = {
            id: Date.now(),
            titulo,
            tese,
            precedentes,
            tags,
            grupo,
            createdAt: new Date().toISOString(),
            createdBy: user ? user.username : 'anonymous'
        };
        
        addTese(newTese);
        
        // Clear the form
        setTitulo('');
        setTese('');
        setPrecedentes('');
        setTags('');
        setGrupo('');
        setMessage('Tese cadastrada com sucesso!');
    };

    return (
        <div>
            <h1>Cadastro de Teses</h1>
            {message && <div className="message">{message}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título:</label>
                    <input 
                        type="text" 
                        value={titulo} 
                        onChange={(e) => setTitulo(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Tese:</label>
                    <textarea 
                        className="text-area"
                        value={tese} 
                        onChange={(e) => setTese(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Precedentes:</label>
                    <textarea 
                        className="text-area"
                        value={precedentes} 
                        onChange={(e) => setPrecedentes(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Tags:</label>
                    <input 
                        type="text" 
                        value={tags} 
                        onChange={(e) => setTags(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Grupo:</label>
                    <input 
                        type="text" 
                        value={grupo} 
                        onChange={(e) => setGrupo(e.target.value)} 
                    />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default Cadastro;