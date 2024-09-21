import React from 'react';
import axios from 'axios'; 
import {Link} from 'react-router-dom';


async function send_change_bal() {
    var selected_acc = document.getElementById("acc_ch_select");
    var selected_sign = document.getElementById("sign_ch_select").value;
    var value_to_change = parseFloat(document.getElementById("value_ch_input").value);
    var url = 'http://127.0.0.1:8000/finances/change_acc_bal/' + selected_acc.options[selected_acc.selectedIndex].value
    await axios.post(url, {
        balance: value_to_change,
        sign: selected_sign
      })
      .then(function (response) {
        console.log(response);
      })// если запрос успешно отправлен без ошибок, то мы ручками меняем данные, т.к. другое не работает
    // console.log(selected_acc.options[selected_acc.selectedIndex].value)
    // console.log(selected_sign.options[selected_sign.selectedIndex].value)
}

class ChangeAccBalance extends React.Component {
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
                <select className="select_acc_horizontal" id='acc_ch_select'>
                    {this.state.accounts.map((output, id) => (
                         <option key={id} value={output.id}>{output.name}</option>
                    ))}
                </select>
                <select className="select_acc_horizontal" id='sign_ch_select'>
                         <option value="+">Зачислить</option>
                         <option value="-">Списать</option>
                </select>
                <div id='summ_to_change'>
                    <input className='amount_input' id='value_ch_input'></input>
                    <span>BYN</span>
                </div>
                <Link to={'finances/wallet'}><button onClick={send_change_bal}>Совершить операцию</button></Link>
            </div> 
        )
    }

}

export {ChangeAccBalance}