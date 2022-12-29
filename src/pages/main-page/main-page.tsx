import Wizard from "../../components/wizard/wizard";
import WizardStep from "../../components/wizard/wizard-step";

function MainPage() {
  return (
    <Wizard>
      <WizardStep>
        <h1>Hello 1</h1>
      </WizardStep>
      <WizardStep>
        <h2>Hello 2</h2>
      </WizardStep>
      <WizardStep>
        <h3>Hello 3</h3>
      </WizardStep>
    </Wizard>
  );
}

export default MainPage;