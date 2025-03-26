export const addTask = (task) => {
    return {
        type: 'ADD_TASK',
        payload: task,
    };
};

export const deleteTask = (taskId) => {
    return {
        type: 'DELETE_TASK',
        payload: taskId,
    };
};

// Load tasks from localStorage
export const fetchTasks = () => {
    return (dispatch) => {
        dispatch({ type: 'FETCH_TASKS_REQUEST' });

        try {
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            dispatch({ type: 'FETCH_TASKS_SUCCESS', payload: tasks });
        } catch (error) {
            dispatch({ type: 'FETCH_TASKS_FAILURE', payload: error.message });
        }
    };
};
