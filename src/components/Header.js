import userImg from './img/mahsin.jpg';
const Header = () =>{
    return(
        <div className="head">
          <div className="user-img">
             <img src={userImg} alt='user' />
          </div>
          <div className="user-details">
            <p className="title">Super Admin</p>
            <p className="name">Mahsin Munna</p>
          </div>
        </div>
    );
}
export default Header;