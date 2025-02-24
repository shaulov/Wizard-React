import styles from './fields.module.css';

function FieldTwo() {
    return (
        <fieldset>
            <div className={styles.formControl}>
                <label htmlFor="document">
                    Upload CV <span style={{ color: 'red' }}>*</span>
                </label>
                <input type="file" name="document" id="document" />
            </div>

            <div className={styles.formControl}>
                <label htmlFor="department">
                    Department <span style={{ color: 'red' }}>*</span>
                </label>
                <select id="department" name="department">
                    <option value="">Select a department</option>
                    <option value="hr">Human Resources</option>
                    <option value="it">Information Technology</option>
                    <option value="finance">Finance</option>
                </select>
            </div>
        </fieldset>
    );
}

export { FieldTwo };
