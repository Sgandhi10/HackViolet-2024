import {Button} from "@mui/material";

function ContractListItem(props){
    const dataIndex = props.indexNum;
    let bgColor = "";
    if(props.selectedContract == parseInt(dataIndex)) {
        console.log("no");
        bgColor = "#c9c9c9";
    }
    else {
        console.log("yes");
        bgColor = "#ffffff";
    }

    return <Button sx={{color: "black", backgroundColor: bgColor, border: 2, width:"100%", '&:hover' : {backgroundColor: "#c9c9c9"}}} size = "large" onClick = {props.clickHandler} id = {dataIndex} >
        {props.contract.Name + " (" + props.contract.CID + ")"}
    </Button>
}

export default ContractListItem;