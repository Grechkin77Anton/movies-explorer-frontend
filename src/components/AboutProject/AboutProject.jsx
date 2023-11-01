import './AboutProject.css';

export default function AboutProject() {
    return (
        <section id='aboutProject' className='about__project'>
            <h2 className='about__title'>О проекте</h2>
            <div className='about__text'>
                <h3 className='about__subtitle'>Дипломный проект включал 5 этапов</h3>
                <p className='about__description'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                <h3 className='about__subtitle'>На выполнение диплома ушло 5 недель</h3>
                <p className='about__description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            <div className='about__time'>
            <p className='about__type_backend'>1 неделя</p>
            <p className='about__type_frontend'>4 недели</p>
            <span className='about__signature'>Back-end</span>
            <span className='about__signature'>Front-end</span>
            </div>
        </section>
    )
}