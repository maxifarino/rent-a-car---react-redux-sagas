import React from 'react';

const map = (props) => {

    return (
        <div className="row map w-100 mt-3 pt-4 pb-4 pl-4 pr-4">
            <div className="col-md-12">
                <p>Mapa</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.7273351008907!2d-58.46062118436219!3d-34.56045846271816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5d4baee7e69%3A0xc8bc5babb3b6b784!2sStreet+Rent+a+Car!5e0!3m2!1ses-419!2sar!4v1540255720046" height="200" frameborder="0" style={{ border: '0', width: '100%' }} allowfullscreen></iframe>
            </div>
        </div>
    );
}

export default map;