import bgImage from '../../assets/Main_page_light.png';
import classes from './main-page.module.css';

import { Layout } from 'antd';

import HeaderEl from '@components/Header/Header';
import Hero from '@components/Hero/Hero';
import FooterEl from '@components/Footer/Footer';
import SiderBar from '@components/Sider/Sider';

export const MainPage: React.FC = () => {
    return (
        <div className={classes.center}>
            <Layout
                className={classes.mainLayout}
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <SiderBar />
                <Layout style={{ backgroundColor: 'transparent' }}>
                    <HeaderEl />
                    <Hero />
                    <FooterEl />
                </Layout>
            </Layout>
        </div>
    );
};
