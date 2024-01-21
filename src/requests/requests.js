import { setUsers } from "../store/reducers/usersSlice";

const GET_USERS = 'https://dummyjson.com/users';
const SEARCH_USERS = 'https://dummyjson.com/users/search?q=';

//загрузка массива юзеров и сохранение их в store
export const get_users = (dispatch) => {
    try{
        fetch(GET_USERS)
            .then(res => res.json())
            .then(res => dispatch(setUsers(res.users)));
    } catch(error){
        console.log(error)
    }
}


//метод поиска, получение результатов и сохранение их в store
export const search_users = (dispatch, search_txt) => {
    try{
        fetch(SEARCH_USERS+search_txt)
            .then(res => res.json())
            .then(res => dispatch(setUsers(res.users)));
    } catch(error){
        console.log(error)
    }
}

