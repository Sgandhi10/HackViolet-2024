import {Button} from "@mui/material";

function ContractListItem(props){
    const dataIndex = props.indexNum;
    return <button onClick = {props.clickHandler} id = {dataIndex} >
        {props.contract.name + "  ID: " + props.contract.id}
    </button>
}

export default ContractListItem;