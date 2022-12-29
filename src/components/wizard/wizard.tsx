import { ReactNode } from "react";

type WizardProps = {
  children: ReactNode;
}

function Wizard ({ children }: WizardProps) {
  return (
    <div>
      {children}
    </div>
  );
}

export default Wizard;