# Teses App

Teses App is a React application built with Vite that allows users to manage and elaborate on legal theses and devices. The application consists of three main components: Cadastro, Cadastro de dispositivos, and Elaboração.

## Features

- **Cadastro**: A form to submit legal theses with fields for Título, Tese, Precedentes, Tags, and Grupo. The submitted data is saved to `Teses.json`.
- **Cadastro de dispositivos**: A form to submit devices, saving the data to `Dispositivo.json`.
- **Elaboração**: A search functionality that queries `Teses.json` and displays results dynamically. Users can select a thesis to view its details and include additional text with formatting options.
- **Text Formatting**: Users can format text as Arial, italic, and with indentation.
- **User Profiles**: The application supports different user profiles with varying permissions for creating and editing content.

## Project Structure

```
teses-app
├── src
│   ├── main.jsx
│   ├── App.jsx
│   ├── components
│   │   ├── Cadastro.jsx
│   │   ├── CadastroDispositivos.jsx
│   │   ├── Elaboracao.jsx
│   │   ├── Navbar.jsx
│   │   ├── SearchResult.jsx
│   │   └── TextEditor.jsx
│   ├── hooks
│   │   ├── useAuth.js
│   │   └── useSearch.js
│   ├── context
│   │   ├── AuthContext.jsx
│   │   └── DataContext.jsx
│   ├── data
│   │   ├── Teses.json
│   │   └── Dispositivo.json
│   ├── utils
│   │   ├── formatter.js
│   │   └── permissions.js
│   ├── styles
│   │   └── index.css
│   └── assets
├── public
│   └── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/teses-app.git
   ```
2. Navigate to the project directory:
   ```
   cd teses-app
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## Usage

- Navigate to the Cadastro page to submit new theses.
- Use the Cadastro de dispositivos page to add new devices.
- Access the Elaboração page to search for and elaborate on existing theses.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License.