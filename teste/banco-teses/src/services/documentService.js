import api from './api';

export const fetchDocuments = async () => {
  try {
    const response = await api.get('/documents');
    return response.data;
  } catch (error) {
    console.error('Error fetching documents:', error);
    throw error;
  }
};

export const saveDocument = async (document) => {
  try {
    const response = await api.post('/documents', document);
    return response.data;
  } catch (error) {
    console.error('Error saving document:', error);
    throw error;
  }
};

export const deleteDocument = async (documentId) => {
  try {
    await api.delete(`/documents/${documentId}`);
  } catch (error) {
    console.error('Error deleting document:', error);
    throw error;
  }
};