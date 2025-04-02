import { FieldData } from '../types.ts';

export const setBlurredByStep = (data: FieldData, step: number) => {
    return data.map(item => {
        const isCurrentStep = item.step === step;
        const isEmpty = !item.value;

        if (isCurrentStep && isEmpty) {
            return { ...item, blurred: true };
        }

        return item;
    });
};