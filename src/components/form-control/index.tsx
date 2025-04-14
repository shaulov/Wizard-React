import { useState, type ChangeEvent } from 'react';
import { useValidation } from '../validation-context';
import { Field } from '../../types.ts';
import styles from './form-control.module.css';

type Props = {
    data: Field;
    onUpdate: (value: Field) => void;
}

function FormControl({ data, onUpdate }: Props) {
    const [value, setValue] = useState(data.value);
    const { updateValidation } = useValidation();

    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        let value: string | boolean | File = evt.target.value;

        if (evt.target.type === 'file') {
            value = evt.target.files?.[0] ?? '';
        }

        if (evt.target.type === 'checkbox') {
            value = evt.target.checked;
        }

        setValue(value);
        onUpdate({ ...data, value });
    };

    const handleBlur = (evt: ChangeEvent<HTMLInputElement>) => {
        onUpdate({ ...data, blurred: !evt.target.value });
        updateValidation(!evt.target.value);
    };

    const commonProps = Object.assign({
        type: data.type,
        id: data.id,
        name: data.id,
        placeholder: data.placeholder,
        accept: data.accept,
        onChange: handleChange,
        onBlur: handleBlur,
    }, data.type !== 'file' && { value: value as string });

    return (
        <div>
            <label htmlFor={data.id}>
                {data.title}
                {data.isRequired && <span style={{ color: 'red' }}>*</span>}
            </label>
            <input {...commonProps} />
            {data?.isRequired && !data.value && data.blurred && (
                <span className={styles.errorMessage}>
                    {data?.errorMessage}
                </span>
            )}
        </div>
    );
}

export { FormControl };