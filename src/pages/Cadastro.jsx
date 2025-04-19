import React, { useState, useContext } from 'react';
import { DataContext } from '../context/DataContext';

const Cadastro = () => {
  const [titulo, setTitulo] = useState('');
  const [tese, setTese] = useState('');
  const [precedentes, setPrecedentes] = useState('');
  const [tags, setTags] = useState('');
  const [grupo, setGrupo] = useState('');
  const [message, setMessage] = useState('');

  const { addTese } = useContext(DataContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTese = {
      titulo,
      tese,
      precedentes,
      tags,
      grupo,
    };

    addTese(newTese);

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