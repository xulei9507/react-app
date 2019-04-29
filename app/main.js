import 'semantic-ui/semantic.min.css!'
import React from 'react'
import ReactDOM from 'react-dom'
import CommentBox from './comment/CommentBox'

// 导入react router
import {Router,Route,Link,IndexRoute,Redirect} from 'react-router'
// 准备react组件
class App extends React.Component{
    // 组件的生命周期与路由
    componentDidMount(){
        console.log('App did mount')
    }
    // 组件离开将要发生的属性
    componentWillReceiveProps(){
        console.log('App will receive props')
    }
    // 组件完成更新
    componentDidUpdate(){
        console.log('App did update')
    }

    render(){
        return(
            <div>
                <div className="ui secondary pointing menu">
                    <Link to="/" className="item">首页</Link>
                    {/* <Link to="/tv" className="item">电视</Link> */}

                    {/* 查询符-query */}
                    <Link to="/tv" className="item" query={{orderBy:'date'}}>电视</Link>
                </div>
                {this.props.children}
            </div>
        )
    }
}
class TV extends React.Component{
    // 查询符-query
    constructor(props){
        super(props);
        let {query}=this.props.location
        console.log(this.props)
        console.log(query)
    }
    // 组件的生命周期与路由
    // 组建已经显示了
    componentDidMount(){
        console.log('TV did mount')
    }

    render() {
        return(
            <div>
                {/* <div className="ui info message">电视节目列表</div> */}
                {this.props.children}
            </div>
        )
    }
}
class Show extends React.Component{
    // 得到地址里的参数
    constructor(props){
        super(props)
        console.log(this.props.params)
    }
    render() {
        return(
            <h3>节目{this.props.params.id}</h3>
        )
    }
}

// 索引-IndexRoute
class Home extends React.Component{
    // 组件的生命周期与路由
    // 组件挂载
    componentDidMount(){
        console.log('Home did mount')
    }
    // 组件要被拿掉
    componentWillUnmount(){
        console.log('Home will unmount')
    }

    render() {
        return(
            <div className="ui info message">首页内容</div>
        )
    }
}
class ShowIndex extends React.Component{
    render() {
        return(
            <div className="ui info message">电视节目列表</div>
        )
    }
}

// 进入与离开-onEnter,onLeave
function handleEnter() {
    console.log('进入')
}
function handleLeave() {
    console.log('离开')    
}

// 定义路由
ReactDOM.render((
    <Router>
        <Route path="/" component={App}>
            {/* 索引-IndexRoute */}
            <IndexRoute component={Home}/>
            <Route path="tv" component={TV}>
                <IndexRoute component={ShowIndex}/>
                {/* <Route path="shows/:id" component={Show} /> */}

                {/* 路由里的绝对路径与重定向 */}
                {/* 绝对路径 */}
                {/* 进入与离开-onEnter,onLeave */}
                {/* <Route path="/shows/:id" component={Show}/> */}
                <Route path="/shows/:id" component={Show} onEnter={handleEnter} onLeave={handleLeave}/>
                {/* 重定向 */}
                <Redirect from="shows/:id" to="/shows/:id" />
            </Route>
        </Route>
    </Router>
),document.getElementById('app'))




// 从爸爸那里得到数据
// var comments=[
//     {"author":"王皓","date":"5分钟","text":"天气不错"},
//     {"author":"王皓","date":"5分钟","text":"天气"}
// ]

// ReactDOM.render(    //参数：显示的组件、显示组件的位置
    // <CommentBox/>,
    
    // 从爸爸那里得到数据
    // <CommentBox data={comments}/>,

    // 从服务器端得到数据
//     <CommentBox url="app/comments.json"/>,
//     document.getElementById('app')
// )