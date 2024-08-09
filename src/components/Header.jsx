import React ,{useState} from 'react'

const Header = (props) => {
    const[isThemeChanged, setIsThemeChanged]=useState(false);
    const[themeMode, setThemeMode]=useState("Light");

    function changeMode()
    {
        if(themeMode==="Light")
        {
            setThemeMode("Dark");
            setIsThemeChanged(true); //maintaining this for toggling bw icons
            props.changeThemeMode("light"); //invoke this function with LIGHT argument in parent to update its state/perform other actions
        }
        else{
            setThemeMode("Light");
            setIsThemeChanged(true);
            props.changeThemeMode("dark");
        }
    }
  return (
    <div className='header'>
      <h1 className='logo-heading'>Git Radar</h1>
      <div className='theme-container'>
        <p className='theme' onClick={changeMode}>
            {themeMode}
        </p>
        <span onClick={changeMode}>
          <i className={`fa-regular fa-${isThemeChanged ? "moon" : "sun"}`}></i>
        </span>
      </div>
    </div>
  )
}

export default Header