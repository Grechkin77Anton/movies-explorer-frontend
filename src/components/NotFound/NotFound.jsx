import { Link, useNavigate } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
    const navigate = useNavigate();
    return(
        <section className='notfound'>
            <h2 className='notfound__title'>404</h2>
            <p className='notfound__subtitle'>Страница не найдена</p>
            <Link onClick={() => navigate(-1)} className='notfound__link'>Назад</Link>
        </section>
    )
}