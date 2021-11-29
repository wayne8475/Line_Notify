import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class LineNF extends React.Component {
  render() {
    return (
        <div id="linewindow">
		    <div id="welcome-message1">Accton Line Notify</div>
		    <div id="welcome-message2">點擊下方按鈕註冊推播通知</div>
            <a href="https://notify-bot.line.me/oauth/authorize?response_type=code&scope=notify&response_mode=form_post&client_id=EvNyANGa6nH8QHAKqk1CIY&redirect_uri=https://wayne8475.github.io/Line_Notify/&state=998">
                <button id="loginbutton">Line Notify帳號綁定</button>
            </a>
	    </div>
    );
  }
}

// ========================================

ReactDOM.render(<LineNF />, document.getElementById("root"));
