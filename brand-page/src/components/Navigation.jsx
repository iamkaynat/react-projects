const Navigation = () => {
    return (
        <nav className="container">
            <div className="nav-logo">
                <img src="/images/brand_logo.png" alt="Logo" />
            </div>

            <ul>
                <li href="#">Home</li>
                <li href="#">About</li>
                <li href="#">Location</li>
                <li href="#">Contact</li>
            </ul>

            <button>Login</button>
        </nav>
    );
}

export default Navigation;