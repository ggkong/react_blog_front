import React,{useState, useEffect} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Row, Col, List, Icon,Breadcrumb } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import axios from 'axios'
import servicePath from '../config/apiUrl'


const MyList = (list) => {
  useEffect(() => {setMylist(list.data)})
  const [mylist, setMylist] = useState(list.data)
  return (
    <div>
      <Head>
        <title>列表页</title>
      </Head>
      <Header />
      <Row className='comm-main' type = 'flex' justify='center'>
        <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}>
          <div className="bread-div">
            <Breadcrumb>
              <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
              <Breadcrumb.Item>{list.data[0].typeName}</Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <List 
            header = {<div>最新日志</div>}
            itemLayout='vertical'
            dataSource = {mylist}
            renderItem = {(item) => (
              <List.Item>
                <div className="list-title">
                  <Link href = {{pathname:'/detailed',query:{id:item.id}}}>
                    <a>{item.title}</a>
                  </Link>
                </div>

                <div className="list-icon">
                  <span><Icon type="calendar" /> {item.addTime}</span>
                  <span><Icon type="folder" /> {item.typeName}</span>
                  <span><Icon type="fire" /> { item.view_count }人</span>
                </div>

                <div className="list-context">{item.introduce}</div>  
              </List.Item>
            )}
          />   
        </Col>

        <Col className='comm-left' xs={0} sm={0} md={7} lg={7} xl={4}>
          <Author />  
          <Advert />
        </Col>
        
      </Row>
      <Footer />
    </div>
  )
}

MyList.getInitialProps = (context) => {
  const typeId = context.query.type_id;
  console.log(typeId)
  const promise = axios(servicePath.getListByTypeId+typeId).then((res) => {
    console.log(res.data)
    return res.data
  })
  return promise;
}



export default MyList