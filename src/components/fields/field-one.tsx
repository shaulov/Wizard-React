import { useState, type ChangeEvent } from 'react';
import { useValidation } from '../validation-context';
import { getRequiredMessage } from '../../utils';
import { FieldData } from '../../types.ts';
import styles from './fields.module.css';

function FieldOne() {
    const { updateValidation } = useValidation();
    const [data, setData] = useState<FieldData>({
        name: {
            value: '',
            blurred: false,
        },
        idNumber: {
            value: '',
            blurred: false,
        },
        email: {
            value: '',
            blurred: false,
        },
        birthdate: {
            value: '',
            blurred: false,
        },
    });

    const nameRequired = getRequiredMessage('name');
    const idNumberRequired = getRequiredMessage('idNumber');
    const emailRequired = getRequiredMessage('email');
    const birthdateRequired = getRequiredMessage('birthdate');

    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        const field = data[evt.target.name];
        setData({
            ...data,
            [evt.target.name]: { ...field, value: evt.target.value },
        });
    };

    const handleBlur = (evt: ChangeEvent<HTMLInputElement>) => {
        const field = data[evt.target.name];

        setData({
            ...data,
            [evt.target.name]: { ...field, blurred: !field.value },
        });

        if (!field.value) {
            updateValidation(true);
        }
    };

    return (
        <fieldset>
            <div className={styles.formGroup}>
                <div className={styles.formControl}>
                    <label htmlFor="name">
                        Name <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={data.name.value}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {nameRequired && !data.name.value && data.name.blurred && (
                        <span className={styles.errorMessage}>
                            {nameRequired}
                        </span>
                    )}
                </div>

                <div className={styles.formControl}>
                    <label htmlFor="idNumber">
                        ID number <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                        type="number"
                        id="idNumber"
                        name="idNumber"
                        placeholder="Enter your ID number"
                        value={data.idNumber.value}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {idNumberRequired &&
                        !data.idNumber.value &&
                        data.idNumber.blurred && (
                            <span className={styles.errorMessage}>
                                {idNumberRequired}
                            </span>
                        )}
                </div>
            </div>

            <div className={styles.formGroup}>
                <div className={styles.formControl}>
                    <label htmlFor="email">
                        Email <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={data.email.value}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {emailRequired &&
                        !data.email.value &&
                        data.email.blurred && (
                            <span className={styles.errorMessage}>
                                {emailRequired}
                            </span>
                        )}
                </div>

                <div className={styles.formControl}>
                    <label htmlFor="birthdate">
                        Date of Birth <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                        type="date"
                        id="birthdate"
                        name="birthdate"
                        max="2006-10-01"
                        min="1924-01-01"
                        value={data.birthdate.value}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {birthdateRequired &&
                        !data.birthdate.value &&
                        data.birthdate.blurred && (
                            <span className={styles.errorMessage}>
                                {birthdateRequired}
                            </span>
                        )}
                </div>
            </div>
        </fieldset>
    );
}

export { FieldOne };
