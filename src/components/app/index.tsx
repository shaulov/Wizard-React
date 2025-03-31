import { useCallback, useState } from 'react';
import { useValidation } from '../validation-context';
import { StepContainer } from '../step-container';
import { ButtonControls } from '../button-controls';
import { Field, FieldData } from '../../types.ts';
import { fieldsData, STEP_COUNT } from '../../const.ts';
import './app.css';

function App() {
    const [step, setStep] = useState(0);
    const [data, setData] = useState<FieldData>(() =>
        fieldsData.map(item => ({ ...item, blurred: false, }))
    );
    const { hasValidationError } = useValidation();

    const handlePrevStep = useCallback(() => {
        if (step !== 0) {
            setStep((prev) => prev - 1);
        }
    }, [step]);

    const handleNextStep = useCallback(() => {
        if (hasValidationError) return;

        setStep((prev) => prev + 1);
    }, [hasValidationError]);

    const handleUpdate = (value: Field) => {
        const updatedValueIndex = data.findIndex(item => item.id === value.id);
        const newArray = data.with(updatedValueIndex, value);
        setData(newArray);
    }

    return (
        <form id="myForm">
            <StepContainer
                step={step}
                data={data}
                onUpdate={handleUpdate}
            />

            {step === STEP_COUNT - 1 && (
                <button type="submit">Confirm and Submit</button>
            )}

            <ButtonControls
                step={step}
                stepsLength={STEP_COUNT}
                onPreviousClick={handlePrevStep}
                onNextClick={handleNextStep}
            />
        </form>
    );
}

export default App;
