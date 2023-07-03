import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

    const  User = () => {
        const{ theme,setTheme } =useContext(ThemeContext)
        console.log(theme);
    return (
        <div>
            user sayfasi
        </div>
    );
}
export default User;
