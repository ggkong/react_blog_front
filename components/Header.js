import React, {useState, useEffect} from 'react'
import '../static/style/components/header.css'
// 添加 栅格组件 便于做响应式
import {Row, Col, Menu} from 'antd'
import Link from 'next/link'
import axios from 'axios'
import servicePath from '../config/apiUrl'
import Router from 'next/router'
import { urlObjectKeys } from 'next/dist/next-server/lib/utils'
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const Header = () => {
    // 使用  useState 来定义 navArray 使其成为一个数组
    const [navArray, setNavArray] = useState([])
    // useEffect 相当于 react 中的更新周期函数 后面的括号表示监听将要更新的变量 如果什么都不写 表示 仅在页面进行更新的时候使用该方法
    useEffect(() => {
        const promise = axios(servicePath.getTypeInfo).then((res) => {
            setNavArray(res.data.data);
        })
    }, [])
    // 根据key 值进行跳转
    const handleClick = (e) => {
        if (e.key == 0){
            // 如果点击了 首页 那就返回到 url/ 地址
            Router.push('/')
        }else {
            Router.push('/list?type_id='+e.key)
        }
    }

    const searchArticle = () => {
        console.log("点击了搜索按钮")
        Router.push('/search')
    }
    

    return (
        <div className = "header">
            <Row type = 'flex' justify = 'center'>
                <Col  xs={22} sm={22} md={8} lg={13} xl={10}>
                    <span className="header-logo">霜序十三</span>
                    <span className="header-txt">这是霜序十三做的第一个react的博客.</span>
                </Col>
                <Col xs = {2} sm = {2} md ={2} lg = {2} xl = {2}>
                    <Button  onClick = {searchArticle} shape="circle" icon={<SearchOutlined />} />
                </Col>

                <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu  mode="horizontal" onClick = {handleClick}>
                        
                        <Menu.Item key="0">
                            首页
                        </Menu.Item>

                        {
                            navArray.map((item) => {
                                return (
                                    <Menu.Item key = {item.Id}>
                                   {item.typeName}
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}

export default Header;