
import { createContext , useState} from 'react';
import './App.css';
import Form from './components/Form';
import ReactSwitch from "react-switch";
import Switch from "react-switch";
import Mode from './components/Mode';



export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => ( curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="App" id={theme}>
        
        <div className='Switch-toggle'>

          
          
          <Switch
            checked={theme === "dark"}
            onChange={toggleTheme}
            onColor="#fff"
            onHandleColor="#fff"
            handleDiameter={20}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={10}
            width={30}
            className="react-switch"
            id="material-switch"
          />
          <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
        </div>
        <Form/>
        <ReactSwitch  onChange={toggleTheme} checked={theme === "dark"}/> 
        <Mode onChange={toggleTheme} checked={theme === "dark"}/>
      </div>
    </ThemeContext.Provider>
    
  );
}

export default App;
