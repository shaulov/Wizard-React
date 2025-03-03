import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app';
import { ValidationProvider } from './components/validation-context';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ValidationProvider>
            <App />
        </ValidationProvider>
    </StrictMode>
);
