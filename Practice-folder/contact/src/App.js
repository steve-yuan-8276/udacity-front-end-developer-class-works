import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import ListContact from './ListContact'
import CreateList from './CreateList'
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {
    state={
        screen:'list', //list,create
        contacts : []
    }
    componentDidMount() {
        ContactsAPI.getAll().then((contacts) => {
            this.setState({ contacts })
        })
    }

    removeContact = (contact) => {
        this.setState((state) => ({
            contacts:this.state.contacts.filter((c) => c.id !== contact.id)
        }))
        ContactsAPI.remove(contact)
    }

    CreateList(contact) {
        ContactsAPI.create(contact).then(contact => {
            this.setState(state => ({
                contacts:state.contacts.concat([ contact ])
            }))
        })
    }

    render() {
        return (
            <div>
                <Route exact path = '/' render ={() => (
                    <ListContact
                        onDeleteContact={this.removeContact}
                        contacts={this.state.contacts}

                    />
                )}/>

                <Route path = '/create' render = {({history}) => (
                    <CreateList
                        onCreateList = {(contact) => {
                            this.createList(contact)
                            history('/')
                        }}
                    />
                )}/>
            </div>
        )
    }
}

export default App;
