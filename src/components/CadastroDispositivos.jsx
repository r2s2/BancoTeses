import React, { useState } from 'react';

const CadastroDispositivos = () => {
    const [dispositivo, setDispositivo] = useState('');

    const handleChange = (e) => {
        setDispositivo(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const timestamp = new Date().toISOString();
        const newDevice = { id: timestamp, dispositivo };

        try {
            const response = await fetch('/data/Dispositivo.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newDevice),
            });

            if (response.ok) {
                alert('Dispositivo cadastrado com sucesso!');
                setDispositivo('');
            } else {
                alert('Erro ao cadastrar dispositivo.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao cadastrar dispositivo.');
        }
    };

    return (
        <div>
            <h2>Cadastro de Dispositivos</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Dispositivo:
                    <input
                        type="text"
                        value={dispositivo}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadastroDispositivos;