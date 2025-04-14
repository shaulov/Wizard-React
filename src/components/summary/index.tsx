import { FieldData } from '../../types.ts';
import styles from './summary.module.css';

type Props = {
    data: FieldData;
}

function Summary({ data }: Props) {
    return (
        <div className={styles.container}>
            {data.filter(item => item.type !== 'checkbox').map((item) => (
                <div key={item.id} className={styles.summary}>
                    <p>{item.title}: </p>
                    <p>
                        {item.type === 'file' ? 'File' : String(item.value)}
                        {item.value === '' && 'No value'}
                    </p>
                    <button type="button" className={styles.editBtn} id={`${item.id}-edit`}>
                        <span>✎</span>
                        <span>Edit</span>
                    </button>
                </div>
            ))}
        </div>
    );
}

export { Summary };