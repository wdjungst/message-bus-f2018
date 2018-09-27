import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { getUsers } from '../reducers/users'
import { 
  Dimmer,
  Loader,
} from 'semantic-ui-react'

class UserFetcher extends React.Component {
  state = { loaded: false }

  componentDidMount() {
    axios.get('/api/users')
      .then( res => { 
        this.props.dispatch(getUsers(res.data)) 
        this.setState({ loaded: true })
      })
  }

  render() {
    const { loaded } = this.state
    if (loaded)
      return this.props.children
    else
      return (
        <div>
          <Dimmer active />
          <Loader />
        </div>
      )
  }
}

export default connect()(UserFetcher)
