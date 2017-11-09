import fetch from 'isomorphic-fetch'
import React, {Component} from 'react'
import {withAuth} from '@okta/okta-react'

export default withAuth(class MessageList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: null
        }
    }

    async componentDidMount() {
        try {
            const response = await fetch('http://localhost:3001/api/messages', {
                headers: {
                    Authorization: 'Bearer ' + await this.props.auth.getAccessToken()
                }
            })
            const data = await response.json()
            this.setState({messages: data.messages})

            console.log('MessageList: state', this.state)

        } catch (err) {
            console.log('(err)', err);
        }

    }

    render() {
        if (!this.state.messages) return <div>Loading...</div>

        return (
            <div>
                API result success:
                <br/>
                <code>{JSON.stringify(this.state.messages)}</code>
            </div>
        )
    }
})