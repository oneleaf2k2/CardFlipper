import React, { useState } from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import MyCard from "./card";
import LongPressButton from "./longpressbutton";
import Button from "@material-ui/core/Button";
import "./styles.css";

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green
  },
  typography: {
    useNextVariants: true
  }
});

function App() {
  const [isEditable, setIsEditable] = useState(false);

  return (
    <MuiThemeProvider theme={theme}>
      <div className="app">
        <MyCard class="card" isEditable={isEditable} />
        <Button
          variant="contained"
          color="primary"
          onClick={obj => {
            setIsEditable(!isEditable);
          }}
        >
          Toggle Editable
        </Button>
        <LongPressButton variant="contained" color="primary">
          Click Me
        </LongPressButton>
      </div>
    </MuiThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
