import { FormControl } from '../form-control';
import { Field, FieldData } from '../../types.ts';
import styles from './fieldset.module.css';

type Props = {
    data: FieldData;
    onUpdate: (value: Field) => void;
}

function Fieldset({ data, onUpdate }: Props) {
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

export { Fieldset };
