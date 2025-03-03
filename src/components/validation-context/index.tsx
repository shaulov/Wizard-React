import {
    createContext,
    useContext,
    useState,
    useCallback,
    type ReactNode,
} from 'react';

type ValidationContextType = {
    hasValidationError: boolean;
    updateValidation: (value: boolean) => void;
};

const ValidationContext = createContext({} as ValidationContextType);

function ValidationProvider({ children }: { children: ReactNode }) {
    const [hasValidationError, setHasValidationError] = useState(false);
    const updateValidation = useCallback((value: boolean) => {
        setHasValidationError(value);
    }, []);

    const value: ValidationContextType = {
        hasValidationError,
        updateValidation,
    };
    return (
        <ValidationContext.Provider value={value}>
            {children}
        </ValidationContext.Provider>
    );
}

function useValidation() {
    const context = useContext(ValidationContext);

    if (context === undefined) {
        throw new Error('useCount must be used within a CountProvider');
    }

    return context;
}

export { ValidationProvider, useValidation };
