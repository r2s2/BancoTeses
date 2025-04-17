function formatText(text, options) {
    let formattedText = text;

    if (options.bold) {
        formattedText = `<strong>${formattedText}</strong>`;
    }
    if (options.italic) {
        formattedText = `<em>${formattedText}</em>`;
    }
    if (options.indent) {
        formattedText = `<div style="margin-left: 4cm;">${formattedText}</div>`;
    }
    if (options.font) {
        formattedText = `<span style="font-family: Arial; font-size: 10px;">${formattedText}</span>`;
    }

    return formattedText;
}

function clearFormatting(text) {
    return text.replace(/<\/?strong>|<\/?em>|<div[^>]*>|<\/div>|<\/?span[^>]*>/g, '');
}

export { formatText, clearFormatting };