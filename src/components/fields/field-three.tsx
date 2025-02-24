import styles from './fields.module.css';

function FieldThree() {
    return (
        <fieldset>
            <div className={styles.formControl}>
                <label htmlFor="skills">Skills (Optional)</label>
                <textarea
                    id="skills"
                    name="skills"
                    rows={4}
                    placeholder="Enter your skills"
                ></textarea>
            </div>
            <div className={styles.formControl}>
                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms">
                    I agree to the terms and conditions{' '}
                    <span style={{ color: 'red' }}>*</span>
                </label>
            </div>
        </fieldset>
    );
}

export { FieldThree };
