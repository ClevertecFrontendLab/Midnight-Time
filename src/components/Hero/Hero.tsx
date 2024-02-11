import { Card, Divider } from 'antd';
import { Layout } from 'antd';
import { HeartFilled, CalendarTwoTone, IdcardOutlined } from '@ant-design/icons';
import classes from './Hero.module.css';

const { Content } = Layout;

const Hero = () => {
    return (
        <Content>
            <div className={classes.heroInnerContainer}>
                <Card>
                    <article className='heroArticle'>
                        C CleverFit ты сможешь: <br />— планировать свои тренировки на календаре,
                        выбирая тип и уровень нагрузки;
                        <br />— отслеживать свои достижения в разделе статистики, сравнивая свои
                        результаты
                        <span className='heroLineBreak'>
                            <br />
                        </span>{' '}
                        с нормами и рекордами;
                        <br />— создавать свой профиль, где ты можешь загружать свои фото, видео и
                        отзывы
                        <span className='heroLineBreak'>
                            <br />
                        </span>{' '}
                        о тренировках;
                        <br />— выполнять расписанные тренировки для разных частей тела, следуя
                        подробным инструкциям и советам профессиональных тренеров.
                    </article>
                </Card>
                <Card style={{ marginTop: '24px' }}>
                    <p className='heroText'>
                        CleverFit — это не просто приложение, а твой личный помощник
                        <span className='heroLineBreak'>
                            <br />
                        </span>
                        в мире фитнеса. Не откладывай на завтра — начни тренироваться
                        <span className='heroLineBreak'>
                            <br />
                        </span>
                        уже сегодня!
                    </p>
                </Card>
                <div
                    style={{
                        display: 'flex',
                        gap: '16px',
                        marginTop: '24px',
                    }}
                >
                    <Card style={{ flex: '0 1 240px' }}>
                        <span className={classes.cardTitle}>Расписать тренировки</span>
                        <Divider style={{ margin: '12px 0' }} />
                        <div className={classes.cardIconContainer}>
                            <HeartFilled />
                            <p>Тренировки</p>
                        </div>
                    </Card>
                    <Card style={{ flex: '0 1 240px' }}>
                        <span className={classes.cardTitle}>Назначить календарь</span>
                        <Divider style={{ margin: '12px 0' }} />
                        <div className={classes.cardIconContainer}>
                            <CalendarTwoTone />
                            <p>Календарь</p>
                        </div>
                    </Card>
                    <Card style={{ flex: '0 1 240px' }}>
                        <span className={classes.cardTitle}>Заполнить профиль</span>
                        <Divider style={{ margin: '12px 0' }} />
                        <div className={classes.cardIconContainer}>
                            <IdcardOutlined />
                            <p>Профиль</p>
                        </div>
                    </Card>
                </div>
            </div>
        </Content>
    );
};

export default Hero;
