import { useCallback, useState } from 'react';
import { FieldOne } from '../fields/field-one.tsx';
import { FieldTwo } from '../fields/field-two';
import { FieldThree } from '../fields/field-three';
import { ButtonControls } from '../button-controls';
import './app.css';

const steps = [
    <FieldOne />,
    <FieldTwo />,
    <FieldThree />
];

function App() {
    const [step, setStep] = useState(0);

    const handlePrevStep = useCallback(() => {
        if (step !== 0) {
            setStep((prev) => prev - 1);
        }
    }, [step]);

    const handleNextStep = useCallback(() => {
        setStep((prev) => prev + 1);
    }, []);

    return (
        <form id="myForm">
            {steps[step]}

            {step === steps.length - 1 && (
                <button type="submit">Confirm and Submit</button>
            )}

            <ButtonControls
                step={step}
                stepsLength={steps.length}
                onPreviousClick={handlePrevStep}
                onNextClick={handleNextStep}
            />
        </form>
    );
}

export default App;
