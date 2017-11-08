import * as React from "react";
import Context from "../store/Context";

@Context
export class SampleApi extends React.Component<any, any> {

    render() {
        const { sampledata } = this.props;
        return (
            <i>{JSON.stringify(sampledata)}</i>
        );
    }

}
