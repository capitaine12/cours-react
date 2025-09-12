export default function ProfileCard({ collapsed }) {
    return (
        <div className="profile-card">
            <img
                className="avatar"
                src="https://i.pravatar.cc/150?img"
                alt="avatar"
            />
            {!collapsed && (
                <div className="info">
                    <h4>Admin</h4>
                    <p>Web Developer</p>
                </div>
            )}
        </div>
    )
}
