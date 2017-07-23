import React, { Component } from 'react';
class ItemPanel extends Component {
	constructor(props) {
		super(props);
    }

	componentDidMount() {
	}

	render() {
		const item = this.props.item;
		return (
		  	<tr className="content-show">
                <td className="col-heading">
                	{item.headline}
                </td>
                <td className="col-source">
                    {item.source}
                </td>
                <td className="col-author">
                    {item.author}
                </td>
                <td className="col-content">
                    {item.content}
                </td>
                <td className="col-date">
                    {item.publishDate}
                </td>
                <td className="col-like">
                	{item.expert}
                </td>
            </tr>
		);
	}

}

module.exports = ItemPanel;
