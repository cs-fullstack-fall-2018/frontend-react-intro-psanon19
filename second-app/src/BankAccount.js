import React, {Component} from "react";




class BankAccount extends Component {
    render() {

        return <div className="BankAccount">
            <h1>Your First name is: {this.props.bankInfo[0].firstName}</h1>
            <h1>Your Balance is: {this.props.bankInfo[0].accountBalance}</h1>
        </div>
    }
}

export default BankAccount;