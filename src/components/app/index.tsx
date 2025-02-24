import { ButtonControls } from "../button-controls";
import "./app.css";

function Index() {
  return (
    <form id="myForm">
      <fieldset id="one">
        <div className="form-group">
          <div className="form-control">
            <label htmlFor="name">
              Name <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
            />
          </div>

          <div className="form-control">
            <label htmlFor="idNum">
              ID number <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="number"
              id="idNum"
              name="idNum"
              placeholder="Enter your ID number"
            />
          </div>
        </div>

        <div className="form-group">
          <div className="form-control">
            <label htmlFor="email">
              Email <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-control">
            <label htmlFor="birthdate">
              Date of Birth <span style={{ color: "red" }}>*</span>
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

      <fieldset id="two">
        <div className="form-control">
          <label htmlFor="document">
            Upload CV <span style={{ color: "red" }}>*</span>
          </label>
          <input type="file" name="document" id="document" />
        </div>

        <div className="form-control">
          <label htmlFor="department">
            Department <span style={{ color: "red" }}>*</span>
          </label>
          <select id="department" name="department">
            <option value="">Select a department</option>
            <option value="hr">Human Resources</option>
            <option value="it">Information Technology</option>
            <option value="finance">Finance</option>
          </select>
        </div>
      </fieldset>

      <fieldset id="three">
        <div className="form-control">
          <label htmlFor="skills">Skills (Optional)</label>
          <textarea
            id="skills"
            name="skills"
            rows={4}
            placeholder="Enter your skills"
          ></textarea>
        </div>
        <div className="form-control">
          <input type="checkbox" name="terms" id="terms" />
          <label htmlFor="terms">
            I agree to the terms and conditions{" "}
            <span style={{ color: "red" }}>*</span>
          </label>
        </div>

        <button id="btn" type="submit">
          Confirm and Submit
        </button>
      </fieldset>

      <ButtonControls />
    </form>
  );
}

export default Index;
