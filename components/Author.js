import {Avatar, Divider} from 'antd'
import '../static/style/components/author.css'


const Author = () => {
    return (
        <div className='author-div comm-box'>
            <div><Avatar size = {100} src = 'https://ftp.bmp.ovh/imgs/2020/08/af75412b6bef9c5e.png'/></div>
            <div className="anthor-introduction">
                计算机科学与技术专业的一名大三学生，正在向全栈工程师的方向努力。终身学习，总有一天可以成功。
                {/* 分界线 */}
                <Divider>社交账号</Divider>
                <Avatar size = {28} icon="CSDN" className='account' />
                <Avatar size = {28} icon='QQ' className='account' />
                <Avatar size = {28} icon='wechat' className='account' />

            </div>
        </div>
    )
}

export default Author