import ActionTypes from "../actions/ActionTypes";
import * as Immutable from "immutable";
import { StoreKey as S } from "./StoreKey";

// Initial default state of store
const DEFAULT_STATE = Immutable.fromJS({
    'SAMPLEDATA_LIST': [],
});

export default (state = DEFAULT_STATE, action: { type, payload, error? }) => {

    const payload = action.payload;

    // If error exit
    if (action.error) {
        return state;
    }

    // Only success cases pass through
    switch (action.type) {

        case ActionTypes.LOAD_SAMPLEDATA_LIST:
            return state.set(S.SAMPLEDATA_LIST, Immutable.fromJS(payload.data));

        case ActionTypes.BUTTON_CLICKED:
            return state.set(S.BUTTON_CLICKED, payload.data);

        default:
            return state;
    }

};
