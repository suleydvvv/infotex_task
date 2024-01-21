
import style from "../../style/table.module.scss"
import TableRow from "./tableRow";
import { useSelector } from "react-redux";

const Table = () =>{
    const users = useSelector(state => state.users.users)

    return (
        <div className={style.table}> 
            <TableRow header={true}/>
            {users.map((element)=>{
                return <TableRow key={element.id}
                                 id = {element.id}
                                 fio={element.firstName + " " + element.lastName + " " + element.maidenName}
                                 age={element.age}
                                 sex={element.gender}
                                 number={element.phone}
                                 adress={element.address.address + ", " + element.address.city}
                                 header={false}>
                       </TableRow>
            })}
        </div>
    )
}

export default Table;