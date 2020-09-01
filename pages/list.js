import React,{useState} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Row, Col, List, Icon,Breadcrumb } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'


const MyList = () => {
  const [mylist, setMylist] = useState([
    {title:'java教程',context:'Java是一种广泛使用的计算机编程语言，拥有跨平台、面向对象、泛型编程的特性，广泛应用于企业级Web应用开发和移动应用开发。任职于Sun微系统的詹姆斯·高斯林等人于1990年代初开发Java语言的雏形，最初被命名为Oak，目标设置在家用电器等小型系统的编程语言，应用在电视机、电话、闹钟、烤面包机等家用电器的控制和通信。由于这些智能化家电的市场需求没有预期的高，太阳计算机系统（Sun公司）放弃了该项计划。随着1990年代互联网的发展，Sun公司看见Oak在互联网上应用的前景，于是改造了Oak，于1995年5月以Java的名称正式发布。Java伴随着互联网的迅猛发展而发展，逐渐成为重要的网络编程语言。 Java编程语言的风格十分接近C++语言。继承了C++语言面向对象技术的核心，舍弃了容易引起错误的指针，以引用取代；移除了C++中的运算符重载和多重继承特性，用接口取代；增加垃圾回收器功能。在Java SE 1.5版本中引入了泛型编程、类型安全的枚举、不定长参数和自动装/拆箱特性。Sun微系统对Java语言的解释是：“Java编程语言是个简单、面向对象、分布式、解释性、健壮、安全与系统无关、可移植、高性能、多线程和动态的语言”Java不同于一般的编译语言或解释型语言。它首先将源代码编译成字节码，再依赖各种不同平台上的虚拟机来解释执行字节码，从而具有“一次编写，到处运行”的跨平台特性。在早期JVM中，这在一定程度上降低了Java程序的运行效率。但在J2SE1.4.2发布后，Java的运行速度有了大幅提升。与传统类型不同，Sun公司在推出Java时就将其作为开放的技术。全球的Java开发公司被要求所设计的Java软件必须相互兼容。“Java语言靠群体的力量而非公司的力量”是Sun公司的口号之一，并获得了广大软件开发商的认同。这与微软公司所倡导的注重精英和封闭式的模式完全不同，此外，微软公司后来推出了与之竞争的.NET平台以及模仿Java的C#语言。后来Sun公司被甲骨文公司并购，Java也随之成为甲骨文公司的产品。 '},
    {title:'python教程',context:'Python是一种广泛使用的解释型、高级编程、通用型编程语言，由吉多·范罗苏姆创造，第一版发布于1991年。Python是ABC语言的后继者，也可以视之为一种使用传统中缀表达式的LISP方言。Python的设计哲学强调代码的可读性和简洁的语法。相比于C++或Java，Python让开发者能够用更少的代码表达想法'},
    {title:'javaScript教程',context:'学习 JavaScript 语言，你会发现它有两种格式的模块。一种是 ES6 模块，简称 ESM；另一种是 Node.js 专用的 CommonJS 模块，简称 CJS。这两种模块不兼容。很多人使用 Node.js，只会用require()加载模块，遇到 ES6 模块就不知道该怎么办。本文就来谈谈，ES6 模块在 Node.js 里面怎么使用。'}
  ])

  return (
    <div>
      <Head>
        <title>列表页(技术)</title>
      </Head>
      <Header />
      <Row className='comm-main' type = 'flex' justify='center'>
        <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}>
          <div className="bread-div">
            <Breadcrumb>
              <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
              <Breadcrumb.Item>技术</Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <List 
            header = {<div>最新日志</div>}
            itemLayout='vertical'
            dataSource = {mylist}
            renderItem = {(item) => (
              <List.Item>
                <div className="list-title">{item.title}</div>
                <div className="list-icon">
                    <span><Icon type="calendar" /> 2019-06-28</span>
                    <span><Icon type="folder" /> 视频教程</span>
                    <span><Icon type="fire" /> 5498人</span>
                </div>

                <div className="list-context">{item.context}</div>  
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



export default MyList