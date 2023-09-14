import React, { useState } from 'react';
import '../assets/styles/login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    // 여기에서 실제 로그인 로직을 구현하면 됩니다.
    // 예제에서는 간단하게 username과 password가 "admin"인 경우에만 로그인 성공으로 처리합니다.
    if (username === 'admin' && password === 'admin') {
      setMessage('로그인 성공');
    } else {
      setMessage('로그인 실패');
    }
  };

  return (
    <div>
      <h1>로그인 페이지</h1>
      <input
        type="text"
        placeholder="사용자 이름"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>로그인</button>
      <p>{message}</p>
    </div>
  );
}

export default Login;
