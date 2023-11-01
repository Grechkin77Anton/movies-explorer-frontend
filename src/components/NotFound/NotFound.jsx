import { Link, useNavigate } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
    const navigate = useNavigate();
    return(
        <main className='notfound__page'>
            <section className='notfound'>
                <h1 className='notfound__title'>404</h1>
                <p className='notfound__subtitle'>Страница не найдена</p>
                <Link onClick={() => navigate(-1)} className='notfound__link'>Назад</Link>
            </section>
        </main>
    )
}