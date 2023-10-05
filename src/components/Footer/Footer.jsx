import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__container'>
        <nav className='footer__nav'>
          <Link to={'https://practicum.yandex.ru'} target='_blank' className='footer__link'>Яндекс.Практикум</Link>
          <Link to={'https://github.com/Grechkin77Anton'} target='_blank' className='footer__link'>GitHub</Link>
        </nav>
        <p className='footer__subtitle'>&#169; 2023</p>
      </div>
    </footer>
  );
}
