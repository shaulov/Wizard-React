import styles from './button-controls.module.css';

type Props = {
    step: number;
    stepsLength: number;
    onPreviousClick: () => void;
    onNextClick: () => void;
};

function ButtonControls({
    step,
    stepsLength,
    onPreviousClick,
    onNextClick,
}: Props) {
    const stepInfoTitle = `Step ${step + 1} of ${stepsLength}`;
    const handleNextClick = () => {
        if (step === stepsLength - 1) return;

        onNextClick();
    };

    return (
        <div className={styles.buttonControls}>
            {step > 0 && (
                <button
                    className={styles.button}
                    type="button"
                    id="prev"
                    onClick={onPreviousClick}
                >
                    Previous
                </button>
            )}
            <span id="stepInfo">{stepInfoTitle}</span>
            <button
                className={styles.button}
                type="button"
                id="next"
                onClick={handleNextClick}
            >
                Next
            </button>
        </div>
    );
}

export { ButtonControls };
