const initialState =  [
];

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TRACK':
            return [
                ...state,
                action.payload
            ];
        case 'DELETE_TRACK':
            return state;
        default:
            return state;
    }
}