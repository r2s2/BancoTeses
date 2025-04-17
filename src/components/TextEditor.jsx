import React, { useState } from 'react';

const TextEditor = ({ onTextChange }) => {
    const [text, setText] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [fontStyle, setFontStyle] = useState({ fontSize: '10px', fontStyle: 'normal', fontWeight: 'normal', textIndent: '0' });

    const handleTextChange = (e) => {
        setText(e.target.value);
        onTextChange(e.target.value);
    };

    const toggleItalic = () => {
        setFontStyle(prev => ({
            ...prev,
            fontStyle: prev.fontStyle === 'italic' ? 'normal' : 'italic'
        }));
    };

    const toggleBold = () => {
        setFontStyle(prev => ({
            ...prev,
            fontWeight: prev.fontWeight === 'bold' ? 'normal' : 'bold'
        }));
    };

    const increaseIndent = () => {
        setFontStyle(prev => ({
            ...prev,
            textIndent: '4cm'
        }));
    };

    const handleSubmit = () => {
        setIsEditing(false);
        setText('');
        setFontStyle({ fontSize: '10px', fontStyle: 'normal', fontWeight: 'normal', textIndent: '0' });
    };

    return (
        <div>
            {isEditing ? (
                <div>
                    <textarea
                        value={text}
                        onChange={handleTextChange}
                        style={{ fontSize: fontStyle.fontSize, fontStyle: fontStyle.fontStyle, fontWeight: fontStyle.fontWeight, textIndent: fontStyle.textIndent }}
                    />
                    <button onClick={toggleItalic}>Italic</button>
                    <button onClick={toggleBold}>Bold</button>
                    <button onClick={increaseIndent}>Increase Indent</button>
                    <button onClick={handleSubmit}>Incluir</button>
                </div>
            ) : (
                <button onClick={() => setIsEditing(true)}>Edit Text</button>
            )}
        </div>
    );
};

export default TextEditor;