import "./Profile.css"

const Profile = () => {
  return (
    <div className='content'>
      <div className='person'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/b/bf/Mona_Lisa-restored.jpg'
        />
      </div>
      <div className='person-descr'>
        <p>Name: <span>Mona Lisa</span></p>
        <p>Age: <span>517</span></p>
        <p>Country: <span>Italy</span></p>
        <p>Interests: <span>
            Italy,
            Leonardo,
            Art,
            Landscapes
          </span>
        </p>
      </div>
      <div className='posts'>
        <div className='post-title'>
          My posts
        </div>
        <div className='post-interactive'>
          <textarea placeholder='What do you want to share?'></textarea>
          <button type='submit'>Share me!</button>
        </div>
      </div>
      <div className='history'>
        <div className='history-post'>
          <img src='https://www.leonardodavinci.net/images/leonardo-da-vinci.jpg' />
          <div className="post-content">
            <div className='post-name'>
              Leonardo da Vinci
            </div>
            <div className='post-text'>
              Ohh, this is my best work! My sweetie, my precious!
            </div>
          </div>
        </div>
        <div className='history-post'>
          <img src='https://www.laphamsquarterly.org/sites/default/files/styles/tall_rectangle_custom_user_small_2x/public/images/contributor/michelangelo_360x450.jpg?itok=O0VHVRCg&timestamp=1421084511' />
          <div className="post-content">
            <div className='post-name'>
              Michelangelo
            </div>
            <div className='post-text'>
              Pff, i could make much better, haha
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;