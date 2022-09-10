import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {

  const { login } = useContext(AuthContext);
  const navigation = useNavigate();

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';

    login( 'Bishop');
    navigation(lastPath, {
      replace: true,
    })
  }
  return (
    <div className="container">
      <h1>Login</h1>
      <hr />
      <button 
        className="btn btn-outline-success"
        onClick={onLogin}
      >
        Login
      </button>
    </div>
  )
}
