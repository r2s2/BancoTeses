import axios from 'axios';

const API_BASE_URL = 'http://your-api-url.com/api'; // Replace with your actual API base URL

export const fetchDocuments = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/documents`);
    return response.data;
  } catch (error) {
    console.error('Error fetching documents:', error);
    throw error;
  }
};

export const saveDocument = async (document) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/documents`, document);
    return response.data;
  } catch (error) {
    console.error('Error saving document:', error);
    throw error;
  }
};

export const deleteDocument = async (documentId) => {
  try {
    await axios.delete(`${API_BASE_URL}/documents/${documentId}`);
  } catch (error) {
    console.error('Error deleting document:', error);
    throw error;
  }
};