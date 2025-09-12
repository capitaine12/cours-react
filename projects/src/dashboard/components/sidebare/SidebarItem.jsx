export default function SidebarItem({ icon, label, active, onClick, collapsed }) {
    return (
        <div
            className={`sidebar-item ${active ? "active" : ""}`}
            onClick={onClick}
        >
            <span className="icon">{icon}</span>
            {!collapsed && <span className="label">{label}</span>}
        </div>
    )
}
