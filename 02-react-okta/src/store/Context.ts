import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ActionCreators from "./actions/ActionCreators";

export default (ComposeComponent) => (
    connect(
        ({ context }) => ({ context }),
        (dispatcher) => {

            const actionCreators = bindActionCreators({
                doSampleApiList: ActionCreators.context.doSampleApiList,
                doButtonClicked: ActionCreators.context.doButtonClicked,
            }, dispatcher);

            return actionCreators;
        }
    )(ComposeComponent)
);
