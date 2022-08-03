import React, {useEffect, useState} from 'react';

import './SwithcerModule.css'


const Switcher = () => {

    const [wrap, setWrap] = useState({})

    useEffect(()=>{
        let wrap = document.getElementById('wrap');
        setWrap(wrap)
    }, [])


    const changeTheme = () => {
      if (wrap.classList.contains('dark_theme')) {
          wrap.classList.remove('dark_theme')
          wrap.classList.add('light_theme')
      } else {
          wrap.classList.remove('light_theme')
          wrap.classList.add('dark_theme')
      }
    }

    return (
        <button onClick={()=>changeTheme()}>Change Theme</button>
    );
};

export default Switcher;