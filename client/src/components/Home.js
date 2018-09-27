import React, { Component } from 'react';
import { Header, List } from 'semantic-ui-react';
import ChatWindow from './ChatWindow'
import UserFetcher from './UserFetcher'
import { connect } from 'react-redux'

const Home = ({ users }) => (
  <UserFetcher>
    <Header as='h1' textAlign='center'>Home Component</Header>
    <List divided relaxed>
      { users.map( user =>
          <List.Item key={user.id}>
            <List.Content>
              <List.Header>{user.email}</List.Header>
            </List.Content>
          </List.Item>
        )
      }
    </List>
  </UserFetcher>
);

const mapStateToProps = (state) => {
  return { users: state.users }
}

export default connect(mapStateToProps)(Home)

