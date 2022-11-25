import {combineReducers, configureStore} from '@reduxjs/toolkit'
import projectsReducer from './projects'

const rootReducer = combineReducers({
    projects: projectsReducer
})

export const createStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}
