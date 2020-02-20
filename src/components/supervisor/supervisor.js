import React, { Component, useState } from 'react'
import { Table , TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, Row, Col, Collapse, CardBody } from 'reactstrap';
import classnames from 'classnames';
import SupervisorNavbarComponent from '../supervisor/supervisor-navbar';
import SupervisorSidebarComponent from '../supervisor/supervisor-sidebar';
import '../customer/customer.css';

const SupervisorComponent = (props) => {
	const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
	};

	const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(!isOpen);

	

		return (
			<div className="bodycolor">
				<SupervisorNavbarComponent />
				<SupervisorSidebarComponent />

				<div className="gridwrapper">
					<Nav tabs>
						<NavItem>
							<NavLink
								className={classnames({ active: activeTab === '1' })}
								onClick={() => { toggle('1'); }}
							>
								Vehical Assigned
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className={classnames({ active: activeTab === '2' })}
								onClick={() => { toggle('2'); }}
							>
								Vehical Service Approval
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className={classnames({ active: activeTab === '3' })}
								onClick={() => { toggle('3'); }}
							>
								Vehical Status
							</NavLink>
						</NavItem>
					</Nav>
					<TabContent activeTab={activeTab}>
						<TabPane tabId="1">
							<Row>
								<Col sm="12">
									<Table>
										<thead>
											<tr>
												<th>#</th>
												<th>First Name</th>
												<th>Last Name</th>
												<th>Username</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<th scope="row">1</th>
												<td>Mark</td>
												<td>Otto</td>
												<td>@mdo</td>
											</tr>
											<tr>
												<th scope="row">2</th>
												<td>Jacob</td>
												<td>Thornton</td>
												<td>@fat</td>
											</tr>
											<tr>
												<th scope="row">3</th>
												<td>Larry</td>
												<td>the Bird</td>
												<td>@twitter</td>
											</tr>
										</tbody>
									</Table>
								</Col>
							</Row>
						</TabPane>
						<TabPane tabId="2">
							<Row>
								<Col sm="12">
									<Button color="primary" onClick={close} style={{ marginBottom: '1rem' }}>Toggle</Button>
      						<Collapse isOpen={isOpen}>
										<Card>
											<CardBody>
											Anim pariatur cliche reprehenderit,
											enim eiusmod high life accusamus terry richardson ad squid. Nihil
											anim keffiyeh helvetica, craft beer labore wes anderson cred
											nesciunt sapiente ea proident.
											</CardBody>
										</Card>
									</Collapse>
								</Col>
							</Row>
						</TabPane>
					</TabContent>
				
					
					
				</div>
			</div>
		)
	
}

export default SupervisorComponent;
