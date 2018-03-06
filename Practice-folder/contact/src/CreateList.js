import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ImageInput from './ImageInput'
import serializeForm from 'form-serialize'


class CreateList extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, {hash : true })
        if(this.onCreateContact)
            this.onCreateContact(values)
    }

    render() {
        return(
            <div>
                <Link className = 'close-create-contact' to = '/'>Close</Link>
                <form onSubmit = {this.handleSubmit} className = 'create-contact-form'>
                    <ImageInput
                        className = 'create-contact-avatar-input'
                        name = 'avatarURL'
                        maxHight = {64}
                    />
                    <div className = 'create-contact-details'>
                        <input type = 'text' name = 'name' placeholder = 'Name'/>
                        <input type = 'text' name = 'email' placeholder = 'Email'/>
                        <button>Add Contact</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateList
