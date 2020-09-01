// 文章详情页
import React from 'react'
import Head from 'next/head'
import {Row, Col, Breadcrumb,Icon,Affix} from 'antd'
import ReactMarkdown from 'react-markdown'
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';

import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'

import '../static/style/pages/detailed.css'

const Detailed = () => {
  
let markdown='\n# P01:课程介绍和环境搭建\n' +
'[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
'> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
 '**这是加粗的文字**\n\n' +
'*这是倾斜的文字*`\n\n' +
'***这是斜体加粗的文字***\n\n' +
'~~这是加删除线的文字~~ \n\n'+
'\`console.log(111)\` \n\n'+
'# p02:来个Hello World 初始Vue3.0\n' +
'> aaaaaaaaa\n' +
'>> bbbbbbbbb\n' +
'>>> cccccccccc\n'+
'***\n\n\n' +
'# p03:Vue3.0基础知识讲解\n' +
'> aaaaaaaaa\n' +
'>> bbbbbbbbb\n' +
'>>> cccccccccc\n\n'+
'# p04:Vue3.0基础知识讲解\n' +
'> aaaaaaaaa\n' +
'>> bbbbbbbbb\n' +
'>>> cccccccccc\n\n'+
'#5 p05:Vue3.0基础知识讲解\n' +
'> aaaaaaaaa\n' +
'>> bbbbbbbbb\n' +
'>>> cccccccccc\n\n'+
'# p06:Vue3.0基础知识讲解\n' +
'> aaaaaaaaa\n' +
'>> bbbbbbbbb\n' +
'>>> cccccccccc\n\n'+
'# p07:Vue3.0基础知识讲解\n' +
'> aaaaaaaaa\n' +
'>> bbbbbbbbb\n' +
'>>> cccccccccc\n\n'+
'``` var a=11; ```\n\n'+
'# p08:Vue3.0基础知识讲解\n' +
'> aaaaaaaaa\n' +
'>> bbbbbbbbb\n' +
'>>> cccccccccc\n\n'+
'``` var a=11; ```\n\n'+
'# p09:Vue3.0基础知识讲解\n' +
'> aaaaaaaaa\n' +
'>> bbbbbbbbb\n' +
'>>> cccccccccc\n\n'+
'``` var a=11; ```\n\n'+
'# p10:Vue3.0基础知识讲解\n' +
'> aaaaaaaaa\n' +
'>> bbbbbbbbb\n' +
'>>> cccccccccc\n\n'+
'> aaaaaaaaa\n' +
'>> bbbbbbbbb\n' +
'>>> cccccccccc\n\n'+
'> aaaaaaaaa\n' +
'>> bbbbbbbbb\n' +
'>>> cccccccccc\n\n'+
'> aaaaaaaaa\n' +
'>> bbbbbbbbb\n' +
'>>> cccccccccc\n\n'+
'> aaaaaaaaa\n' +
'>> bbbbbbbbb\n' +
'>>> cccccccccc\n\n'+
'``` var a=11; ```\n\n'+
'# p11:Vue3.0基础知识讲解\n' +
'> aaaaaaaaa\n' +
'>> bbbbbbbbb\n' +
'>>> cccccccccc\n\n'+
'``` var a=11; ```'
  
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
                  <Breadcrumb.Item><a href='/list'>技术</a></Breadcrumb.Item>
                  <Breadcrumb.Item>xxxxxxxxxx</Breadcrumb.Item>
                </Breadcrumb>
              </div>
              
              <div>
                <div className='detailed-title'>
                  Vue 教程 持续更新
                </div>
                
                <div className="list-icon center">
                  <span><Icon type="calendar" /> 2020-08-26</span>
                  <span><Icon type="folder" /> 技术教程</span>
                  <span><Icon type="fire" /> 9999人</span>
                </div>

                <div className='detailed-content'>
                  <ReactMarkdown 
                    source={markdown}
                    escapeHtml={false}
                  />
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
                <MarkNav
                className="article-menu"
                source={markdown}
                ordered={false}
              />
              </div>
            </Affix>
           
          </Col>
        </Row>
        <Footer />

    </>
  )
}

export default Detailed