import React from 'react';
import './cinemaHall.scss';
import chairImg from '../../assets/chair.png';

export default function CinemaHall() {

    const i_size = 10, j_size = 11;
    let chairArr = [i_size][j_size];

    /*for(let i=0; i<i_size; i++) {
        for(let j=0; j<j_size; j++) {
            chairArr[i][j] = 1;
        }
    }*/

    return (
        <section id="cinema-hall">
            <div className="container">
                <h1>Темний лицар</h1> 
                <div>20 жовтня 21:40</div>
                <div className="screen">Екран</div> 
                <div className="hall"></div>
                {//chairArr.map(place => (<img className="chair" alt="seat" src={chairImg}></img>))
                }  
                </div>
        </section>
    )
}
