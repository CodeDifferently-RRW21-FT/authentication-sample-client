import { useNavigate } from 'react-router-dom';

function Home(){
    const navigate = useNavigate();
    const logMeOut = () => {
        sessionStorage.removeItem("Auth Token");
        navigate("/login");
    }

    return(<>
        <h1>Home</h1>
        <button onClick={logMeOut}>Log Out</button>
    </>);
}

export default Home;