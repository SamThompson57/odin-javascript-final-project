import React from "react";

const Headder = () => {
    return (
        <div className="headder">
            <div className="headderLeft">
                <div id="title">
                    <div>inneed</div>
                </div>
                <div className="nav">
                    <div className="navLink current">
                        <div>Find jobs</div>
                    </div>
                    <div className="navLink">
                        <div>Company reviews</div>
                    </div>
                    <div className="navLink">
                        <div>Salary Guide</div>
                    </div>
                </div>
            </div>
            <div className="headderRight">
                <div className="nav">
                    <div className="navLink">
                        <div>Upload your CV</div>
                    </div>
                    <div className="navLink" id="signIn">
                        <div>Sign in</div>
                    </div>
                    <div className="divide">
                        <div></div>
                    </div>
                    <div className="navLink">
                        <div>Employers / Post Job</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Headder