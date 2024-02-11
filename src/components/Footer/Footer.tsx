import classes from './Footer.module.css';
import { Layout } from 'antd';
import { Card } from 'antd';
import { Divider } from 'antd';
import { AndroidFilled } from '@ant-design/icons';
import { AppleFilled } from '@ant-design/icons';

const { Footer } = Layout;

const FooterEl = () => {
    return (
        <Footer
            style={{
                backgroundColor: 'transparent',
            }}
            id='footer'
            className={classes.footer}
        >
            <p className={classes.footerText}>Смотреть отзывы</p>
            <Card className={classes.footerCard} id='footerCard'>
                <div className={classes.footerCardInner}>
                    <p>Скачать на телефон</p>
                    <p>Доступно в PRO-тарифе</p>
                </div>
                <Divider style={{ margin: '12px 0' }} />
                <div className={classes.footerDownloadContainer}>
                    <div className={classes.footerDownload}>
                        <AndroidFilled width={14} height={14} />
                        <span>Android OS</span>
                    </div>
                    <div className={classes.footerDownload}>
                        <AppleFilled width={14} height={14} />
                        <span>Apple iOS</span>
                    </div>
                </div>
            </Card>
        </Footer>
    );
};

export default FooterEl;
