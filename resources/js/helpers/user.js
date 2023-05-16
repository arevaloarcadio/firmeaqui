export default {
	setUser(user) {
		window.localStorage.setItem('my_user', JSON.stringify(user));
	},
	getUser() {
		return window.localStorage.getItem('my_user');
	},
	removeUser() {
		window.localStorage.removeItem('my_user');
	}
}