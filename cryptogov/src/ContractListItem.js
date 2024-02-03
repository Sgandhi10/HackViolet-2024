import {Button} from "@mui/material";

function ContractListItem(props){
    const dataIndex = props.indexNum;
    return <button onClick = {props.clickHandler} id = {dataIndex} >
        {"Contract no. " + dataIndex}
    </button>
}

export default ContractListItem;