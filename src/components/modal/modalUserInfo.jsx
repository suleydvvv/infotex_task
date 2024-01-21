import { useDispatch, useSelector } from "react-redux";
import Modal from "./modal"

import style from "../../style/userInfo.module.scss"
import { setModalActive } from "../../store/reducers/modalSlice";



const UserInfo = () =>{
    //ID юзера == ID строки
    const userID = useSelector(state => state.modal.rowID)
    const users = useSelector(state => state.users.users)
    const dispatch = useDispatch()

    //поиск конкретного юзера
    const user = users.find((element) => element.id === userID)
    return(
        <Modal>
            {
                user?
                    <div className={style.user_info}>
                        <h1>Информация о пользователе</h1>
                        <img src={user.image} alt="" />
                        <h2>{user.firstName + " " + user.lastName + " " + user.maidenName}</h2>
                        <p>Возраст: &nbsp; {user.age}</p>
                        <p>Адрес: &nbsp; {user.address.address + ", " + user.address.city}</p>
                        <p>Рост: &nbsp; {user.height}</p>
                        <p>Вес: &nbsp; {user.weight}</p>
                        <p>Номер телефона: &nbsp; {user.phone}</p>
                        <p>Email: &nbsp; {user.email}</p>
                        <button onClick={()=>dispatch(setModalActive(false))}>Закрыть</button>
                    </div>
                    :
                    <div></div>
            }
        </Modal>
    )
}

export default UserInfo;