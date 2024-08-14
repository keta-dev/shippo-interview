import Button from './components/Button/Button'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import Input from './components/Input/Input'
import Options from './components/Options/Options'
import Toggle from './components/Toggle/Toggle'
import ToggleCard from './components/ToggleCard/ToggleCard'
import Typography from './components/Typography/Typography'

function App() {

  return (
    <>
      <Header />
      <main className="main">
        <div className="heading">
          <Typography variant="h1">Create customized User signup forms</Typography>
          <Typography textSize="large">Be in control of data required for users to sign up</Typography>
        </div>

        <Card cardText='Select your prefered option'>
          <Options options={[
            {label: "Radio", value: "Radio", active: true},
            {label: "Checkbox", value: "Checkbox"},
            {label: "Multiple files", value: "Multiple files"},
            {label: "Email", value: "Email" },
          ]} />

          <Input
            type="text"
            value="What expertise or skills do you possess that you are willing to share with mentees? *"
          />

          <div className="form-row">
            <Typography>Is required?</Typography>
            <Toggle checked={true} />
          </div>

          <div className="form-group">
            <div className="form-item">
              <Input type="text" placeholder="Empathy" />
              <span>X</span>
            </div>
            <div className="form-item">
              <Input type="text" placeholder="Patience" />
              <span>X</span>
            </div>
            <div className="form-item">
              <Input type="text" placeholder="Others" />
              <span>X</span>
            </div>
            <div className="form-item">
              <Button variant="secondary">Add Option</Button>
              or
              <Button variant="secondary">Add others</Button>
            </div>
          </div>
        </Card>

        <ToggleCard checked headerText="Is mentor acceptance criterion?">
          <Typography textSize="small">
            Criteria used by the system to determine eligibility for mentorship in a cohort session based on the information provided in the form field
          </Typography>
        </ToggleCard>

        <ToggleCard checked headerText="Is matching criterion?">
          <Typography textSize="small">
            The system will utilize the designated form field to match mentors for a cohort session
          </Typography>
        </ToggleCard>

        <div className="footer">
          <Button variant="outline">Delete</Button>
          <Button>Add more questions</Button>
        </div>
      </main>
    </>
  )
}

export default App
