import React, { useRef, useState } from 'react'
import { Input,List } from 'antd';
import {Col,Row} from 'antd'
import axios from 'axios';
import servicePath from '../config/apiUrl'
const {Search} = Input;
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
             <Search placeholder="input search text" onSearch={onSearch} enterButton />
            </Col>
            </Row>
            <Row justify="center">
            <List
                itemLayout='vertical'
                dataSource = {resultList}
                renderItem = {(item) => (
                    <List.Item>
                        <p dangerouslySetInnerHTML={{ __html: item.highlight.introduce }}></p>
                        {/* <p dangerouslySetInnerHTML={{ __html: item.highlight.title }}></p> */}
                        {/* <p dangerouslySetInnerHTML={{ __html: item.highlight.article_content }}></p> */}
                    </List.Item>
                )}
            />
            </Row>
            
            
                
        </div>
    )
}


export default search
