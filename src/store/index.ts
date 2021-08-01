import { createStore } from 'vuex';
import { auth } from '../config/firebase';
import Firebase from 'firebase';
import router from '../router/index';
export default createStore({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    async login({ commit }) {
      const provider = new Firebase.auth.GoogleAuthProvider();
      try {
        const res = await auth.signInWithPopup(provider);
        const user = {
          uid: res.user?.uid,
          name: res.user?.displayName,
          email: res.user?.email,
          picture: res.user?.photoURL,
        };
        commit('setUser', user);
        localStorage.setItem('token', res.user?.refreshToken || '');
        router.push({ name: 'About' });
      } catch (error) {
        console.log(error);
      }
    },

    async logout() {
      try {
        await auth.signOut();

        router.push({
          name: 'Home',
        });
      } catch (error) {}
    },

    checkAuthenticatedUser({ commit }) {
      try {
        auth.onAuthStateChanged((data) => {
          if (data) {
            const user = {
              uid: data.uid,
              name: data.displayName,
              email: data.email,
              picture: data.photoURL,
            };
            commit('setUser', user);
            router.push({ name: 'About' });
          } else {
            commit('setUser', null);
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  },
  modules: {},
});
