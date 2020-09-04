// 文章详情页
import React from 'react'
import Head from 'next/head'
import {Row, Col, Breadcrumb,Icon,Affix} from 'antd'
import axios from 'axios'
import 'markdown-navbar/dist/navbar.css';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css'

import Tocify from '../components/tocify.tsx'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'

import servicePath from '../config/apiUrl'

import '../static/style/pages/detailed.css'

const Detailed = (list) => {

  const tocify = new Tocify() 

  const renderer = new marked.Renderer();
  // create fun to 
  renderer.heading = function(text, level, raw) {
    const anchor = tocify.add(text, level)
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  };  

  marked.setOptions({
    renderer: renderer,
    gtm:true,
    pedantic:false,
    sanitize:false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  });
  let html = marked(list.article_content)

  return (
        <>
        <Head>
          <title>博客页详情</title>
        </Head>
        <Header />
        <Row className="comm-main" type="flex" justify="center">
          <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
            <div>
              <div className='bread-div'>
                <Breadcrumb>
                  <Breadcrumb.Item><a href='/'>首页</a></Breadcrumb.Item>
                  <Breadcrumb.Item><a href={'/list?type_id='+list.type_id}>{list.typeName}</a></Breadcrumb.Item>
                  <Breadcrumb.Item>{list.title}</Breadcrumb.Item>
                </Breadcrumb>
              </div>
              
              <div>
                <div className='detailed-title'>
                  {list.title}
                </div>
                
                <div className="list-icon center">
                  <span><Icon type="calendar" /> {list.addTime}</span>
                  <span><Icon type="folder" /> {list.typeName}</span>
                  <span><Icon type="fire" /> {list.view_count}人 </span>
                </div>

                <div className='detailed-content'
                dangerouslySetInnerHTML= {{__html:html}} >
                </div>
                
              </div>


            </div>
          </Col>

          <Col className="comm-right" xs={0} sm={0} md={7} lg={7} xl={4}>
            <Author />
            <Advert />
            <Affix offsetTop={5}>
              <div className="detailed-nav comm-box">
                <div className="nav-title">文章目录</div>
                  <div className="toc-list">
                    {tocify && tocify.render()}
                  </div>
              </div>
            </Affix>
           
          </Col>
        </Row>
        <Footer />

    </>
  )
}

Detailed.getInitialProps = (context) => {
  console.log(context.query.id) // 查询上下文 id号
  const promise = axios(servicePath.getArticleById+context.query.id).then(
    (res) => {
      console.log(res.data)
      // 返回一个数组 便于接收
      return res.data.data[0]
    }
  )

  return promise
}


export default Detailed