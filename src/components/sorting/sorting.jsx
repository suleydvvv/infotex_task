
import style from "../../style/sorting.module.scss"
import { values } from "../../store/reducers/sortingSlice"
import { useDispatch, useSelector } from "react-redux"
import { setValueFIO, setActive, setValueAge} from "../../store/reducers/sortingSlice"
import { useEffect } from "react"
import { setUsers } from "../../store/reducers/usersSlice"


const Sorting = () =>{
    const sortingActive = useSelector(state => state.sorting.active)
    const users = useSelector(state => state.users.users)
    const valueFIO = useSelector(state => state.sorting.valueFIO)
    const valueAge = useSelector(state => state.sorting.valueAge)

    const dispatch = useDispatch()

    //сортировка по возрастанию
    function byFieldUp(fieldName){
        return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
    }

    //сортировка по убыванию
    function byFieldDown(fieldName){
        return (a, b) => a[fieldName] < b[fieldName] ? 1 : -1;
    }
    
    //сортировка
    //fieldName - имя поля объекта, по которому производится сортировка
    //value - значение селектора
    function toSort(fieldName, value){
        let usersForSort = [...users]
        switch(value){
            case values[0]:
                break
            case values[1]:
                usersForSort.sort(byFieldUp(fieldName))
                dispatch(setUsers(usersForSort))
                break
            case values[2]:
                usersForSort.sort(byFieldDown(fieldName))
                dispatch(setUsers(usersForSort))
                break
            default:
                break
        }
    }

    //при каждом изменении значения селектора вызывается функция сортировки
    useEffect(()=>{
        toSort("firstName", valueFIO)
        toSort("age", valueAge)
    }, [valueFIO, valueAge])

    return(
        <div className={style.content}>
            {
                sortingActive ?
                    <h5 onClick={()=>dispatch(setActive(false))}>Сортировка &nbsp;&nbsp; &#9650;</h5>
                    :
                    <h5 onClick={()=>dispatch(setActive(true))}>Сортировка &nbsp;&nbsp; &#9660;</h5>
            }
            <div className={sortingActive ? style.sorting : style.sorting_inactive}>
                <div className={style.type_of_sorting}>
                    <p>По ФИО: </p>
                    <select value={valueFIO} onChange={(e)=>dispatch(setValueFIO(e.target.value))}>
                        <option>{values[0]}</option>
                        <option>{values[1]}</option>
                        <option>{values[2]}</option>
                    </select>
                </div>
                <div className={style.type_of_sorting}>
                    <p>По возрасту</p>
                    <select value={valueAge} onChange={(e)=>dispatch(setValueAge(e.target.value))}>
                        <option>{values[0]}</option>
                        <option>{values[1]}</option>
                        <option>{values[2]}</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Sorting;