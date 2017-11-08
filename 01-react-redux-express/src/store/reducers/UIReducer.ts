import * as Immutable from "immutable";

const DEFAULT_STATE = Immutable.fromJS({});

export default (state = DEFAULT_STATE, action: { type, payload, error }) => {

    if (action.error) {
        console.error('(action.error)', action.error, action.payload, action.payload.response.data);
        return state;
    }

    const payload = action.payload;

    switch (action.type) {

        default:
            return state;
    }

};
