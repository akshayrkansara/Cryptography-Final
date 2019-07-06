import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
// import MongoClient from 'mongodb';

class Shift extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: '',
            newMessage: '',
            newKey: '',
        }
    }

    encryptShift() {

        var key = parseInt(this.state.newKey,10);
        var str = this.state.newMessage.toLocaleLowerCase();
        // Encrypted Message variable
        var encyptedMessage = '';
        var output;
        if (key < 0)
            return (str, key + 26);

        // Traverse through each character
        for (var i = 0; i < str.length; i++) {

            var c = str[i];

            // Letters between a to z
            if (c.match(/[a-z]/i)) {

                // Get character code
                var code = str.charCodeAt(i);

                // Lowercase letters
                if ((code >= 97) && (code <= 122))
                    c = String.fromCharCode(((code - 97 + key) % 26) + 97);

            }

            encyptedMessage += c;
        }

        output = 'Encypted Message: ' + encyptedMessage 
        this.setState({ message: output })
    }

    render() {
        return (
            <div>
                <h1>Shift Cipher</h1>
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
                                            this.encryptShift()
                                        }
                                    }}
                                />
                            </td>
                        </ tr>
                        <tr>
                        <td>Key: </td>
                        <td><input type='text'
                                onChange={event => this.setState({ newKey: event.target.value })}
                                placeholder="Input value without space"
                                onKeyPress={event => {
                                if (event.key === 'Enter') {
                                    this.encryptShift()
                                }
                                }}
                            /></td>
                        </tr>
                        </tbody>
                    </table>
                </Form>
                <h3>{this.state.message}</h3>
                <Button onClick={() => this.encryptShift()}>Shift Cipher</Button>
            </div>
        )
    }
}

export default Shift;