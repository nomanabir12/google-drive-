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
        </div>
    )
}

export default Data
