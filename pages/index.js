import React,{useState} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import axios from 'axios'
import { Row, Col, List, Icon} from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../static/style/pages/index.css'
import servicePath from '../config/apiUrl'


const Home = (ace) => {
  const [mylist, setMylist] = useState(ace.data)
  return (
    <div>
      <Head>
        <title>首页</title>
        <link rel="shortcut icon" href="https://s1.ax1x.com/2020/09/30/0nP73n.png" type="image/x-icon" />
      </Head>
      <Header />
      <Row className='comm-main' type = 'flex' justify='center'>
        <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}>
          <List 
            header = {<div>最新日志</div>}
            itemLayout='vertical'
            dataSource = {mylist}
            renderItem = {(item) => (
              <List.Item>
                <div className="list-title">
                  <Link href = {{pathname: '/detailed', query:{id:item.id}}}>
                    <a>{item.title}</a>
                  </Link>
                </div>
                <div className="list-icon">
                    <span><Icon type="calendar" /> {item.addTime}</span>
                    <span><Icon type="folder" /> {item.typeName}</span>
                    <span><Icon type="fire" /> {item.view_count}人</span>
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

Home.getInitialProps = () => {
  const promise = axios(servicePath.getArticleList).then(
    (res) => {
      console.log(res.data.data)
      return res.data
    }
  )
  return promise
}



export default Home
