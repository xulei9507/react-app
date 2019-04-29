import React from 'react';

class CommentForm extends React.Component {
    handleSubmit(event){
        event.preventDefault();
        console.log('提交表单')

        // 得到在浏览器上显示的元素-refs
        let author=this.refs.author.value,
            text=this.refs.text.value;

        console.log(author,text)

        // 儿子把数据交给爸爸
        // this.props.onCommentSubmit({author,text})
        
        // 更新状态重新显示组件
        this.props.onCommentSubmit({author,text,date:'刚刚'})

    }
    render() {
        return ( 
            // 事件-使用发生在组件上的事件
            <form className="ui reply form" onSubmit={this.handleSubmit.bind(this)}>
                <div className="field">
                {/*得到在浏览器上显示的元素-refs*/}
                    <input type="text" placeholder="姓名" ref="author"/>
                </div>
                <div className="field">
                    <textarea placeholder="评论" ref="text"></textarea>
                </div>
                <button type="submit" className="ui blue button">
                    添加评论
                </button>
            </form>
        )
    }
}

export { CommentForm as default };