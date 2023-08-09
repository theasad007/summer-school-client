import { useEffect, useState } from "react";
import './ToggleTheme.css'

function ToggleThemes() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  // initially set the theme and "listen" for changes to apply them to the HTML tag
  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);
  return (
    <label className="swap">
      <input onClick={toggleTheme} type="checkbox" />
      <span className="check"></span>
      <div className="swap-on text-slate-900 relative z-10 text-sm -left-[13px] mt-[7px] ">Light</div>
      <div className="swap-off text-white relative z-10 text-sm text-right right-[10px] mt-[7px]">Dark</div>
    </label>
  );
}

export default ToggleThemes;