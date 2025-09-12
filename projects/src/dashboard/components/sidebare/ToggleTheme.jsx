import { FaSun, FaMoon } from "react-icons/fa"

export default function ToggleTheme({ darkMode, toggle, collapsed }) {
    return (
        <div className="toggle-theme" onClick={toggle}>
            <span className="icon">{darkMode ? <FaSun /> : <FaMoon />}</span>
            {!collapsed && <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>}
        </div>
    )
}
