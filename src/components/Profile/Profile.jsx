import MyPosts from "./MyPosts/MyPosts"
import s from "./Profile.module.css"

const Profile = () => {
  return (
    <div className={s.content}>
      <div className={s.person}>
        <img className={s.img} 
          src='https://upload.wikimedia.org/wikipedia/commons/b/bf/Mona_Lisa-restored.jpg'
        />
      </div>
      <div className={s.person__description}>
        <p>Name: <span className={s.span}>Mona Lisa</span></p>
        <p>Age: <span className={s.span}>517</span></p>
        <p>Country: <span className={s.span}>Italy</span></p>
        <p>Interests: <span className={s.span}>
            Italy,
            Leonardo,
            Art,
            Landscapes
          </span>
        </p>
      </div>
      <div className={s.posts}>
        <div className={s.post__title}>
          My posts
        </div>
        <div className={s.post__interactive}>
          <textarea placeholder='What do you want to share?'></textarea>
          <button type='submit'>Share me!</button>
        </div>
      </div>
      <MyPosts />
    </div>
  );
}
export default Profile;