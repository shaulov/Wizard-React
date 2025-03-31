import { FormControl } from '../form-control';
import { Field, FieldData } from '../../types.ts';
import styles from './fields.module.css';

type Props = {
    data: FieldData;
    onUpdate: (value: Field) => void;
}

function FieldOne({ data, onUpdate }: Props) {
    return (
        <fieldset>
            <div className={styles.formGroup}>
                {data.map(item => (
                    <FormControl key={item.id} data={item} onUpdate={onUpdate} />
                ))}
            </div>
        </fieldset>
    );
}

export { FieldOne };
