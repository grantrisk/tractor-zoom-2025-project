import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const container = document.getElementById('root');

// Guard clause: Check if the element is null
if (!container) {
    throw new Error("Failed to find the root element with ID 'root'");
}

// createRoot lets you create a root to display React components inside a browser DOM node.
// Since we checked for null, TypeScript knows 'container' is an HTMLElement here.
createRoot(container).render(
  // <StrictMode> lets you find common bugs in your components early during development.
  // see https://react.dev/reference/react/StrictMode#
  // Although the Strict Mode checks only run in development, they help you find bugs that already exist in your code but can be tricky to reliably reproduce in production. Strict Mode lets you fix bugs before your users report them.
  <StrictMode>
    <App />
  </StrictMode>,
)
