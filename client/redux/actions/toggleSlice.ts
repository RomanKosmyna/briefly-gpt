import { createSlice } from "@reduxjs/toolkit";

interface InitState {
    sidebarActive: boolean;
}

const initialState: InitState = {
    sidebarActive: false,
};

const toggleSlice = createSlice({
    name: "toggleSlice",
    initialState,
    reducers: {
        toggleSidebar: (state, action) => {
            state.sidebarActive = action.payload;
        },
    },
});

const { reducer: toggleReducer, actions: { toggleSidebar } } = toggleSlice;

const toggleActions = {
    toggleSidebar,
};

export { toggleReducer, toggleActions };