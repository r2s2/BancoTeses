import React, { createContext, useState } from 'react';

export const DocumentContext = createContext();

export const DocumentProvider = ({ children }) => {
  const [documents, setDocuments] = useState([]);
  const [currentDocument, setCurrentDocument] = useState(null);

  const addDocument = (document) => {
    setDocuments([...documents, document]);
  };

  const updateDocument = (updatedDocument) => {
    setDocuments(documents.map(doc => (doc.id === updatedDocument.id ? updatedDocument : doc)));
  };

  const deleteDocument = (documentId) => {
    setDocuments(documents.filter(doc => doc.id !== documentId));
  };

  const selectDocument = (documentId) => {
    const document = documents.find(doc => doc.id === documentId);
    setCurrentDocument(document);
  };

  return (
    <DocumentContext.Provider value={{
      documents,
      currentDocument,
      addDocument,
      updateDocument,
      deleteDocument,
      selectDocument
    }}>
      {children}
    </DocumentContext.Provider>
  );
};