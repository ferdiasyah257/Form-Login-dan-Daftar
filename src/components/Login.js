import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [masuk, setMasuk] = useState('');

    const onChangeUsername = (e) => {
        const value = e.target.value
        setUsername(value)
    }
    
    const onChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    const terdaftar = (name, password) => {
        if (name === "admin" && password === "admin"){
            alert ("Masuk");
            setMasuk(true);   
        } else {
            alert ("salah")
        }
    }

    if (masuk) {
        return (
            <div className="text-center">
                <div style={{margin:"20px"}}>
                    Halaman Dashboard
                </div>

                <button onClick={()=> setMasuk(false)}>
                    keluar
                </button>
            </div>
            
            
        )
    }

    return (
        <div style={{marginTop: "150px"}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card p-4">
                            <div className="card-body">
                                <div className="form-group" style={{marginBottom: "10px"}}>
                                    <label>Username</label>
                                    <input type="text" placeholder="Username" className="form-control" value={username} onChange={onChangeUsername} />
                                </div>

                                <div className="form-group"style={{marginBottom: "10px"}}>
                                    <label>Password</label>
                                    <input type="password" placeholder="Password" className="form-control" value={password} onChange={onChangePassword} />
                                </div>

                                <div className="row">
                                    <div className="col-auto me-auto">
                                        <button className="btn btn-primary" onClick={() => terdaftar(username, password)}>Login</button> {" "}
                                    </div>

                                    <div className="col-auto">
                                        <Link to="/daftar">
                                            Belum punya akun
                                         </Link>
                                     </div >
                                </div>

                                
                               
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>

    )
}

export default Login