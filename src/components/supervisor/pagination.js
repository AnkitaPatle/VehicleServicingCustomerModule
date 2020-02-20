import React, {Component} from "react";
import { Row, Col, Pagination, PaginationItem, PaginationLink } from "reactstrap";

class TablePagination extends Component {
	state = {
    currentPage: 0,
	};
	
	handleClick = (e, index) => {
		e.preventDefault();
		this.props.parentCallback(index);
    this.setState({
      currentPage: index
    }); 
	}
	
	render () {
		const { currentPage } = this.state;
		const pagesCount = this.props.pagesCount;
		return (
			<Row className="pagination-wrapper">
				<Col>
					<Pagination aria-label="Page navigation example">
						<PaginationItem disabled={currentPage <= 0}>
							<PaginationLink
								onClick={e => this.handleClick(e, currentPage - 1)}
								previous
								href="#"
							/>
						</PaginationItem>

						{[...Array(pagesCount)].map((page, i) => 
							<PaginationItem active={i === currentPage} key={i}>
								<PaginationLink onClick={e => this.handleClick(e, i)} href="#">
									{i + 1}
								</PaginationLink>
							</PaginationItem>
						)}

						<PaginationItem disabled={currentPage >= pagesCount - 1}>
							<PaginationLink
								onClick={e => this.handleClick(e, currentPage + 1)}
								next
								href="#"
							/>
						</PaginationItem>
					</Pagination>
				</Col>
			</Row>
		)
	} 
}

export default TablePagination;