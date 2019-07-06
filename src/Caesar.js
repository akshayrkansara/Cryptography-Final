import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class Caesar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: '',
            newMessage: ''
        }
    }

    encryptCaesar() {

        var key = 3;
        var str = this.state.newMessage.toLocaleLowerCase();
        var output = '';
        if (key < 0)
            return (str, key + 26);

        var encyptedMessage = '';

        // Traverse through each character
        for (var i = 0; i < str.length; i++) {

            // Get the character we'll be appending
            var charCodeTOChar = str[i];

            // // Letters between a to z
            if (charCodeTOChar.match(/[a-z]/i)) {

                // Get character code
                var characterCode = str.charCodeAt(i);

                // Convert Lowercase
                if ((characterCode >= 97) && (characterCode <= 122))
                    charCodeTOChar = String.fromCharCode(((characterCode - 97 + key) % 26) + 97);
            }
            encyptedMessage += charCodeTOChar;
        }
        output = 'Encypted Message: ' + encyptedMessage 
        this.setState({ message: output })
    }

    render() {
        return (
            <div>
                <h1>Caesar Cipher</h1>
                <Form inline>
                    <table>
                        <tbody>
                            <tr>
                                <td> Plain Text: </td>
                                <td><input type='text'
                                        onChange={event => this.setState({ newMessage: event.target.value })}
                                        placeholder="Input value without space"
                                        onKeyPress={event => {
                                        if (event.key === 'Enter') {
                                            this.encryptCaesar()
                                        }
                                    }}
                                /></td>
                            </tr>
                        </tbody>
                    </table>
                </Form>
                <h3>{this.state.message}</h3>
                <Button onClick={() => this.encryptCaesar()}>Caesar Cipher</Button>
            </div>
        )
    }
}

export default Caesar;