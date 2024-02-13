import bgImage from '../../assets/Main_page_light.png';
import classes from './main-page.module.css';

import { Layout } from 'antd';

import HeaderEl from '@components/Header/Header';
import Hero from '@components/Hero/Hero';
import FooterEl from '@components/Footer/Footer';
import SiderBar from '@components/Sider/Sider';
import { useEffect, useState } from 'react';

export const MainPage: React.FC = () => {
    // TODO вынести в хуки
    function useWindowWidth() {
        const [width, setWidth] = useState(window.innerWidth);
        function handleResize() {
            setWidth(window.innerWidth);
        }
        useEffect(() => {
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);
        return width;
    }

    const width = useWindowWidth();

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
                <SiderBar width={width} />
                <Layout style={{ backgroundColor: 'transparent' }}>
                    <HeaderEl width={width} />
                    <Hero />
                    <FooterEl />
                </Layout>
            </Layout>
        </div>
    );
};
