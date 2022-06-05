import React, {useEffect, useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import { BsStickies } from "react-icons/bs";

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light sticky-top" id="navbar">
            <div class="container-fluid">
                <Link to="/" class="navbar-brand" id="logo"><BsStickies/> MeMemo</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to="/" class="nav-link">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/memo" class="nav-link">Memo</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;