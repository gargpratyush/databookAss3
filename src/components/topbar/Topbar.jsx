import "./topbar.css";
import { Search, Person, Chat, Notifications, Home } from "@material-ui/icons";
import { blue } from "@material-ui/core/colors";

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <img src="/assets/databooklogo.png" alt="" width="44px" className="databookLogo" />
                <div className="searchbar">
                    <Search classname="searchIcon" />
                    <input placeholder="Search Databook" className="searchInput" />
                </div>
            </div>

            <div className="topbarCenter">
                <Home classname="homeIcon" style={{ fontSize: 32, color: '#2538e2' }}/>
            </div>

            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>

                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">3</span>
                    </div>
                </div>

                <img src="/assets/person/1.jpeg" alt="" className="topbarImg"/>
            </div>
        </div>
    )
}