import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/taskActions';
import { PlusIcon } from 'lucide-react';

const TaskInput = () => {
    const [taskTitle, setTaskTitle] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (taskTitle.trim() === '') return;

        const newTask = {
            id: Date.now(),
            title: taskTitle,
            priority: 'Medium',
        };

        dispatch(addTask(newTask));
        setTaskTitle('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    };

    return (
        <div className="mb-6 bg-white p-5 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Add New Task</h2>
            <div className="flex items-center space-x-2">
                <input
                    type="text"
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Enter a new task..."
                    className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                    onClick={handleAddTask}
                    className="inline-flex items-center border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    <PlusIcon className="w-8 h-8" />
                </button>
            </div>
        </div>
    );
};

export default TaskInput;