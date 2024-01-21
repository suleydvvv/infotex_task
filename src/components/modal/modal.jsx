import { useDispatch, useSelector } from "react-redux"
import { setModalActive } from "../../store/reducers/modalSlice"
import style from "../../style/modal.module.scss"

const Modal = ({children}) =>{
    const active = useSelector(state => state.modal.modalActive)
    const dispatch = useDispatch()
    return(
        <div className={active ? style.modal_active : style.modal} onClick={()=>dispatch(setModalActive(false))}>
            <div className={active ? style.modal_content_active : style.modal_content} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal;