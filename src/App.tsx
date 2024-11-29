
import './App.css';


import { ThemeProvider } from "./components/ThemeProvider"; // Import your custom ThemeProvider
import { PatientProfile } from "./components/PatientProfile"; // Your PatientProfile component


function App() {
  return (
    <div className="App">
      
      <ThemeProvider>
      <PatientProfile />
    </ThemeProvider>
    
    
      
    </div>
  );
}

export default App;
