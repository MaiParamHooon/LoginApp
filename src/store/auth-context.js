import React from "react";

const AuthContext = React.createContext({
	isLoggedIn: false,
	onLogout: () => {}, //idhr default dummy cheeze store kr diya kr jisse ide autocompletion mul jai
});

export default AuthContext;
