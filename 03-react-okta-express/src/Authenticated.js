import React, {Component} from 'react';

import {withAuth} from '@okta/okta-react';

export default withAuth(
    class Authenticated extends Component {

        render() {
            console.log('Authenticated:', this.props);
            return (
                <div style={{"background-color": "#BBCCBB"}}>
                    This is Authenticated
                    <br/><br/>
                    <button onClick={this.props.auth.logout}>Logout</button>
                </div>
            )
        }
    }
);