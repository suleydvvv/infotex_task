import { useDispatch} from "react-redux"
import style from "../../style/search.module.scss"
import { search_users } from "../../requests/requests"
import { useState } from "react"


const Search = () =>{
    const [searchValue, setSearchValue] = useState('')
    const dispatch = useDispatch()

    //обработчик изменения значения инпута
    //устанавливается значение инпута
    //вызывается метод поиска
    function change(state){
        setSearchValue(state)
        search_users(dispatch, state)
    }
    return(
        <input type="text" placeholder="Search"  value={searchValue} onChange={(e)=>change(e.target.value)}/>
    )
}

export default Search;