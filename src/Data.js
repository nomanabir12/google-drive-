import React from 'react';
import "./css/data.css";
import ArrowDropDownIcon  from '@material-ui/icons/ArrowDropDown';
import ListIcon from '@material-ui/icons/List';
import InfoOutlinedIcon  from '@material-ui/icons/InfoOutlined';
import InsertDriveFileIcon  from '@material-ui/icons/InsertDriveFile';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


function Data() {
    return (
        <div className="data">
            <div className="data__header">
                <div className="data_headerLeft">
                    <p>My Drive</p>
                    <ArrowDropDownIcon/>
                </div>
                <div className="data_headerRight">
                    <ListIcon/>
                    <InfoOutlinedIcon/>
                </div>
            </div>

            <div className="data__content">
                <div className="data_grid">
                    <div className="data__file">
                        <InsertDriveFileIcon/>
                        <p>File Name</p>
                    </div>
                    <div className="data__file">
                        <InsertDriveFileIcon/>
                        <p>File Name</p>
                    </div>
                    <div className="data__file">
                        <InsertDriveFileIcon/>
                        <p>File Name</p>
                    </div>
                    <div className="data__file">
                        <InsertDriveFileIcon/>
                        <p>File Name</p>
                    </div>
                </div>
                <div className="data_list">
                    <div className="detailsRow">
                        <p><b>Name <ArrowDownwardIcon/></b></p>
                        <p><b>Owner </b></p>
                        <p><b>Last Modified </b></p>
                        <p><b>File Size </b></p>
                    </div>

                    <div className="detailsRow">
                        <p>Name <InsertDriveFileIcon/></p>
                        <p>Me </p>
                        <p>Yesterday </p>
                        <p>5GB </p>
                    </div>

                </div>
        
            </div>
        </div>
    )
}

export default Data
