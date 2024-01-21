import { useDispatch, useSelector } from "react-redux"
import style from "./../../style/tableRow.module.scss"
import TableCell from "./tableCell"
import { setModalActive, setRowID } from "../../store/reducers/modalSlice"


const TableRow = ({id, fio, age, sex, number, adress, header}) =>{
    const collumns_widths = useSelector(state => state.collumns)
    const dispatch = useDispatch()


    //обработчик клика на строку
    //устанавливается ID строки в store
    //модальное окно становится активным
    function rowClicked(id){
        dispatch(setRowID(id))
        dispatch(setModalActive(true))
    }
    return(
        <div>
            {header?
                <div className={style.tableRow}>
                    <TableCell txt="fio" width = {collumns_widths.fio_collumn_width}/>
                    <TableCell txt="age" width = {collumns_widths.age_collumn_width}/>
                    <TableCell txt="sex" width = {collumns_widths.sex_collumn_width}/>
                    <TableCell txt="number" width = {collumns_widths.number_collumn_width}/>
                    <TableCell txt="address" width = {collumns_widths.address_collumn_width}/>
                </div>:
                <div className={style.tableRow} onClick={()=>rowClicked(id)}>
                    <TableCell txt={fio} width = {collumns_widths.fio_collumn_width}/>
                    <TableCell txt={age} width = {collumns_widths.age_collumn_width}/>
                    <TableCell txt={sex} width = {collumns_widths.sex_collumn_width}/>
                    <TableCell txt={number} width = {collumns_widths.number_collumn_width}/>
                    <TableCell txt={adress} width = {collumns_widths.address_collumn_width}/>
                </div>
            }
        </div>
            
    )
}

export default TableRow;