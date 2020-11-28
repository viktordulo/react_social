import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.history}>
      <Post
        img='https://www.leonardodavinci.net/images/leonardo-da-vinci.jpg'
        name='Leonardo da Vinci'
        text='Ohh, this is my best work! My sweetie, my precious!'
      />
      <Post
        img='https://www.laphamsquarterly.org/sites/default/files/styles/tall_rectangle_custom_user_small_2x/public/images/contributor/michelangelo_360x450.jpg?itok=O0VHVRCg&timestamp=1421084511'
        name='Michelangelo'
        text='Pff, i could make much better, haha'
      />
    </div>
  );
}
export default MyPosts;