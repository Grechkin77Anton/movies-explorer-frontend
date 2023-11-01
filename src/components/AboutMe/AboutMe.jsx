import './AboutMe.css';
import photo from '../../images/author.png';
import { Link } from 'react-router-dom';

export default function AboutMe() {
    return(
        <section className='aboutme'>
             <h2 className='aboutme__title'>Студент</h2>
             <div className='aboutme__info'>
               <img className='aboutme__image' src={photo} alt='фотография автора'></img>
               <div className='aboutme__text-container'>
                <h3 className='aboutme__name'>Виталий</h3>
                <p className='aboutme__description'>Фронтенд-разработчик, 30 лет</p>
                <p className='aboutme__signature'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                <Link to='https://github.com/Grechkin77Anton' target='_blank' className='aboutme__link'>GitHub</Link>
               </div>
             </div>
        </section>
    )
}