import React, { useRef, useState } from 'react'
import { Input,List } from 'antd';
import {Col,Row} from 'antd'
import axios from 'axios';
import servicePath from '../config/apiUrl'
import Link from 'next/link';
const {Search} = Input;
import '../static/style/pages/search.css'
const search = () => {
    const searchValue = useRef("");
    const [resultList, setResultList] = useState([]);
    const onSearch = (value) => {
        console.log(value)
        searchValue.current = value;
        search_axios_get();
    }
    const search_axios_get = () => {
        console.log("发送的内容"+searchValue.current)
        axios({
            method: 'post',
            url: servicePath.search,
            data: { searchValue: searchValue.current },
        }).then((res) => {
            console.log("成功")
            console.log(res.data.data)
            setResultList(res.data.data)
        })
        
    };
    return (
        <div>
            <br/>
            <Row justify="center">
            <Col xs={18} sm={18} md={15} lg={15} xl={14} >
             <Search placeholder="输入你要搜索的内容" onSearch={onSearch} enterButton />
            </Col>
            </Row>
            <Row justify="center">
            <List
                itemLayout='vertical'
                dataSource = {resultList}
                renderItem = {(item) => (
                    <List.Item>
                        <div className = "list-title">
                            <Link href = {{pathname: '/detailed', query: {id: item._id}}}>
                                <a><p dangerouslySetInnerHTML={{ __html: item.highlight.title }}></p></a>
                            </Link>
                        </div>
                        <div className="list-context">
                            {/* 应该 还有值得优化的地方 先打个 todo 标签 */}
                            <p dangerouslySetInnerHTML={{ __html: item.highlight.introduce }}></p>
                        </div>
                    </List.Item>
                )}
            />
            </Row>    
        </div>
    )
}


export default search
