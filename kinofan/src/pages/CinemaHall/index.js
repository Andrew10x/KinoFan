import React, {useEffect} from 'react';
import './cinemaHall.scss';
import chairImg from '../../assets/chair.png';

export default function CinemaHall() {

    useEffect(()=>{
        document.getElementById("title").innerText = 'Вибір місць';
      }, [])

    //const i_size = 10, j_size = 11;
    let chairArr = [];
    for(let i=0; i<120; i++) {
        chairArr.push(1);
    }

    return (
        <section id="cinema-hall">
            <div className="container">
                <h1>Темний лицар</h1> 
                <div>20 жовтня 21:40</div>
                <div className="screen">Екран</div> 
                <div className="hall">
                {chairArr.map((place, index) => (index%12 === 0 || index%12 === 11?<div className="row">{Math.floor(index/12) +1}</div>:
                 <div><img className="chair" alt="seat" src={chairImg}></img>{index%12 === 10?<div className="number number12">{index%12}
                 </div>:<div className="number">{index%12}</div>}</div>))
                } 
                </div> 
                </div>
        </section>
    )
}
