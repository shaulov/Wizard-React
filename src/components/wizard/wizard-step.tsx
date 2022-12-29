import { ReactNode } from "react";

type WizardStepProps = {
  children: ReactNode;
}

function WizardStep ({ children }: WizardStepProps) {
  return children;
}

export default WizardStep;