import { createSlice } from "@reduxjs/toolkit";

interface InitState {
    sidebarActive: boolean;
    summaryGuideActive: boolean;
}

const initialState: InitState = {
    sidebarActive: false,
    summaryGuideActive: true,
};

const toggleSlice = createSlice({
    name: "toggleSlice",
    initialState,
    reducers: {
        toggleSidebar: (state, action) => {
            state.sidebarActive = action.payload;
        },
        toggleSummaryGuide: (state, action) => {
            state.summaryGuideActive = action.payload;
        },
    },
});

const { reducer: toggleReducer, actions: { toggleSidebar, toggleSummaryGuide } } = toggleSlice;

const toggleActions = {
    toggleSidebar,
    toggleSummaryGuide,
};

export { toggleReducer, toggleActions };