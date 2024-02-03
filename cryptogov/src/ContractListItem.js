function ContractListItem(props){
    const dataIndex = props.indexNum;
    return <button onClick = {props.clickHandler}>
        {"Contract no. " + dataIndex}
    </button>
}