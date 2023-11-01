import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__container'>
        <ul className='footer__nav'>
          <li><Link to={'https://practicum.yandex.ru'} className='footer__link' target='_blank'>Яндекс.Практикум</Link></li>
          <li><Link to={'https://github.com/Grechkin77Anton'} className='footer__link' target='_blank'>GitHub</Link></li>
        </ul>
        <p className='footer__subtitle'>&#169; 2023</p>
      </div>
    </footer>
  );
}
