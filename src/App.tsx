import './App.css'
import { AppProviders } from './providers/AppProviders'
import MuiMode from './components/mui/MuiMode'

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
      </div>
    </AppProviders>
  )
}

export default App
