import React from 'react';
import './App.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled } from 'react-codemirror2';
import Axios from 'axios';

function Editor({ language, value, onCodeChange }) {

    function handleCodeChange(editor, data, value){
        onCodeChange(value);
    }

    const share = e =>{
        
        e.preventDefault();
        
        const codeToSend = { title: value };
        Axios.post('https://reqres.in/api/values', codeToSend) // The api can be set as per preference.
            .then((response) => {
                console.log(response);
                alert("Your Code has been successfully sent.")
            })
            .catch(error => {
                alert(error.message);
            });
    };


    return (
        <div className="editor">
             
            <Controlled
                onBeforeChange = {handleCodeChange}
                value = {value}
                className = "code-editor-style"
                options = {{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: 'material',
                    lineNumbers: true,

                }}

            />
            
        </div>
    )
}

export default Editor






