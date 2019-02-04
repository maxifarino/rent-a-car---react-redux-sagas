import React from 'react';

const notification = (props) => {
    return (
        <div class="col-md-6 notification-1" id="notification1">
            <p><i class="far fa-calendar-alt"></i> Un usuario acaba de realizar una reserva desde Buenos Aires. <button onclick="myFunction()">X</button></p>
        </div>
    );
}

export default notification;