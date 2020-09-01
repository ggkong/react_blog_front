import React from 'react'
import '../static/style/components/header.css'
// 添加 栅格组件 便于做响应式
import {Row, Col, Menu} from 'antd'

const Header = () => {
    return (
        <div className = "header">
            <Row type = 'flex' justify = 'center'>
                <Col  xs={24} sm={24} md={10} lg={15} xl={12}>
                    <span className="header-logo">孔格</span>
                    <span className="header-txt">这是孔格做的第一个react的博客。</span>
                </Col>

                <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu  mode="horizontal">
                        
                        <Menu.Item key="home">
                            首页
                        </Menu.Item>

                        <Menu.Item key="video">
                            技术
                        </Menu.Item>
                    
                        <Menu.Item key="life">
                            生活
                        </Menu.Item>
                    
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}

export default Header;