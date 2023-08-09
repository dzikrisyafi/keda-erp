import { useState } from 'react'

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            username,
            password
        }

        console.log(user);
    }

    return (
        <div className="login py-5 my-5">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5">
                        <h2 className="mb-3">Login to Your Account</h2>

                        <p className="text-secondary mb-4" style={{
                            fontSize: '18px'
                        }}>Input username and password to login</p>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input type="text" className="form-control" id="username" onChange={(e) => setUsername(e.target.value)} value={username} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                            </div>

                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-primary fw-semibold py-2">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
