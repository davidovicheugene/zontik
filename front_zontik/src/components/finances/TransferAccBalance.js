import React from 'react';
import axios from 'axios'; 
import { Link } from 'react-router-dom'

function transfer_bal() {

}

class TransferAccBalance extends React.Component {
    state = { accounts: []}

    componentDidMount(){
        let data
  
        axios.get('http://127.0.0.1:8000/finances/accs_base_data/1') 
        .then(res => { 
            data = res.data; 
            this.setState({ accounts : data }); 
        }).catch(err => {})
    }
    render () {
        return (
            <div className="change_bal_cont">
                <span className='transfer_acc_span'>Откуда</span>
                <select className="select_acc_horizontal" id='acc_from_select'>
                    {this.state.accounts.map((output, id) => (
                         <option key={id} value={output.id}>{output.name}</option>
                    ))}
                </select>
                <span className='transfer_acc_span'>Куда</span>
                <select className="select_acc_horizontal" id='acc_to_select'>
                    {this.state.accounts.map((output, id) => (
                         <option key={id} value={output.id}>{output.name}</option>
                    ))}
                </select>
                <span className='transfer_acc_span'>Сумма в BYN</span>
                <div className="value_to_change" id='summ_to_change'>
                    <input className='amount_input' id='value_ch_input'></input>
                    <span>BYN</span>
                </div>
                <Link to={'finances/wallet'}><button className='complete_op_bal' onClick={transfer_bal}>Перевести</button></Link>
            </div> 
        )
    }

}

export {TransferAccBalance}