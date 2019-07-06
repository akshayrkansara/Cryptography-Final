import React, { Component } from 'react';
// import { Text } from 'react-native';
import { Form, Button } from 'react-bootstrap';

class BruteForce extends Component {


    constructor(props) {
        super(props);
        this.state = {
            message: '',
            newMessage: ''
        }
    }
    
    encryptShift() {
        var key = 1;
        var str = this.state.newMessage.toLowerCase();
        var plainText = '';
        var output = '';
        if (key < 0)
            return (str, key + 26);

        // Encrypted Message variable
        for(var j=1; j<=10; j++){
        // Traverse through each character
        for (var i = 0; i < str.length; i++) {

            // Get the character we'll be appending
            var c = str[i];

            // If it's a letter...
            if (c.match(/[a-z]/i)) {

                // Get its code
                var code = str.charCodeAt(i);

                // Lowercase letters
                if ((code >= 97) && (code <= 122))
                    c = String.fromCharCode(((code - 97 - j) % 26) + 97);

            }

            plainText += c;
        }
        output = 'Encypted Message: ' + plainText
        this.setState({ message: output })
    }
}

    render() {
        return (
            <div>
                <h1>Brute Force</h1>
                <Form inline>
                    <table>
                        <tbody>
                            <tr>
                                <td> Encrypted Text: </td>
                                <td><input type='text'
                                        onChange={event => this.setState({ newMessage: event.target.value })}
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
                <Button onClick={() => this.encryptShift()}>Brute Force</Button>
            </div>
        )
    }
}

export default BruteForce;