import React, { useState } from 'react';

const Cadastro = () => {
    const [titulo, setTitulo] = useState('');
    const [tese, setTese] = useState('');
    const [precedentes, setPrecedentes] = useState('');
    const [tags, setTags] = useState('');
    const [grupo, setGrupo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newTese = {
            id: Date.now(),
            titulo,
            tese,
            precedentes,
            tags,
            grupo,
            createdAt: new Date().toISOString(),
            perfil: 'user_profile_placeholder' // Replace with actual user profile logic
        };

        // Logic to save newTese to Teses.json
        // This could involve an API call or local storage depending on your setup

        // Clear the form
        setTitulo('');
        setTese('');
        setPrecedentes('');
        setTags('');
        setGrupo('');
    };

    return (
        <div>
            <h1>Cadastro</h1>
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
                        value={tese} 
                        onChange={(e) => setTese(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Precedentes:</label>
                    <textarea 
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