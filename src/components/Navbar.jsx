import React from 'react'

const Navbar = () => {
    return(
        <div>
            <div className="nav-bg-body-tertiary">
                {/* <div class="container-fluid"> */}
                    {/* <a class="navbar-brand" href='#'>
                        <img src="../../../images/raimi-logo.png" alt="logo" width="40" height="30" class="d-inline-block align-text-top" />
                        Raimi Notes
                    </a> */}
                    <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                    <a class="navbar-brand" href='#'>
                        <img src="../../../images/raimi-logo.png" alt="logo" width="50" height="50" class="d-inline-block align-text-top" />
                        Raimi Notes
                    </a>
                        <ul class="navbar-nav me-md-5 mb-2 mb-lg-0 fs-medium fw-medium">
                            <li class="nav-item mx-md-4">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item mx-md-4">
                                <a class="nav-link active" aria-current="page" href="/">Courses</a>
                            </li>
                            <li class="nav-item mx-md-4">
                                <a class="nav-link active" aria-current="page" href="/">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    </nav>
                
            </div>
        </div>
    )
}

export default Navbar