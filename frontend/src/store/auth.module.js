import AuthService from "../services/auth.service";
import { writable } from "svelte/store";

//check if logged in
const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

const AUTH = {
  state: initialState,
};

const login = (user) => {
  return AuthService.login(user).then(
    (user) => {
      AUTH.status.loggedIn = true;
      AUTH.user = user;
    },
    (error) => {
      AUTH.status.loggedIn = false;
      AUTH.user = null;
    }
  );
};

const logout = () => {
  AuthService.logout();
  AUTH.status.loggedIn = false;
  AUTH.user = null;
};

const register = (user) => {
  return AuthService.register(user).then(
    (response) => {
      AUTH.status.loggedIn = false;
      return Promise.resolve(response.data);
    },
    (error) => {
      AUTH.status.loggedIn = false;
      return Promise.reject(error);
    }
  );
};

const { subscribe, login, logout, register } = writable(AUTH);

export default {
  subscribe,
  login,
  logout,
  register,
};
