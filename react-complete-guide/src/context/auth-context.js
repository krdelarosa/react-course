import React from 'react'; // to bypass prop chaining, and passing props values to other components

const authContext = React.createContext({
    authenticate: false,
    login: () => {}
});

export default authContext;