import * as React from "react";
import Context from "../store/Context";
import { StoreKey as S } from "../store/reducers/StoreKey";
import { SampleApi } from "./SampleApi";

@Context
export class EntryLayout extends React.Component<any, any> {

    componentDidMount() {
        // dummy action events
        this.props.doButtonClicked(true);
        this.props.doSampleApiList();
    }

    render() {

        const { context } = this.props;
        const sampleDataList = context.get(S.SAMPLEDATA_LIST).toJS();
        console.log('(sampleDataList)--->', sampleDataList);

        const sampleApiList = sampleDataList.map((value: any, index: number) => {
            return <SampleApi sampledata={value}/>;
        });

        return (
            <div style={{ padding: "20px" }}>
                <a>Next Interfaces</a>

                <h3>SAMPLEDATA List:</h3>
                <ul>
                    {sampleApiList}
                </ul>

            </div>
        );
    }

}
