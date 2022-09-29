import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import style from './naStrategy.module.scss';

const NAStrategy = ({data}) => {

    useEffect(()=> {
        AOS.init();
    },[])

    console.log(data.image_strategy);
    return(
        <div className={style.container}>
            <div className={style.innerContainer}>
                <div className={style.head1}
                data-aos="slide-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
                data-aos-offset="0">
                    {data.sastrategy_head1}</div>
                <div className={style.head2}
                data-aos="slide-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
                data-aos-offset="0"
                >{data.sastrategy_head2}</div>
                <div className={style.imgContainer}>
                    <div className={style.imgcont1}>
                       {[...Array(2)].map((el,ind) => {
                            return(
                                <div key={ind} className={`${style.card} ${ind===0 ? style.mg_tp2 : style.mg_tp4}`}>
                                    <img className={style.imgEl} src={data.image_strategy.src} alt='logo' />
                                </div>
                            )
                       }) }
                    </div>
                    <div className={style.imgcont2}>
                        {[...Array(2)].map((el,ind) => {
                            return(
                                <div key={ind} className={`${style.card} ${style.mg_tp4}`}>
                                    <img className={style.imgEl} src={data.image_strategy.src} alt='logo' />
                                </div>
                            )
                       }) }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NAStrategy;