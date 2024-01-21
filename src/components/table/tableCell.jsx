
const TableCell = ({txt, width}) =>{
    const style = {
        width: width+'%',
        borderRight: '2px solid black',
        wordWrap: 'break-word'
    }
    return(
        <div style={style}>
            {txt}
        </div>
    )
}

export default TableCell;