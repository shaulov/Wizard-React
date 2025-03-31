import { FieldOne } from '../fields/field-one.tsx';
import { FieldTwo } from '../fields/field-two';
import { FieldThree } from '../fields/field-three';
import { Field, FieldData } from '../../types.ts';

type Props = {
    step: number;
    data: FieldData;
    onUpdate: (value: Field) => void;
}

function StepContainer({ step, data, onUpdate }: Props) {
    switch (step) {
        case 0:
            return <FieldOne data={data} onUpdate={onUpdate} />;
        case 1:
            return <FieldTwo />;
        case 2:
            return <FieldThree />;
        default:
            return null;
    }
}

export { StepContainer };