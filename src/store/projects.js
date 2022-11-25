/*eslint-disable*/
import {createSlice} from '@reduxjs/toolkit'

const projectsSlice = createSlice({
    name: 'projects',
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    }
})

const {reducer: projectsReducer, actions} = projectsSlice
const {} = actions

export default projectsReducer
