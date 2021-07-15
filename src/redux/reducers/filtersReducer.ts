
type InitialStateType = {
    sortBy: string
    category: number
}
type ActionsFiltersType = SetSortByType | SetCategoryType


const initialState: InitialStateType = {
    sortBy: 'popular',
    category: 0,
}

export const filtersReducer = (state = initialState, action: ActionsFiltersType) => {
    switch (action.type) {
        case "SET_SORT_BY": {
            return {
                ...state,
                sortBy: action.payload
            }
        }
        case "SET_CATEGORY":{
            return {
                ...state,
                category: action.payload
            }
        }
        default :
            return state
    }
}


export const setSortBy = (name: string) => {
    return {type: 'SET_SORT_BY', payload: name} as const
}
export const setCategory = (value: number) => {
    return {type: 'SET_CATEGORY', payload: value} as const
}

type SetSortByType = ReturnType<typeof setSortBy>
type SetCategoryType = ReturnType<typeof setCategory>