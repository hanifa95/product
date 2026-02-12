import { useEffect } from "react";

const Detail = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const isLoggedIn = localStorage.getItem('user') !== null;

    useEffect(() => {
        if (!isLoggedIn) {
            window.location.href = '/login';
        }
    }, [isLoggedIn]);

    const LogOut = () => {
        localStorage.removeItem('user');
        window.location.href = '/login';
    }
    return(
        <div className="profile">
            <h1 className="text-center text-light pt-3" >Profile</h1>
            {isLoggedIn ? 
            <div className="text-center pt-3 text-info">
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <button className="btn btn-success col-4 mt-3" onClick={LogOut}>Logout</button>
            </div>
            :
            <p>Not logged in</p>
            }
        </div>
    )
}

export default Detail;