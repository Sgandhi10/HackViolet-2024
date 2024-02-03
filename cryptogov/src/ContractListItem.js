import {Button} from "@mui/material";

function ContractListItem(props){
    const dataIndex = props.indexNum;
    return <Button sx={{color: "black", backgroundColor: "#ffffff", border: 2, width:"100%"}} size = "large" onMouseOver = {props.clickHandler} id = {dataIndex} >
        {props.contract.name + "  ID: " + props.contract.cid}
    </Button>
}

export default ContractListItem;