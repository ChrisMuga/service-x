import React, { Component } from 'react';
class InlineButtons extends React.Component {
    render () {
        return <div class = "row mt-4" >
                    <div class = "col-md-6">
                        <button class = "btn btn-success form-control b0 text-right">Enter</button>
                    </div>
                    <div class = "col-md-6">
                        <button class = "btn btn-danger form-control b0 text-right">Quit</button>
                    </div>
                </div>
       
    }
}

export default InlineButtons;