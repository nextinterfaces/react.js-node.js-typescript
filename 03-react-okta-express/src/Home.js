import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {withAuth} from '@okta/okta-react'
import Authenticated from "./Authenticated"
import AuthenticatedNot from "./AuthenticatedNot"

export default withAuth(
    class Home extends Component {
        constructor(props) {
            super(props)
            this.state = {authenticated: null}
            this.checkAuthentication = this.checkAuthentication.bind(this)
            this.checkAuthentication()
        }

        async checkAuthentication() {
            const authenticated = await this.props.auth.isAuthenticated()
            if (authenticated !== this.state.authenticated) {
                this.setState({authenticated})
            }
        }

        componentDidUpdate() {
            this.checkAuthentication()
        }

        render() {
            if (this.state.authenticated === null) {
                return null
            }
            return this.state.authenticated ? <Authenticated/> : <AuthenticatedNot/>
        }
    }
)