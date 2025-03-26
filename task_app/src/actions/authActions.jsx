
export const loginUser = (username, password) => {
    return (dispatch) => {

        if (username === 'admin' && password === 'password') {
            const mockUser = {
                id: 1,
                name: 'Admin User',
                username: 'admin',
            };

            dispatch({ type: 'LOGIN_SUCCESS', payload: mockUser });
        } else {
            alert('Invalid credentials. Try again!');
        }
    };
};

export const logoutUser = () => {
    return {
        type: 'LOGOUT',
    };
};
