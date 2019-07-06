import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class Vigenere extends Component {

    constructor(props) {
        super(props);

        this.state = {
            encryptKey: '',
            message:'',
            newMessage: ''
        }
    }
    

    encryptVigenere() {
        var key = 'test';
        var str = this.state.newMessage.toLocaleLowerCase();
        var newKey="";
        var encyptedMessage = '';
        var c;
        var output = '';

        for (var i=0; i<str.length; i++)
        {
            if(i === key.length)
               i=0;
               newKey += key[i];
            if(newKey.length === str.length)
                break;
        }
        // Encrypted Message variable
    
            for (var j = 0; j < str.length; j++) {
               c = String.fromCharCode((((str.charCodeAt(j) + newKey.charCodeAt(j)) - 64) % 26)+ 97);
               encyptedMessage += c;
            }
        // returns encrypted message
        output = 'Encypted Message: ' + encyptedMessage 
        this.setState({ message: output })

    }

    render() {
        return (
            <div>
                <h1>Vigenere Cipher</h1>
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
                                                this.encryptVigenere()
                                            }
                                        }}
                                /></td>                    
                            </tr>
                        </tbody>
                    </table>
                </Form>
                <h3>{this.state.message}</h3>
                <Button onClick={() => this.encryptVigenere()}> Vigenere Cipher </Button>
            </div>
        )
    }
}

export default Vigenere;