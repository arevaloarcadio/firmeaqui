import user from "@/helpers/user";

/*
|--------------------------------------------------------------------------
| Mutation Types
|--------------------------------------------------------------------------
*/
export const SET_USER = 'SET_USER';
export const UNSET_USER = 'UNSET_USER';

/*
|--------------------------------------------------------------------------
| Initial State
|--------------------------------------------------------------------------
*/
const state = {
	user: {
		id: null,
		name: null,
		email: null,
		is_admin: null,
		photo: null,
	}
};

/*
|--------------------------------------------------------------------------
| Mutations
|--------------------------------------------------------------------------
*/
const mutations = {
	[SET_USER](state, payload) {
		state.user.id = payload.user.id;
		state.user.name = payload.user.name;
		state.user.email = payload.user.email;
		state.user.is_admin = payload.user.is_admin;
		state.user.photo = payload.user.photo;
	},
	[UNSET_USER](state, payload) {
		state.user.id = null;
		state.user.name = null;
		state.user.email = null;
		state.user.is_admin = null;
		state.user.photo = null;
	},
};

/*
|--------------------------------------------------------------------------
| Actions
|--------------------------------------------------------------------------
*/
const actions = {
	setAuthUser: (context, user) => {
		context.commit(SET_USER, {user})
	},
	unsetAuthUser: (context) => {
		context.commit(UNSET_USER)
	}
};

/*
|--------------------------------------------------------------------------
| Getters
|--------------------------------------------------------------------------
*/
const getters = {
	isLoggedIn: (state) => {
		return !!(state.user.name && state.user.email);
	},
	getUser: (state) => {
		return (state.user);
	},
	whoami: (state) => {
		return state.user.id;
	},

};

/*
|--------------------------------------------------------------------------
| Export the module
|--------------------------------------------------------------------------
*/
export default {
	state,
	mutations,
	actions,
	getters
}