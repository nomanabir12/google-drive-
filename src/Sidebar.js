import React from 'react'
import "./css/sidebar.css";
import MobileScreenShareIcon from '@material-ui/icons/MobileScreenShare';
import DevicesIcon from '@material-ui/icons/Devices';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_btn">
                <button>
                    <img src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2236%22 height=%2236%22 viewBox=%220 0 36 36%22%3E%3Cpath fill=%22%2334A853%22 d=%22M16
 16v14h4V20z%22/%3E%3Cpath fill=%22%234285F4%22 d=%22M30 16H20l-4 4h14z%22/%3E%3Cpath fill=%22%23FBBC05%22 d=%22M6 16v4h1014-4z%22/%3E%3Cpath fill=%22%23EA4335%22
 d=%22M20 16V6h-4v14z%22/%3E%3Cpath fill=%22none%22 d=%22M0 0h36v36H0z%22/%3E%3C/svg%3E" alt="icon" />
                    <span>New</span>
                </button>
            </div>

            <div className="sidebar_options">
                <div className="sidebar_option">
                    <MobileScreenShareIcon/>
                    <span>My Drive</span>
                </div>
                <div className="sidebar_option">
                    <DevicesIcon/>
                    <span> Computers</span>
                </div>
                <div className="sidebar_option">
                    <PeopleAltOutlinedIcon/>
                    <span>Shared with me</span>
                </div>
                <div className="sidebar_option">
                    <QueryBuilderOutlinedIcon/>
                    <span>Recent</span>
                </div>
                <div className="sidebar_option">
                    <StarBorderOutlinedIcon/>
                    <span>Starred</span>
                </div>
                <div className="sidebar_option">
                    <DeleteForeverOutlinedIcon/>
                    <span>Trash</span>
                </div>
                
            </div>

            <hr/>
            <div className="sidebar_options">
                <div className="sidebar_option">
                    <CloudQueueIcon/>
                    <span>Storage</span>
                </div>

                <div className="progress_bar">
                    <progress size="tiny" value="50" max="100"/>
                    <br/>
                    <span>3.50 GB of 15 GB used</span>
                </div>

            </div>
        </div>
    )
}

export default Sidebar;
