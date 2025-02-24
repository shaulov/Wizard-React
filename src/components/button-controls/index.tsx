import styles from "./button-controls.module.css";

function ButtonControls() {
  return (
    <div className={styles.buttonControls}>
      <button className={styles.button} type="button" id="prev">
        Previous
      </button>
      <span id="stepInfo"></span>
      <button className={styles.button} type="button" id="next">
        Next
      </button>
    </div>
  );
}

export { ButtonControls };
