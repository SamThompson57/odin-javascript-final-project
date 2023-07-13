import React from "react";
import magGlass from "./components/magGlass.png"
import locPin from "./components/locPin.png"

const Body = () => {
    return (
        <div className="body">
            <div>{/*This can probably be its own module*/}
                <form className="searchContainer">
                    <div className="searchBar">
                        <div className="searchField">
                            <label>What</label>
                            <input type="text" placeholder="Job title, keywords, or company"></input>
                            <div>
                                <img className="searchImg" src={magGlass} alt=""></img>
                            </div>
                        </div>
                        <div className="searchField">
                            <label>Where</label>
                            <input type="text" placeholder="city or postcode"></input>
                            <div>
                                <img className="searchImg" src={locPin} alt=""></img>
                            </div>
                        </div>
                        
                    </div>
                    <button className="searchField" id="submit">Find jobs</button>
                </form>
            </div>
            <div className="content">
                <div>
                    <div className="invite">
                        <div className="invLink">Upload your CV </div>
                        <div id="dash">–</div>
                        It only takes a few seconds
                    </div>
                    <div className="invite">
                        <div className="invLink">Post a job on Inneed</div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Body