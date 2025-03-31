export type FieldData = Array<Field>;

export type Field = {
    id: string;
    title: string;
    isRequired?: boolean;
    errorMessage?: string;
    step: number;
    value: string;
    type: string;
    placeholder: string;
    blurred: boolean;
};
