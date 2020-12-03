import { NavLink } from 'react-router-dom'
import s from './Messages.module.css'

const User = (props) => {
    return (
        <NavLink className={s.user} activeClassName={s.active} to={'/messages/' + props.id}>
            <img src={props.img} alt='ava' />
            <p>{props.name}</p>
        </NavLink>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.send}</div>
    )
}

const Messages = (props) => {
    return (
        <div className={s.chats}>
            <div className={s.people}>
                <User img='https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg' name='Kate' id='1' />
                <User img='https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg' name='Nastya' id='2' />
                <User img='https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg' name='Vika' id='3' />
                <User img='https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg' name='Aleksei' id='4' />
                <User img='https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg' name='Dima' id='5' />
            </div>
            <div className={s.dialog}>
                <Message send="Zdarova, I'm from Irkutsk"/>
                <Message send="Who're you?"/>
                <Message send="I'm arbuzniy chelovek"/>
                <Message send="You're so strange man. Don't write me more"/>
            </div>
        </div>
    )
}

export default Messages