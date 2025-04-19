import React, { forwardRef, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import '../styles/TextEditor.css';

const TextEditor = forwardRef(({ value, onChange }, ref) => {
  return (
    <div className="text-editor-container">
      <Editor
        apiKey="your-tinymce-api-key" // Obtenha uma chave gratuita em https://www.tiny.cloud/
        onInit={(evt, editor) => {
          if (ref) {
            ref.current = editor;
          }
        }}
        value={value}
        onEditorChange={onChange}
        init={{
          height: 300,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Arial,sans-serif; font-size:14px }'
        }}
      />
    </div>
  );
});

export default TextEditor;