import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Daftar = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeUsername = (e) => {
        const value = e.target.value
        setUsername(value)
    }
    
    const onChangeEmail = (e) => {
        const value = e.target.value
        setEmail(value)
    }

    const onChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    return (
        <div style={{marginTop: "100px"}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card p-4">
                            <div className="card-body">
                                <form className="needs-validation" noValidate>
                                    <div className="form-group" value="name" style={{marginBottom: "10px"}}>
                                        <label>Username</label>
                                        <input type="text" placeholder="Username" className="form-control" value={username} onChange={onChangeUsername} />
                                    </div>

                                    <div className="form-group" value="password" style={{marginBottom: "10px"}}>
                                        <label for="validationEmail" className="form-label">Email</label>
                                        <div className="input-group has-validation">
                                            <span className="input-group-text" id="inputGroupPrepend">@</span>
                                        <input type="text" placeholder="Email" className="form-control" id="validationEmail" aria-describedby="inputGroupPrepend" required value={email} onChange={onChangeEmail} />
                                            <div class="invalid-feedback">
                                                Email salah.
                                            </div>

                                        </div>
                                    </div>

                                    <div className="form-group"style={{marginBottom: "10px"}}>
                                        <label>Password</label>
                                        <input type="password" placeholder="Password" className="form-control" value={password} onChange={onChangePassword} />
                                    </div>

                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                        <label className="form-check-label" for="invalidCheck">
                                            Agree to terms and conditions
                                        </label>

                                        <div className="invalid-feedback">
                                            You must agree before submitting.
                                        </div>
                                    </div>

                                    <div style={{marginTop:"20px"}}>
                                        <button className="btn btn-primary ">Daftar</button> {""}
                                        <Link to="/" className="btn btn-warning">
                                            Batal
                                        </Link>
                                    </div>
                                </form>
                            </div>
                            
                        </div>

                    </div>

                </div>

            </div>
        </div>

    )
}

export default Daftar