import { FieldData } from '../../types.ts';
import styles from './summary.module.css';

type Props = {
    data: FieldData;
    setStep: (value: number) => void;
}

function Summary({ data, setStep }: Props) {
    return (
        <div className={styles.container}>
            {data.filter(item => item.type !== 'checkbox').map((item) => (
                <div key={item.id} className={styles.summary}>
                    <p>{item.title}: </p>
                    <p>
                        {item.type === 'file' ? 'File' : String(item.value)}
                        {item.value === '' && 'No value'}
                    </p>
                    <button
                        className={styles.editBtn}
                        type="button"
                        id={`${item.id}-edit`}
                        onClick={() => setStep(item.step)}
                    >
                        <span>✎</span>
                        <span>Edit</span>
                    </button>
                </div>
            ))}
        </div>
    );
}

export { Summary };