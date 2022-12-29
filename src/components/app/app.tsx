import Wizard from '../wizard/wizard';
import './app.css';

function App(): JSX.Element {
  return (
    <div className="app-container">
      <Wizard>
        <p>Hello World</p>
      </Wizard>
    </div>
  );
}

export default App;