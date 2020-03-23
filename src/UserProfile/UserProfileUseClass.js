import React, { Component } from 'react'
import { fetchProfile } from './api'

class UserProfile extends Component {
    state = { loading: false, data: null, error: null}
// this is an async function
// async funcName() { await asyncFunc(); }
    async componentDidMount() {
        try {
            this.setState({ loading: false })
            const data = await fetchProfile(this.props.id)
            this.setState({data})
        } catch(e) {
            this.setState({error: e})
        } finally {
            this.setState({ loading: false})
        }
    }

    render () {
        const {loading, error, data} = props
        if (loading) return <Spinner />
        if (error) return <Error error={error} />
        // do something with the data
    }

}


// The above code can be tedious
// Introducing Fetcher
// Fetcher is a React component that performs data fetching and returns a render prop to render the resulting data while performing loading and error on its own. Let’s dive into the code.