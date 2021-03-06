const React = require('react');
const ReactDOM = require('react-dom');
const path = require('path');

import { DangerRose } from './DangerRose.jsx';
import { AvyReport } from './AvyReport.jsx';
import { Radar } from './Radar.jsx';
import { WebCams } from './WebCams.jsx';
import { Temp } from './Temp.jsx';

const flex = {
	display       : 'flex',
	width         : '100vw',
	flexDirection : 'column',
	alignItems    : 'center'
};
const appStyle = {
	// border         : '80px solid #0A4287',
	width          : '100%',
	height         : 'auto',
	display        : 'flex',
	flexDirection  : 'column',
	justifyContent : 'space-around',
	alignItems     : 'center',
	justifySelf    : 'center',
	alignSelf      : 'center'
};
const imageStyle = {
	transform : 'rotate(91deg)',
	width     : '150vw',
	position  : 'fixed',
	top       : '0',
	opacity   : '.45',
	zIndex    : '-1'
};
const mainStyle = {
	display        : 'flex',
	flexDirection  : 'column',
	justifyContent : 'space-around',
	alignItems     : 'center',
	alignSelf      : 'center',
	// height         : '200vw'
	// width          : '100%',
	marginLeft     : 'auto',
	marginRight    : 'auto'
	// height: '200vh'
};
const roseStyle = {
	display        : 'flex',
	width          : '80vw',
	alignItems     : 'center',
	justifyContent : 'center',

	height         : 'auto',
	alignSelf      : 'center'
};
const headerStyle = {
	fontSize   : '2.5em',
	alignSelf  : 'center',
	textAlign  : 'center',
	color      : '#0A4287',
	textShadow : '2px 3px 3px #656A7F'
	// position  : 'absolute'
};
const avyReportOpen = {
	display       : 'flex',
	flexDirection : 'column',
	alignSelf     : 'center',
	textAlign     : 'center',
	marginLeft    : 'auto',
	marginRight   : 'auto'

	// alignSelf     : 'center',
	// width         : '80%'
};
const avyReportClosed = {
	display : 'none'
};

const topDivStyle = {
	display        : 'flex',
	flexDirection  : 'row',
	alignItems     : 'center',
	justifyContent : 'space-evenly',
	width          : '80%',
	height         : '50vw'
};

