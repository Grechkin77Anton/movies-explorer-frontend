import { Link } from 'react-router-dom';
import './Portfolio.css';

export default function Portfolio() {
    return(
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <nav className='portfolio__nav'>
            <ul className='portfolio__lists'>
                <li className='portfolio__list'>
                <Link to={'https://grechkin77anton.github.io/how-to-learn/'} target='_blank' className='portfolio__link'>
                <p className='portfolio__description'>Статичный сайт</p>
                <button className='portfolio__button'/>
                </Link>
                </li>
                <li className='portfolio__list'>
                <Link to={'https://grechkin77anton.github.io/russian-travel/'} target='_blank' className='portfolio__link'>
                <p className='portfolio__description'>Адаптивный сайт</p>
                <button className='portfolio__button'/>
                </Link>
                </li>
                <li className='portfolio__list'>
                <Link to={'https://grechkin77anton.github.io/react-mesto-auth/'} target='_blank' className='portfolio__link'>
                <p className='portfolio__description'>Одностраничное приложение</p>
                <button className='portfolio__button' />
                </Link>
                </li>             
            </ul>
            </nav>
        </section>
    )
}