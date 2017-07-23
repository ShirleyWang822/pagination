import React, { Component } from 'react';
import 'css/list.css';
import { articles } from './constants';
import ItemPanel from './ItemPanel';

class ListingPage extends Component {
	constructor(props) {
		super(props);
        this.state = {
			pageNum: 0,
			pageSize: 3
		};
		this.getNewList = this.getNewList.bind(this);
    }

	componentDidMount() {
	}
	getNewList(index) {
		this.setState({
			pageNum: index
		})
	}
	renderListContent(articles){
		const pageNum = this.state.pageNum;
		const pageSize = this.state.pageSize;
		const start = pageNum * pageSize;
		const items = articles.items;
		const end = start + pageSize - 1;
		const currentList = items.filter((x, i) => {
			return i >= start && i <= end;
		});
		const totalPage = parseInt((items.length + pageSize -1) / pageSize);
		const ele = [];
		for(let i = 0; i < totalPage; i++) {
			ele.push(<li><a href="#" onClick={() => this.getNewList(i)}>{i + 1}</a></li>)
		}
		return (
				<div id="article-tab-1" className="tab-pane">
		            <div className="">
		                <table class="table">
						  <caption>pagination</caption>
						  <thead>
						    <tr>
						    	<th className="col-heading">标题</th>
		                        <th className="col-source">来源</th>
		                        <th className="col-author">作者</th>
		                        <th className="col-content">内容</th>
		                        <th className="col-date">时间</th>
		                        <th className="col-like">收藏</th>
						    </tr>
						  </thead>
						  <tbody>
						    {
                        		currentList.map((item) => {
                        			return <ItemPanel item={item} />
                        		})
                        	}
						  </tbody>
						</table>
						<nav aria-label="Page navigation">
						  <ul className="pagination">
						  	{ele}
						  </ul>
						</nav>
		            </div>
		        </div>
		);
	}

	render() {
		return (
		  	<div className="tabpanel-content">
		        <div className="">
		            {this.renderListContent(articles)}
		        </div>
		    </div>
		);
	}

}

module.exports = ListingPage;
