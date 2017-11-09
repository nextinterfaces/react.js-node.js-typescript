import React, {Component} from 'react'

import {withAuth} from '@okta/okta-react'

export default withAuth(
    class AuthenticatedNot extends Component {

        render() {
            return (
                <div style={{"background-color": "#CCAAAA"}}>

                    This is Not Authenticated
                    <br/><br/><br/>

                    <button onClick={this.props.auth.login}>Login</button>

                     <br/><br/><br/>
                </div>
            )
        }
    }
)