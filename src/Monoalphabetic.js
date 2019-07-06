import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class Monoalphabetic extends Component {


    constructor(props) {
        super(props);

        this.state = {
            message: '',
            newMessage: ''
        }
    }

    encryptMonoalphabetic() {
        var alpha = 'abcdefghijklmnopqrstuvwxyz'
        var key = 'mlkjihgfedcbazyxwvutsrqpon';
        var str = this.state.newMessage.toLocaleLowerCase();
        var output = '';

        // Encrypted Message variable
        var encyptedMessage = '';

        // Traverse through each character
        for (var i = 0; i < str.length; i++) {
            for(var j = 0; j<alpha.length; j++)
            {
                if(str[i] === alpha[j])
                {                    
                    encyptedMessage += key[j];
                }
            }
        }
        output = 'Encypted Message: ' + encyptedMessage 
        this.setState({ message: output })
    }

    render() {
        return (
            <div>
                <h1>Monoalphabetic Cipher</h1>
                <Form inline>
                    <table>
                        <tbody>
                            <tr>
                                <td> Plain Text: </td>
                                <td><input type='text'
                                        onChange={event => this.setState({ newMessage: event.target.value.substr(0, 255) })}
                                        placeholder="Input value without space"
                                        onKeyPress={event => {
                                            if (event.key === 'Enter') {
                                                this.encryptMonoalphabetic()
                                            }
                                        }}
                                /></td>
                            </tr>
                        </tbody>
                    </table>
                </Form>
                <h3>{this.state.message}</h3>
                <Button onClick={() => this.encryptMonoalphabetic()}>Monoalphabetic Cipher</Button>
            </div>
        )
    }
}

export default Monoalphabetic;