import { Layout } from 'antd';
import { useState } from 'react';
import classes from './Sider.module.css';
import { MenuFoldOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const SiderBar = () => {
    const [sideBarIsOpen, setSideBarIsOpen] = useState(true);

    return (
        <Sider
            className={classes.sideBar}
            width='208'
            collapsed={!sideBarIsOpen}
            collapsedWidth='64'
        >
            Sider
            <button
                onClick={() => setSideBarIsOpen(!sideBarIsOpen)}
                className={classes.btnSliderDesctop}
                data-test-id='sider-switch'
            >
                <MenuFoldOutlined width={14} height={14} />
            </button>
        </Sider>
    );
};
export default SiderBar;
