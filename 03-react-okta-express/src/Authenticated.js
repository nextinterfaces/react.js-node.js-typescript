import React, {Component} from 'react'

import {withAuth} from '@okta/okta-react'

import MessageList from './MessageList'

export default withAuth(
    class Authenticated extends Component {

        render() {
            console.log('Authenticated:', this.props.auth)
            return (
                <div style={{"background-color": "#BBCCBB"}}>

                    This is Authenticated
                    <br/><br/><br/>

                    <button onClick={this.props.auth.logout}>Logout</button>

                    <br/><br/><br/>
                    <MessageList/>

                </div>
            )
        }
    }
)