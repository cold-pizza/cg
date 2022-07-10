import { useHistory } from "react-router-dom";
import "./style.scss";

const Login = function () {
    const history = useHistory();
    return (
        <div className="login">
            <p>login view</p>
            <form action="#">
                <input type="text" placeholder="writing your name!" />
                <button onClick={() => history.push("/main")} type="button">
                    go
                </button>
            </form>
        </div>
    );
};

export default Login;
