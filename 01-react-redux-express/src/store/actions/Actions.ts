import ActionTypes from "./ActionTypes";
import { API } from "../../utils/API";

export default {

    doSampleApiList() {
        console.log('Action doSampleApiList');
        const httpPromise = API.axios().get('/api/v1/sampledata/');
        return { type: ActionTypes.LOAD_SAMPLEDATA_LIST, payload: httpPromise };
    },

    doButtonClicked(data: boolean) {
        console.log('Action doButtonClicked');
        return { type: ActionTypes.BUTTON_CLICKED, payload: data };
    },

};