const weatherDataStyle = {
	display        : 'flex',
	flexDirection  : 'column',
	justifyContent : 'space-between',
	alignItems     : 'center',
	height         : '100%'
};
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			reportOpen : false,
			region     : 'salt-lake',
			UACResults : {
				'salt-lake' : {
					date_issued                     : 'Wednesday, May 1, 2019 - 10:30am',
					date_issued_timestamp           : '1556728221',
					current_conditions              :
						'This does not mean the end of avalanches. Spring storms and warm temperatures may make avalanche danger rise. If you scroll down, we provide some general avalanche advice to follow for typical spring weather patterns and&nbsp;we provide a series of other links you can use for current conditions and mountain weather.\r\r\r\tA full list of mountain weather stations can be found&nbsp;HERE.\r\tThe most recent observations can be found&nbsp;HERE.\r\r\r&nbsp;\r\r&nbsp;\r',
					mountain_weather                :
						"\r\r\r\r\r\r&nbsp;\r\r\r\tThanks to all of you who have sent observations this season. Crowd-sourcing is the most valuable information we get. Other avalanche centers all over the world are modeling our program. And special thanks to all the Utah avalanche professionals: ski areas, Utah Department of Transportation, guides and educators, Powderbirds and Park City Powder Cats.\r\r\r&nbsp;\r\r\r\tThanks to Rusty Billingsley and the National Weather Service&nbsp;who provide office space, weather forecasting, tech support and great company.\r\r\r&nbsp;\r\r\r\tSki areas are closing&nbsp;and each has a different&nbsp;uphill travel policy. Remember that areas open to uphill travel are no longer doing any avalanche mitigation work and must be treated as backcountry terrain.\r\r\r&nbsp;\r\r\r\tBe sure to mark your calendars&nbsp;- join us for the 26th Annual Fall Fundraiser Party at Black Diamond on&nbsp;Thursday, September 12th&nbsp;and the Utah Snow and Avalanche Workshop at Snowbird&nbsp;Saturday, November 2.\r\r\r&nbsp;\r\r\r\tThe Utah Avalanche Center is a partnership between the Forest Service and the non-profit Utah Avalanche Center.&nbsp;On the Forest Service side, thanks to unwavering support from our boss Renee Flanagan, Forest Supervisor Dave Whittekiend, the rest of the Uinta-Wasatch-Cache National Forest, Ted Scroggin and Rich Schuler at the Evanston Ranger District,&nbsp;Brian Murdock and Michael Diem of the Manti-La Sal National Forest and the financial support from Chris Hartman of the Forest Service Intermountain Region. Two thirds of the Utah Avalanche Center funding along with the awareness and education programs comes from the non-profit Utah Avalanche Center (Executive Director Chad Brackelsberg, employees Bo Torrey, Greg Gagne, Paige Pagnucco, Paul Diegel, and Trent Meisenheimer, interns Tomasz Stefankowski and Lewis Taylor, and Board of Directors Reid Persing, Kate Bowman, Ted Roxbury, Steve Achelis, Mike Brehm, Michael Brill, Al Richards, Liz Pedersen, Tyler Hansen, Nicole Sumner, Caitlin Hansen, and Jacob Splan.\r\r\r&nbsp;\r\r\r\tDirect funding comes from longtime partners, Utah Division of Parks and Recreation, Utah Division of Emergency Management, Salt Lake County and a grant from the Utah Recreational Trails Programs.\r\r\r\r\r\r\r\r\r\r\r\r\r\r\tGenerous support in the form of donated lift tickets and daily observations comes from Ski Utah, Alta, Beaver Mountain, Brighton, Deer Valley, Powder Mountain, Snowbasin, Snowbird, Solitude, Sundance, and Vail Resorts.\r\r\r\r\r\r\r\r\tBusiness sponsors who donate to the Utah Avalanche Center are too numerous to list here but you can find them on our&nbsp;Sponsors Page.\r\r\r\r\r\r\r&nbsp;\r\r\r\tAnd a special thanks to all of you who donate directly to the Utah Avalanche Center.&nbsp;We couldn't do this without your support.\r\r\r\r\r\r\r&nbsp;\r\r\r\tLearn what to watch for during&nbsp;spring avalanche conditions&nbsp;when the snow becomes wet&nbsp;with this video from the UAC.\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r",
					recent_activity                 : '&nbsp;\r\r&nbsp;\r',
					avalanche_problem_1             : 'Wet Snow',
					avalanche_problem_1_description :
						'When cold, dry snow becomes wet for the first time,&nbsp;it almost always means wet sluffs (loose snow that fans outward as it descends).\r\r&nbsp;\r\rLarger wet slab avalanches&nbsp;can happen when melt water percolates through a layered, winter snowpack for the first time especially after 3 days of strong melting combined with no refreeze at night.\r\r&nbsp;\r\rLuckily, wet avalanches usually don\'t last forever&nbsp;because over time,&nbsp;days or weeks, of percolating melt water, all the layers in the snow disappear and the snow becomes homogenous and dense, turning into a stable summer-like snowpack. Typically, this cycle of instability maturing into stability occurs first on the south facing slopes in early spring, then progresses to the east and west facing slopes in mid spring and finally by late spring, the upper elevation north facing slopes go through a wet avalanche cycle.\r\r&nbsp;\r\rFinally, glide avalanches occur regularly in spring as the entire snowpack slides slowly on the ground like a glacier until they suddenly release into a full-depth avalanche. These occur regularly on steep rock slabs and occasionally on steep grassy slopes. Notorious glide avalanche locations include places Stairs Gulch or the rock slabs in Broads Fork, which you should always avoid in spring. Avoid crossing under any slopes with telltale glide cracks in the snowpack. Remember they come down randomly, even at night.\r\r&nbsp;\r\rThe bottom line for wet avalanches:\rGet out early and get home early. Get off of--and out from underneath--any slope approaching 35 degrees or steeper when the snow becomes wet enough to not support your weight. Warning signs may include:\r\r&nbsp;\r\r\r\r\r\tRoller balls (pinwheels) in new snow that is getting wet for the first time\r\tNatural or human triggered wet sluffs\r\tSmall sluffs fanning out into larger slides, or running long distances\r\tPunchy or collapsing crusts\r\tCornices breaking off\r\tSeveral days of strong melting combined with no refreeze at night\r\r\r\r\rAny of these signs mean it\'s time to head home, or at least change to an aspect with cooler snow. Remember, even "smaller" slides can be dangerous in high-consequence terrain, such as above a terrain trap, trees, rocks, cliffs or a long, large avalanche path. Plan your trip to have a safe exit back to the car.&nbsp;\r\r&nbsp;\r\r&nbsp;\r\r&nbsp;\r\r&nbsp;\r',
					avalanche_problem_2             : 'New Snow',
					avalanche_problem_2_description :
						"We almost always get several winter-like snow storms in April and May.&nbsp;Treat each storm just like you would in winter. Avalanches can occur within the new snow typically from 1) low density layers deposited during the storm, 2) high precipitation intensity during a storm and 3) from wind slabs created during the storm.\r\r&nbsp;\r\rIt's easy to test the new snow&nbsp;as you travel by jumping on small test slopes to see if they avalanche or just dig down with your hand to see how well the new snow is bonding. Snow can change dramatically in both space and time so never let your guard down. Especially avoid any steep slope with recent wind deposits, which are almost always dangerous.\r\r&nbsp;\r\rPractice usual backcountry protocol, go one at a time, never travel above other people and practice all the usual risk reduction measures and low-risk travel ritual you learn in avalanche classes.\r",
					avalanche_problem_3             : 'Wind Drifted Snow',
					avalanche_problem_3_description :
						"For each storm it will be worth looking at the winds to find out which direction that have blown from and what direction they will be blowing for the day. &nbsp;Wind can rapidly load snow onto steep slopes making those slopes more prone to avalanching. &nbsp;Wind drifted snow&nbsp;looks rounded and pillowy, in some cases it can sound hollow like a drum. &nbsp;If you see shooting cracks it's a sign you may of hit a wind slab. &nbsp;Below are a few of my favorite wind stations for the SLC area:&nbsp;\r\r&nbsp;\r\rTop of Collins 10,400'\r\rCardiff Peak 10,000'&nbsp;\r\rTop of Great Western Lift 10,500'\r\rReynold Peak BCC 9,400'\r\rJupiter Peak Park City Ridge 10,000'\r\rDeer Valley Mount Baldy 9,350'\r\r&nbsp;\r\r&nbsp;\r\r&nbsp;\r\r&nbsp;\r\r&nbsp;\r\r&nbsp;\r\r&nbsp;\r\r&nbsp;\r\r&nbsp;\r",
					bottom_line                     :
						'Regular avalanche forecasts with avalanche danger ratings have ended.&nbsp;We will continue to post all observations so please keep submitting them as you get out in the mountains. &nbsp;\r\r&nbsp;\r\rDuring the spring we typically deal with three different avalanche problems: \r\r&nbsp;\r\r&nbsp;\r\r1. &nbsp;Wet snow:&nbsp; Get out early and get home early. Get off of--and out from underneath--any slope approaching 35 degrees or steeper when the snow becomes wet enough to not support your weight.&nbsp;\r\r&nbsp;\r\r2. &nbsp;New snow: &nbsp;We almost always get several winter-like snow storms in April and May.&nbsp;Treat each storm just like you would in winter. Avalanches can occur within the new snow typically from 1) low density layers deposited during the storm, 2) high precipitation intensity during a storm and 3) when cold, dry snow becomes wet for the first time,&nbsp;it almost always means wet sluffs (loose snow that fans outward as it descends). &nbsp;This can happen within minutes of direct sun on cold snow.&nbsp;\r\r&nbsp;\r\r3. Wind Drifted Snow: &nbsp;Wind can rapidly load snow onto steep slopes making those slopes more prone to avalanching. &nbsp;Wind drifted snow&nbsp;looks rounded and pillowy, in some cases it can sound hollow like a drum.&nbsp;&nbsp;Be sure to check upper elevation wind sites in the links below to get an idea of what the winds have been up to.&nbsp;\r\r&nbsp;&nbsp;\r\r',
					danger_rose_1                   :
						'14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14',
					danger_rose_2                   :
						'14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14',
					danger_rose_3                   :
						'14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14',
					overall_danger_rose             : '0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0',
					overall_danger_rose_image       : '/sites/default/files/forecast/201905/20190501-103022-5.png',
					overall_danger_rating           : 'None',
					region                          : 'Salt Lake'
				}
			}
		};
		this.click = this.click.bind(this);
	}

	click(command = null) {
		if (command === 'report') {
			this.setState({
				reportOpen : !this.state.reportOpen
			});
		}
	}
	componentDidMount() {
		//udpate avy report from database.
	}

	render() {
		return (
			<div style={flex}>
				<div style={appStyle}>
					<div style={headerStyle}>
						<h1>Avy Oatmeal</h1>
						<p>a bowl a day keeps the burial away</p>
					</div>
					<div className="main" style={mainStyle}>
						<div style={topDivStyle}>
							<div style={weatherDataStyle}>
								{/* <Temp site={} /> */}
								{/* <Weather site={'BCC'} /> */}
								<Temp site={'LCC'} />
							</div>
							<DangerRose
								clickH={this.click}
								rose={this.state.UACResults[this.state.region].overall_danger_rose_image}
								style={roseStyle}
							/>
							{/* <div style={weatherDataStyle}>
						
								{/* <Weather site={'LCC'} /> */}
							{/* </div> */}
						</div>
						<AvyReport
							reportStyle={

									!this.state.reportOpen ? avyReportClosed :
									avyReportOpen
							}
							clickH={this.click}
							report={this.state.UACResults[this.state.region]}
							state={this.state}
						/>

						<WebCams />

						<Radar />
					</div>
				</div>
				<img style={imageStyle} src="oatmeal.jpg" />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
