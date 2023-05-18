import { Create, FiberManualRecord, InsertComment } from '@material-ui/icons';
import React from 'react';
import "./Sidebar.css";
import SidebarOption from './SidebarOption';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_info">
                    <h2>Clever Programmer</h2>
                    <h3>
                        <FiberManualRecord />
                        Sujal Nagesh
                    </h3>
                </div>
                <Create />
            </div>
            <SidebarOption Icon={InsertComment} title={"Threads"} />
            <SidebarOption title={"Mentions"} />
            <SidebarOption title={"Saved"} />
            <SidebarOption title={"Browser"} />
            <SidebarOption title={"Groups"} />
            <SidebarOption title={"Apps"} />
            <SidebarOption title={"File Browser"} />
            <SidebarOption title={"Show less"} />
            <hr />
            <SidebarOption title={"Channels"} />
            <hr />
            <SidebarOption title={"Add Icon"} />

        </div>
    )
}

export default Sidebar
