import { combineReducers } from '@reduxjs/toolkit'

import fileSearchReducer from '../features/fileSearch/fileSearchSlice'

const rootReducer = combineReducers({
    fileSearch: fileSearchReducer
})

export default rootReducer