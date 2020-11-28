import s from "./Post.module.css"

const Post = (props) => {
  return (
    <div className={s.history__post}>
      <img src={props.img} />
      <div className={s.post__content}>
        <div className={s.post__name}>
          {props.name}
        </div>
        <div className={s.post__text}>
          {props.text}
        </div>
      </div>
    </div>
  );
}
export default Post;