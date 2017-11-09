import React, {Component} from 'react'

import {withAuth} from '@okta/okta-react'

export default withAuth(
    class AuthenticatedNot extends Component {
        render() {
            console.log('AuthenticatedNot: ', this.props)

            return (
                <div style={{"background-color": "#CCAAAA"}}>
                    This is Not Authenticated
                    <br/><br/>
                    <button onClick={this.props.auth.login}>Login</button>
                </div>
            )
        }
    }
)