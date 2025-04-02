import { Fieldset } from '../fieldset';
import { Field, FieldData } from '../../types.ts';

type Props = {
    step: number;
    data: FieldData;
    onUpdate: (value: Field) => void;
}

function StepContainer({ step, data, onUpdate }: Props) {
    const currentDataByStep = data.filter(item => item.step === step);

    return (
        <Fieldset data={currentDataByStep} onUpdate={onUpdate} />
    );
}

export { StepContainer };