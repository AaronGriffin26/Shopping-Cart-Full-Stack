import React from "react";
import {Link} from "react-router-dom";

function WelcomePage() {
    return (
        <div>
            <p>(insert welcome message from backend)</p>
            <Link to="/login">Go shopping!</Link>
        </div>
    );
}

export default WelcomePage;