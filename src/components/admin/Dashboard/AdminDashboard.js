import React, { useState } from 'react'
import { API_URL } from "./../../../config";
import {Container} from 'reactstrap'
import axios from "axios";
import moment from "moment";
import '../adminStyle.css';
import '../style.css';
import NavBar from "../navbar/NavBar";
import CanvasJSReact from '../../../assets/canvasjs.react';

import SideBar from '../sidebar/SideBar';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dataPoints =[];
class AadminDashboard extends React.Component{
	   
	constructor(props) {
		super(props);
		this.state ={
			responseData: ''
		}
      }
    componentDidMount() {
		this.fetchData();
	 }
	 fetchData(){
		 const that = this;
		 var chart = this.chart;
		 axios({
			method: "get",
			url: API_URL + "/admin/api/dashboard",
			config: {
			  headers: {
				"content-type": "application/json"
			  }
			}
		  })
		 .then(function (response) { 
			
		   if(response.status === 200){
			   
			   that.setState({ responseData: response.data });
			   var values = response.data.graphdata;
			  if(values != null){
				for (var i = 0; i < values.length; i++) {
					var   markedDate= moment(values[i]._id).format("YYYY-MM-DD");
					dataPoints.push({
						x:new Date(markedDate),
						y: values[i].count
					});
				}
			  }
			chart.render();
		   }else{
			 alert("Please try again later.");
		}
		 })
		 .catch(function (error) {
		   console.log(error);
		 });
	 }
 
    render(){
		console.log(JSON.stringify(this.state.responseData));
	    const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light1", // "light1", "dark1", "dark2"
			title:{
				text: "Weekly Statisticks"
			},
			axisY: {
				title: "",
				includeZero: false,
				suffix: "",
				valueFormatString: "#,###"
			},
			axisX: {
				title: "",
				prefix: "",
				interval: 2,
				valueFormatString: "DD-MMM" ,
			},
			
			data: [{
				type: "spline",
				lineColor:"#ffe02f", 
				 markerColor: "red" ,
				toolTipContent: "Week {x}: {y}%",
				dataPoints: dataPoints
					
				
				
			}]
		}
	
		
        return(
            <div  className="App wrapper">
     <NavBar></NavBar>
	<SideBar />
                <Container>
                    <div className="top-container">
                    <div className="card card-dashboard">
                        <div className="card-right">
						
						<i class="fa fa-server" aria-hidden="true"></i>
                        </div>
						
                        <div className="card-left">Total Service Requests<p className = "font-2rem"> {this.state.responseData.totalserive} </p>
                        </div>
                    </div>
                    <div className="card card-dashboard color-yellow">
                    <div className="card-right">
					<i class="fa fa-file" aria-hidden="true"></i>
					</div>
                        <div className="card-left">New Service Requests<p className = "font-2rem"> {this.state.responseData.newServices}</p></div>
                       
                    </div>
                    <div className=" card card-dashboard color-blue">
                    <div className="card-right">
					<i class="fa fa-bars" aria-hidden="true"></i>	
					</div>
                        <div className="card-left">Total Enquiries<p className = "font-2rem"> {this.state.responseData.totalenquire} </p></div>                  
                    </div>
                   
                    </div>
                    <div className="bottom-container">
                    <div>
			<CanvasJSChart options = {options} 
				 onRef={ref => this.chart = ref} 
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>  
                    </div>
                </Container>
                   
            </div>
        )
    }
}

export default AadminDashboard;