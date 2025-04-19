import React, { useState, useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { useAuth } from '../context/AuthContext';

const CadastroDispositivos = () => {
    const [texto, setTexto] = useState('');
    const [descricao, setDescricao] = useState('');
    const [message, setMessage] = useState('');
    
    const { user } = useAuth();
    const { addDispositivo } = useContext(DataContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        try {
            addDispositivo({
                texto,
                descricao
            });
            
            setMessage('Dispositivo cadastrado com sucesso!');
            setTexto('');
            setDescricao('');
        } catch (error) {
            console.error('Erro:', error);
            setMessage('Erro ao cadastrar dispositivo.');
        }
    };

    return (
        <div className="cadastro-container">
            <h2>Cadastro de Dispositivos</h2>
            {message && <div className="message">{message}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Descrição:</label>
                    <input
                        type="text"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Texto do Dispositivo:</label>
                    <textarea
                        className="text-area"
                        value={texto}
                        onChange={(e) => setTexto(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadastroDispositivos;