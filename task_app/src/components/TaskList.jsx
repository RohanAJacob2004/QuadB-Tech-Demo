// components/TaskList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, fetchTasks } from '../actions/taskActions';

const TaskList = () => {
    const dispatch = useDispatch();
    const { tasks, loading, error } = useSelector((state) => state.task);

    useEffect(() => {
        if (tasks.length === 0) {
            dispatch(fetchTasks());
        }
    }, [dispatch, tasks.length]);

    if (loading) return (
        <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
    );

    if (error) return (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4" role="alert">
            <span className="block sm:inline">Error: {error}</span>
        </div>
    );

    if (tasks.length === 0) return (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
            <div className="flex">
                <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className="ml-3">
                    <p className="text-sm text-yellow-700">No tasks available. Add a task to get started!</p>
                </div>
            </div>
        </div>
    );

    return (
        <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Your Tasks</h2>
            <ul className="bg-white rounded-lg shadow divide-y divide-gray-200">
                {tasks.map((task) => (
                    <li key={task.id} className="px-6 py-4 flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                                {task.title}
                            </p>
                            {task.description && (
                                <p className="text-sm text-gray-500 truncate">
                                    {task.description}
                                </p>
                            )}
                        </div>
                        <div className="ml-4 flex-shrink-0">
                            <button
                                onClick={() => dispatch(deleteTask(task.id))}
                                className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            >
                                <svg className="mr-1.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
