import '../../style/SideBare.css'
import { useState } from "react"
import SidebarItem from "./SidebarItem"
import ToggleTheme from "./ToggleTheme"
import ProfileCard from "./ProfileCard"
import {
    FaHome, FaChartBar, FaBell, FaHeart, FaWallet, FaSignOutAlt, FaMoon, FaSun
} from "react-icons/fa"

const menuItems = [
    { icon: <FaHome />, label: "Dashboard" },
    { icon: <FaChartBar />, label: "Revenue" },
    { icon: <FaBell />, label: "Notifications" },
    { icon: <FaChartBar />, label: "Analytics" },
    { icon: <FaHeart />, label: "Likes" },
    { icon: <FaWallet />, label: "Wallets" },
]

export default function SideBar() {
    const [active, setActive] = useState("Revenue")
    const [darkMode, setDarkMode] = useState(false)
    const [collapsed, setCollapsed] = useState(false)

    return (
        <>
        <div className={`sidebar ${darkMode ? "dark" : "light"} ${collapsed ? "collapsed" : ""}`}>
            <ProfileCard collapsed={collapsed} />

            <div className="menu">
                {menuItems.map((item) => (
                    <SidebarItem
                        key={item.label}
                        icon={item.icon}
                        label={item.label}
                        active={active === item.label}
                        onClick={() => setActive(item.label)}
                        collapsed={collapsed}
                    />
                ))}
            </div>

            <div className="bottom-ection">
                <SidebarItem
                    icon={<FaSignOutAlt />}
                    label="Logout"
                    collapsed={collapsed}
                />
                <ToggleTheme
                    darkMode={darkMode}
                    toggle={() => setDarkMode(!darkMode)}
                    collapsed={collapsed}
                />
            </div>

            <button className="collapse-btn" onClick={() => setCollapsed(!collapsed)}>
                {collapsed ? "→" : "←"}
            </button>
        </div>
        </>
    )
}
