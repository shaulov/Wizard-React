import styles from './fields.module.css';

function FieldOne() {
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
                    />
                </div>

                <div className={styles.formControl}>
                    <label htmlFor="idNum">
                        ID number <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                        type="number"
                        id="idNum"
                        name="idNum"
                        placeholder="Enter your ID number"
                    />
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
                    />
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
                    />
                </div>
            </div>
        </fieldset>
    );
}

export { FieldOne };
