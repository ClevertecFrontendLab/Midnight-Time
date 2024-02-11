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
                        </span>{' '}
                        в мире фитнеса. Не откладывай на завтра — начни тренироваться{' '}
                        <span className='heroLineBreak'>
                            <br />
                        </span>{' '}
                        уже сегодня!
                    </p>
                </Card>
                <div className={classes.optionsCardContainer}>
                    <Card className='optionsCard'>
                        <span className={classes.cardTitle}>Расписать тренировки</span>
                        <Divider style={{ margin: '12px 0' }} />
                        <div className={classes.cardIconContainer}>
                            <button className={classes.cardIcon}>
                                <HeartFilled />
                                <p>Тренировки</p>
                            </button>
                        </div>
                    </Card>
                    <Card className='optionsCard'>
                        <span className={classes.cardTitle}>Назначить календарь</span>
                        <Divider style={{ margin: '12px 0' }} />
                        <div className={classes.cardIconContainer}>
                            <button className={classes.cardIcon}>
                                <CalendarTwoTone />
                                <p>Календарь</p>
                            </button>
                        </div>
                    </Card>
                    <Card className='optionsCard'>
                        <span className={classes.cardTitle}>Заполнить профиль</span>
                        <Divider style={{ margin: '12px 0' }} />
                        <div className={classes.cardIconContainer}>
                            <button className={classes.cardIcon}>
                                <IdcardOutlined />
                                <p>Профиль</p>
                            </button>
                        </div>
                    </Card>
                </div>
            </div>
        </Content>
    );
};

export default Hero;
