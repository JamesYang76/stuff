import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./components/App";
import { HashRouter } from 'react-router-dom';

const app = ReactDOM.createRoot(document.getElementById('app')!);
app.render(
  <HashRouter>
    <App />
  </HashRouter>
);
