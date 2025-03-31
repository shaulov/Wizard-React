export const fieldsData = [
    {
        id: 'name',
        title: 'Name',
        isRequired: true,
        errorMessage: 'Name is required',
        value: '',
        type: 'string',
        placeholder: 'Enter your name',
        step: 0,
    },
    {
        id: 'idNumber',
        title: 'ID Number',
        isRequired: true,
        errorMessage: 'ID number is required',
        value: '',
        type: 'number',
        placeholder: 'Enter your number',
        step: 0,
    },
    {
        id: 'email',
        title: 'Email',
        isRequired: true,
        errorMessage: 'Email is required',
        value: '',
        type: 'email',
        placeholder: 'Enter your email',
        step: 0,
    },
    {
        id: 'birthday',
        title: 'Birth date',
        isRequired: true,
        errorMessage: 'Date of Birth is required',
        value: '',
        type: 'date',
        placeholder: 'Enter your birth date',
        step: 0,
    }
];

export const STEP_COUNT = 3;