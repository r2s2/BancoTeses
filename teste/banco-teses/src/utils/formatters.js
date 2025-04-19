// This file exports utility functions for formatting data, such as dates or text.

export const formatDate = (date) => {
    if (!date) return '';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
};

export const formatText = (text) => {
    if (!text) return '';
    return text.trim().replace(/\s+/g, ' ');
};

export const capitalizeFirstLetter = (string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
};