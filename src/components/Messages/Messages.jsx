import s from './Messages.module.css'
const Messages = (props) => {
    return (
        <div className={s.chats}>
            <div className={s.people}>
                <div className={s.user}>
                    <img src="https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg" alt='ava' />
                    <p>Kate</p>
                </div>
                <div className={s.user}>
                    <img src="https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg" alt='ava' />
                    <p>Nastya</p>
                </div>
                <div className={s.user}>
                    <img src="https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg" alt='ava' />
                    <p>Vika</p>
                </div>
                <div className={s.user}>
                    <img src="https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg" alt='ava' />
                    <p>Aleksei</p>
                </div>
                <div className={s.user}>
                    <img src="https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg" alt='ava' />
                    <p>Dima</p>
                </div>
            </div>
            <div className={s.dialog}>
                <div className={s.message}>Zdarova, I'm from Irkutsk</div>
                <div className={s.message}>Who're you?</div>
                <div className={s.message}>I'm arbuzniy chelovek</div>
                <div className={s.message}>You're so strange man. Don't write me more</div>
            </div>
        </div>
    )
}

export default Messages