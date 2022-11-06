import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // not-authenticated, authenticated
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
        listProfile: null,
        listMenu: null
    },
    reducers: {
        login: (state, {payload} ) => {
            state.status = 'authenticatedd', // not-authenticated = authenticate;
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.errorMessage = null;
            state.listMenu = payload.listMenu;

        },
        logout: (state, {payload}) => {
            state.status = 'not-authenticatedd', // not-authenticated = authenticate;
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.listProfile = null,
            state.listMenu = null,
            state.errorMessage = payload?.errorMessage;
        },
        checkingCredentials: (state) =>{
            state.status = 'checking'

        },
        pending: (state, {payload}) => {
            state.status = 'pending',
            state.uid = payload.uid,
            state.listProfile = payload.listProfile;
            state.listMenu = payload.listMenu;

        }
        
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials, pending, loadProfiles } = authSlice.actions;