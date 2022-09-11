import { useRef } from "react";
import { connect, useDispatch } from 'react-redux';
import { login, logout } from '../../store/features/user/userData';

import avatar from '../../assest/img/ava1.jpg';

import "./Header.scss";

function mapStateToProps(state) {
  const { counter, user } = state;
  return { /*count: counter.value,*/ logined: user.logined };
}

function Header({ /*count,*/ logined }) {

  const dispatch = useDispatch();

  const loginRef = useRef(null);
  const passwordRef = useRef(null);

  function onClickLogin() {
    dispatch(login({
      login: loginRef.current?.value, 
      password: passwordRef.current?.value 
    }));
  }

  function onClickLogout() {
    dispatch(logout());
  }

  return (
    <div className="header">
      <h1>Авторизация</h1>
      {logined ? (
        <>
          <img className='avatar' src={avatar} />
          <button onClick={onClickLogout}> Выйти </button>
        </>
      ) : (
        <>
          <input ref={loginRef} placeholder="login"></input>
          <input
            ref={passwordRef}
            placeholder="password"
            type="password"
          ></input>
          <button className="header-button" onClick={onClickLogin}>
            {" "}
            Жмяк{" "}
          </button>
        </>
      )}
    </div>
  );
}
export default connect(mapStateToProps)(Header);
