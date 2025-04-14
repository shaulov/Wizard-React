import { Fieldset } from '../fieldset';
import { Summary } from '../summary';
import { Field, FieldData } from '../../types.ts';
import { STEP_COUNT } from '../../const.ts';

type Props = {
    step: number;
    data: FieldData;
    setStep: (step: number) => void;
    onUpdate: (value: Field) => void;
}

function StepContainer({ step, data, setStep, onUpdate }: Props) {
    const currentDataByStep = data.filter(item => item.step === step);

    return (
        <>
            {step < STEP_COUNT ? (
                <Fieldset data={currentDataByStep} onUpdate={onUpdate} />
            ) : (
                <Summary data={data} setStep={setStep} />
            )}
        </>
    );
}

export { StepContainer };