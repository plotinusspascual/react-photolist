import "./styles.css";
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import PhotoList from "./PhotoList.json";

// function NextButton() {
//   const theme = useContext(ThemeContext);
//   const darkMode = theme.state.darkMode;
  
//   const onClick = () => {
//     if(darkMode){
//       theme.dispatch({ type: "LIGHTMODE" });
//     } else {
//       theme.dispatch({ type: "DARKMODE"});
//     }
//   };

//   return (
//     <button className={`btn ${darkMode ? "btn-dark" : "btn-light"}`} onClick={onClick}>Next</button>
//   )
// }

function App(){
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = event => {

    var light = "light";

    if(event.target.className === light){
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" });
    }
  }

  return (
    <div className={`bg ${darkMode ? "bg-dark" : "bg-light"}`}>
      <h1 className={`heading ${darkMode ? "heading-dark" : "heading-light"}`}>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </h1>
      {PhotoList.map((photo) => {
        return (
          <div>
             <p className={`para ${darkMode ? "para-dark" : "para-light"}`}>{photo.title}</p>
             <img src={photo.photo} id={photo.id} className={photo.theme} onClick={handleClick} />             *
          </div>
        )
      })}
      {/* <NextButton /> */}
    </div>
  )
}

export default App;
