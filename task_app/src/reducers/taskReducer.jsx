const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [], //initial state from local storage
    loading: false,
    error: null,
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_TASKS_REQUEST':
            return {
                ...state,
                loading: true,
            };

        case 'FETCH_TASKS_SUCCESS':
            return {
                ...state,
                loading: false,
                tasks: action.payload,
            };

        case 'FETCH_TASKS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case 'ADD_TASK':
            const updatedTasksAdd = [...state.tasks, action.payload];
            localStorage.setItem('tasks', JSON.stringify(updatedTasksAdd));
            return {
                ...state,
                tasks: updatedTasksAdd,
            };

        case 'DELETE_TASK':
            const updatedTasksDelete = state.tasks.filter(
                (task) => task.id !== action.payload
            );
            localStorage.setItem('tasks', JSON.stringify(updatedTasksDelete));
            return {
                ...state,
                tasks: updatedTasksDelete,
            };

        default:
            return state;
    }
};

export default taskReducer;