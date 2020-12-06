const initialState = {
    filters: {
        status: 'Active',
        colors: ['red', 'blue']
      }
}


export default function filterReducer(state=initialState,action){
    switch(action.type){
        case 'filters/statusFilterChanged':{
            return{
                ...state,
                filters:{
                    ...state.filters,
                    status: action.payload
                }
            }
        }
        default:
            return state
}
}