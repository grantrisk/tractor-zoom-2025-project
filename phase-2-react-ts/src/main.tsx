import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'


// createRoot lets you create a root to display React components inside a browser DOM node.
createRoot(document.getElementById('root')).render(
  // <StrictMode> lets you find common bugs in your components early during development.
  // see https://react.dev/reference/react/StrictMode#
  // Although the Strict Mode checks only run in development, they help you find bugs that already exist in your code but can be tricky to reliably reproduce in production. Strict Mode lets you fix bugs before your users report them.
  <StrictMode>
    <App />
  </StrictMode>,
)
