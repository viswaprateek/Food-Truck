import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './SigninPage.css'; // Import CSS file for styling

const SigninPage = () => {
    const userRef = useRef();
    const pwdRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validUser, setValidUser] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setValidUser(user.trim() !== '');
    }, [user]);

    useEffect(() => {
        setValidPwd(pwd.trim() !== '');
    }, [pwd]);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.trim() === '' || pwd.trim() === '') {
            setErrMsg('Username and password are required.');
            errRef.current.focus();
            return;
        }
        // Add your signin logic here
        console.log("Username:", user);
        console.log("Password:", pwd);
    };

    return (
        <section className="signin-page">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">
                    Username:
                    <FontAwesomeIcon icon={faCheck} className={validUser ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validUser || !user ? "hide" : "invalid"} />
                </label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    required
                    aria-invalid={!validUser}
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                />

                <label htmlFor="password">
                    Password:
                    <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                </label>
                <input
                    type="password"
                    id="password"
                    ref={pwdRef}
                    autoComplete="off"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                    required
                    aria-invalid={!validPwd}
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                />

                <button type="submit">Sign In</button>
            </form>
            <p>
                Don't have an account? <a href="/signup">Sign Up</a>
            </p>
        </section>
    );
};

export default SigninPage;
