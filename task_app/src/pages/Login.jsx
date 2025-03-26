import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../actions/authActions';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const [error, setError] = useState('');
    const navigate = useNavigate();

 
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/tasks');
        }
    }, [isAuthenticated, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !password) {
            setError('Please enter both username and password');
            return;
        } else {
            setError('');
            dispatch(loginUser(username, password));
           
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>

                {error && (
                    <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block mb-2 font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;