import React from "react";

const Body = () => {
    return (
        <div className="body">
            <div>
                <div className="searchContainer">
                    <form className="searchBar">
                        <div className="searchField">
                            <label>What</label>
                            <input type="text" placeholder="Job title, keywords, or company"></input>
                            <div>img</div>
                        </div>
                        <div className="searchField">
                            <label>Where</label>
                            <input type="text" placeholder="city or postcode"></input>
                            <div>img</div>
                        </div>
                    </form>
                </div>
            </div>
            
            
        </div>
    )
}

export default Body