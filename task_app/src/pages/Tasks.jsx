import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import { logoutUser } from '../actions/authActions';
import { LogOutIcon } from 'lucide-react';

const Tasks = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    useEffect(() => {
        // Redirect to login if not authenticated
        if (!isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate('/');
    };

    // Don't render anything if not authenticated (prevents flash before redirect)
    if (!isAuthenticated) {
        return null;
    }

    return (
        <div className="p-6 md:p-10 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Tasks</h1>
                <button
                    onClick={handleLogout}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                    <LogOutIcon className="mr-1.5 h-4 w-4" />
                    Logout
                </button>
            </div>
            <TaskInput />
            <TaskList />
        </div>
    );
};

export default Tasks;