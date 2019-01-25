import React from 'react';
import '../styles/InlineButtons.css'
class InlineButtons extends React.Component {
    render () {
        return <div className = "row mt-4" >
                    <div className = "col-md-6">
                        <button className = "btn btn-info form-control b0 text-right bold"><i className="fas fa-arrow-circle-right float-left mt-1"></i>Enter</button>
                    </div>
                    <div className = "col-md-6">
                        <button className = "btn btn-danger form-control b0 text-right bold" type = "reset"><i className="fas fa-times-circle float-left mt-1"></i>Clear</button>
                    </div>
                </div>
       
    }
}

export default InlineButtons;