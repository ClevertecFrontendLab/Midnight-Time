import classes from './Header.module.css';
import { Layout } from 'antd';
import { Typography } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { Title, Text } = Typography;

const HeaderEl = () => {
    return (
        <Header
            className={classes.header}
            style={{
                minHeight: '168px',
                height: 'min-content',
                padding: '16px 24px',
            }}
        >
            <Text>Главная</Text>
            <Layout
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    margin: '8px 0 0',
                    backgroundColor: 'var(--color-primary-light-1)',
                }}
            >
                <Title level={1} style={{ lineHeight: '1.3' }}>
                    Приветствуем тебя в CleverFit — приложении,
                    <br /> которое поможет тебе добиться своей мечты!
                </Title>
                <Layout
                    style={{
                        minWidth: '126px',
                        height: '32px',
                        display: 'flex',
                        gap: '10px',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}
                >
                    <SettingOutlined height={14} width={14} />
                    <Text>Настройки</Text>
                </Layout>
            </Layout>
        </Header>
    );
};

export default HeaderEl;
