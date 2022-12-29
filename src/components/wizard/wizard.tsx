import { ReactNode, Children, useState } from "react";
import './wizard.css';

type WizardProps = {
  children: ReactNode;
}

function Wizard ({ children }: WizardProps) {
  const [activeStep, setActiveStep] = useState(0)
  const steps = Children.toArray(children);
  const currentStep = steps[activeStep];
  const lastStep = steps.length - 1;

  const onNextClick = () => {
    setActiveStep(activeStep => (Math.min(activeStep + 1, lastStep)));
  }

  const onPrevClick = () => {
    setActiveStep(activeStep => (Math.max(activeStep - 1, 0)));
  }

  return (
    <div className="wizard-container">
      {currentStep}
      <div className="control-buttons">
        {activeStep > 0 && <button onClick={onPrevClick} type="button">Prev</button>}
        <button onClick={onNextClick} type="button">Next</button>
      </div>
    </div>
  );
}

export default Wizard;