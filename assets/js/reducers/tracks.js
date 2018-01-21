const initialState =  data_tracks;
const allTracks = all_data_tracks;
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TRACK':
            return [
                ...state,
                action.payload
            ];
        case 'SHOW_TRACKS':
            const count = action.payload.showCount;
            let new_state = allTracks.slice(0, count);
            return new_state;
        case 'DELETE_TRACK':
            return state.filter((track) => {
                return !track.id.includes(action.payload);
            });
        case 'SORT_TRACKS':
            if (action.payload.sortBy === 'ASC') {
                if (action.payload.sortTo === 'performer') {
                    state.sort((a,b) => {
                        return (a.performer > b.performer) ? 1 : ((b.performer > a.performer) ? -1 : 0);
                    });
                } else if (action.payload.sortTo === 'title') {
                    state.sort((a,b) => {
                        return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0);
                    });
                } else if (action.payload.sortTo === 'genre') {
                    state.sort((a,b) => {
                        return (a.genre > b.genre) ? 1 : ((b.genre > a.genre) ? -1 : 0);
                    });
                } else {
                    state.sort((a,b) => {
                        return (a.year > b.year) ? 1 : ((b.year > a.year) ? -1 : 0);
                    });
                }
                return state;
            } else {
                if (action.payload.sortTo === 'performer') {
                    state.sort((a,b) => {
                        return (a.performer < b.performer) ? 1 : ((b.performer < a.performer) ? -1 : 0);
                    });
                } else if (action.payload.sortTo === 'title') {
                    state.sort((a,b) => {
                        return (a.title < b.title) ? 1 : ((b.title < a.title) ? -1 : 0);
                    });
                } else if (action.payload.sortTo === 'genre') {
                    state.sort((a,b) => {
                        return (a.genre < b.genre) ? 1 : ((b.genre < a.genre) ? -1 : 0);
                    });
                } else {
                    state.sort((a,b) => {
                        return (a.year < b.year) ? 1 : ((b.year < a.year) ? -1 : 0);
                    });
                }
                return state;
            }
        default:
            return state;
    }
}