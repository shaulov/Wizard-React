import { FieldData } from '../types.ts';

export const getEmptyValuesByCurrentStep = (data: FieldData, step: number) => {
    return data.filter(item => {
        const isCurrentStep = item.step === step;
        const isEmpty = !item.value;

        return item?.isRequired && isCurrentStep && isEmpty;
    });
};