import s from "./MyPosts.module.css"

const MyPosts = () => {
  return (
    <div className={s.history}>
      <div className={s.history__post}>
        <img src='https://www.leonardodavinci.net/images/leonardo-da-vinci.jpg' />
        <div className={s.post__content}>
          <div className={s.post__name}>
            Leonardo da Vinci
            </div>
          <div className={s.post__text}>
            Ohh, this is my best work! My sweetie, my precious!
            </div>
        </div>
      </div>
      <div className={s.history__post}>
        <img src='https://www.laphamsquarterly.org/sites/default/files/styles/tall_rectangle_custom_user_small_2x/public/images/contributor/michelangelo_360x450.jpg?itok=O0VHVRCg&timestamp=1421084511' />
        <div className={s.post__content}>
          <div className={s.post__name}>
            Michelangelo
            </div>
          <div className={s.post__text}>
            Pff, i could make much better, haha
            </div>
        </div>
      </div>
    </div>
  );
}
export default MyPosts;