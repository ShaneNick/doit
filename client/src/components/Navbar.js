export default function Navbar() {
    return (
        <div className="nav">
            <a href="/" className="DOIT"> DO IT</a>
            <ul>
                <li>
                    <a href="/profile">Profile</a>
                </li>
                <li>
                    <a href="/settings">Settings</a> 
                </li>               
            </ul>
        </div>
    );
}
