// 定义组件
import React from 'react'
// 组件组合
import CommentList from './CommentList';
import CommentForm from './CommentForm';

import $ from 'jquery'

class CommentBox extends React.Component{
    // 状态
    constructor(props){
        super(props);   //创建父类的this对象
        this.state={data:[]};

        // $.ajax({
        //     url:this.props.url,
        //     dataType:'json',
        //     cache:false,
        //     success:comments=>{
        //         this.setState({data:comments})
        //     },
        //     error:(xhr,status,error)=>{
        //         console.log(error)
        //     }
        // })

        // 服务端数据更新时 更新组件的状态
        this.getComments();
        // setInterval(()=>this.getComments(),5000)
    }

    // 儿子把数据交给爸爸
    handleCommentSubmit(comment){
        console.log(comment);

        // 更新状态重新显示组件
        let comments=this.state.data,
            newComments=comments.concat(comment);
        this.setState({data:newComments})
    }


    // 服务端数据更新时 更新组件的状态
    getComments(){
        $.ajax({
            url:this.props.url,
            dataType:'json',
            cache:false,
            success:comments=>{
                this.setState({data:comments})
            },
            error:(xhr,status,error)=>{
                console.log(error)
            }
        })
    }
    render(){   //定义组件显示的东西
        return(
            <div className="ui comments">
                <h1>评论</h1>
                <div className="ui divider"></div>
                {/* <CommentList data={this.props.data}/> */}
                <CommentList data={this.state.data}/>
                {/* <CommentForm/> */}

                {/* 儿子把数据交给爸爸 */}
                <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)}/>
            </div>
        )
    }
}

export {CommentBox as default}