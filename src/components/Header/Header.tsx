import classes from './Header.module.css';
import { Layout } from 'antd';
import { Typography } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { Title, Text } = Typography;

interface HeaderProps {
    width: number;
}

const HeaderEl: React.FC<HeaderProps> = ({ width }) => {
    console.log(width);
    return (
        <Header
            className={classes.header}
            style={{
                minHeight: 'fit-content',
                height: 'fit-content',
                padding: '16px 24px',
            }}
        >
            <Text>Главная</Text>
            <Layout
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    margin: '8px 0 0',
                    backgroundColor: 'var(--color-primary-light-1)',
                }}
            >
                <Title level={1}>
                    Приветствуем тебя в CleverFit — приложении,
                    <br /> которое поможет тебе добиться своей мечты!
                </Title>
                <button className={classes.settingContainer}>
                    {(width > 834 || width <= 700) && <SettingOutlined />}
                    {width >= 700 && <p>Настройки</p>}
                </button>
            </Layout>
        </Header>
    );
};

export default HeaderEl;
