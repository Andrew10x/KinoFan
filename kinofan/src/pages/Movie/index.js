import React from 'react';
import './movie.css';
import image from './1.jpg';

export default function index() {
    const dayInMs = 3600 * 24 * 1000;
    let today = new Date();
    today = Number(today.setHours(0, 0, 0, 0));

    let dateArr = [];

    for(let i=0; i<8; i++) {
        let cur_day = today + i*dayInMs;
        dateArr.push(new Date(cur_day).getDate())
        console.log(dateArr)
    }
    return (
        <>
        <section id="movie">
            <img src={image} alt="img"/>
            <div className="text">
                <h2 className="title">Темний лицар</h2>
                <div className="field"><b>Оригінальна назва:</b> The Dark Knight</div>
                <div className="field"><b>Режисер:</b> Крістофер Нолан</div>
                <div className="field"><b>Мова:</b> українська</div>
                <div className="field"><b>Жанр:</b> Екшн, Драма</div>
                <div className="field"><b>Тривалість:</b> 152 хв.</div>
                <div className="field"><b>Студія:</b> Warner Bros. Pictures</div>
                <div className="plot"><p>У місті Ґотем кримінальний геній на прізвисько Джокер
                 грабує банки, що належать міській мафії.Тим часом окружний прокурор Гарві
                 Дент, прозваний Білим Лицарем Ґотема, намагається викорінити злочинність 
                 законними методами. На противагу йому таємничий герой Бетмен вершить 
                 правосуддя силою. Багатій Брюс Вейн, що насправді і є Бетменом, бачить у
                 Гарві заміну собі в ролі захисника Ґотема.  Вейн сподівається, що тепер зможе
                 возз'єднатися з Рейчел Доуз, у яку закоханий з дитинства. Коли, здавалося б, 
                 правосуддя перемогло, Джокер підкидає тіло чоловіка в костюмі 
                 Бетмена. </p></div>
            </div>
        </section>

        <section id="movie-time">
            <h2 className="title2">Розклад сеансів</h2>

            <div className="date">
                <div className="date-block">
                    <div className="cur-date">20 жовтня</div>
                    <div className="date-times">
                        <div>10:00</div>
                        <div>13:00</div>
                        <div>16:00</div>
                        <div>19:00</div>
                        <div>21:40</div>
                    </div>
                </div>
                <div className="date-block">
                    <div className="cur-date">20 жовтня</div>
                    <div className="date-times">
                        <div>10:00</div>
                        <div>13:00</div>
                        <div>16:00</div>
                        <div>19:00</div>
                        <div>21:40</div>
                    </div>
                </div>
                <div className="date-block">
                    <div className="cur-date">20 жовтня</div>
                    <div className="date-times">
                        <div>10:00</div>
                        <div>13:00</div>
                        <div>16:00</div>
                        <div>19:00</div>
                        <div>21:40</div>
                    </div>
                </div>
                <div className="date-block">
                    <div className="cur-date">20 жовтня</div>
                    <div className="date-times">
                        <div>10:00</div>
                        <div>13:00</div>
                        <div>16:00</div>
                        <div>19:00</div>
                        <div>21:40</div>
                    </div>
                </div>
            </div>
            
        </section>
        </>
    )
}
