import { toggleReducer } from "@/redux/actions/toggleSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    toggleReducer,
});

const setupStore = (): ReturnType<typeof configureStore> => {
    return configureStore({
        reducer: rootReducer,
    });
};

type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore["dispatch"];

export type { AppDispatch, AppStore, RootState };

export { setupStore };