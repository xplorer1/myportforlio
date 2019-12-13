import React from 'react';
import {Link} from "react-router-dom";

function StatikCompoonent(argument) {
	return (

		<article>
			<header>
				<div className="container">
					<div className="heading-wrapper">
						<div className="row">
							<div className="col-sm-6 col-md-6 col-lg-4">
								<div className="info">
									<i className="icon ion-ios-location-outline"></i>
									<div className="right-area">
										<h5>3008 Sarah Drive</h5>
										<h5>Franklin,LA 70538</h5>
									</div>{/* right-area */}
								</div>{/* info */}
							</div>{/* col-sm-4 */}
							
							<div className="col-sm-6 col-md-6 col-lg-4">
								<div className="info">
									<i className="icon ion-ios-telephone-outline"></i>
									<div className="right-area">
										<h5>337-4139538</h5>
										<h6>MIN - FRI,8AM - 7PM</h6>
									</div>{/* right-area */}
								</div>{/* info */}
							</div>{/* col-sm-4 */}
							
							<div clasName="col-sm-6 col-md-6 col-lg-4">
								<div className="info">
									<i className="icon ion-ios-chatboxes-outline"></i>
									<div className="right-area">
										<h5>contact@colorlib.com</h5>
										<h6>REPLY IN 24 HOURS</h6>
									</div>{/* right-area */}
								</div>{/* info */}
							</div>{/* col-sm-4 */}
						</div>{/* row */}
					</div>{/* heading-wrapper */}
					
					<a className="downlad-btn" href="#">Download CV</a>
				</div>{/* container */}
			</header>
			
			<section className="intro-section">
				<div className="container">
					<div className="row">
						<div className="col-md-1 col-lg-2"></div>
						<div className="col-md-10 col-lg-8">
							<div className="intro">
								<div className="profile-img">
									<img src="images/profile-1-250x250.jpg" alt="" /></div>
								<h2><b>Michel SMith</b></h2>
								<h4 className="font-yellow">Key Account Manager</h4>
								<ul className="information margin-tb-30">
									<li><b>BORN : </b>August 25, 1987</li>
									<li><b>EMAIL : </b>mymith@mywebpage.com</li>
									<li><b>MARITAL STATUS : </b>Married</li>
								</ul>
								<ul className="social-icons">
									<li><a href="#"><i className="ion-social-pinterest"></i></a></li>
									<li><a href="#"><i className="ion-social-linkedin"></i></a></li>
									<li><a href="#"><i className="ion-social-instagram"></i></a></li>
									<li><a href="#"><i className="ion-social-facebook"></i></a></li>
									<li><a href="#"><i className="ion-social-twitter"></i></a></li>
								</ul>
							</div>{/* intro */}
						</div>{/* col-sm-8 */}
					</div>{/* row */}
				</div>{/* container */}
			</section>{/* intro-section */}
			
			<section className="portfolio-section section">
				<div className="container">
					<div className="row">
						<div className="col-sm-4">
							<div className="heading">
								<h3><b>Portfolio</b></h3>
								<h6 className="font-lite-black"><b>MY WORK</b></h6>
							</div>
						</div>{/* col-sm-4 */}
						<div className="col-sm-8">
							<div className="portfolioFilter clearfix margin-b-80">
								<a href="#" data-filter="*" className="current"><b>ALL</b></a>
								<a href="#" data-filter=".web-design"><b>WEB DESIGN</b></a>
								<a href="#" data-filter=".branding"><b>BRANDING</b></a>
								<a href="#" data-filter=".graphic-design"><b>GRAPHIC DESIGN</b></a>
							</div>{/* portfolioFilter */}
						</div>{/* col-sm-8 */}
					</div>{/* row */}
				</div>{/* container */}
				
				<div className="portfolioContainer">
					
					<div className="p-item web-design">
						<a href="images/portfolio-1-600x400.jpg" data-fluidbox>
							<img src="images/portfolio-1-600x400.jpg" alt="" /></a>
					</div>{/* p-item */}
					
					<div className="p-item branding graphic-design">
						<a href="images/portfolio-7-600x800.jpg" data-fluidbox>
							<img src="images/portfolio-7-600x800.jpg" alt="" /></a>
					</div>{/* p-item */}
					
					<div className="p-item web-design">
						<a href="images/portfolio-2-600x400.jpg" data-fluidbox>
							<img src="images/portfolio-2-600x400.jpg" alt="" /></a>
					</div>{/* p-item */}
					
					<div className="p-item p-item-2 graphic-design">
						<a className="img" href="images/portfolio-8-300x400.jpg" data-fluidbox>
							<img src="images/portfolio-8-300x400.jpg" alt="" /></a>
						<a className="img" href="images/portfolio-9-300x400.jpg" data-fluidbox>
							<img src="images/portfolio-9-300x400.jpg" alt="" /></a>
					</div>{/* p-item */}
					
					<div className="p-item branding graphic-design">
						<a href="images/portfolio-3-600x400.jpg" data-fluidbox>
							<img src="images/portfolio-3-600x400.jpg" alt="" /></a>
					</div>{/* p-item */}
					
					<div className="p-item graphic-design web-design">
						<a href="images/portfolio-4-600x400.jpg" data-fluidbox>
							<img src="images/portfolio-4-600x400.jpg" alt="" /></a>
					</div>{/* p-item */}
					
					<div className="p-item  graphic-design branding">
						<a href="images/portfolio-5-600x800.jpg" data-fluidbox>
							<img src="images/portfolio-5-600x800.jpg" alt="" /></a>
					</div>{/* p-item */}
						
					<div className="p-item web-design branding">
						<a href="images/portfolio-6-600x800.jpg" data-fluidbox>
							<img src="images/portfolio-6-600x800.jpg" alt="" /></a>
					</div>{/* p-item */}

					<div className="p-item p-item-2 graphic-design">
						<a className="img" href="images/portfolio-10-300x400.jpg" data-fluidbox>
							<img src="images/portfolio-10-300x400.jpg" alt="" /></a>
						<a className="img" href="images/portfolio-11-300x400.jpg" data-fluidbox>
							<img src="images/portfolio-11-300x400.jpg" alt="" /></a>
					</div>{/* p-item */}
				
				</div>{/* portfolioContainer */}
				
			</section>{/* portfolio-section */}
				
			<section className="about-section section">
				<div className="container">
					<div className="row">
						<div className="col-sm-4">
							<div className="heading">
								<h3><b>About me</b></h3>
								<h6 className="font-lite-black"><b>PROFESSIONAL PATH</b></h6>
							</div>
						</div>{/* col-sm-4 */}
						<div className="col-sm-8">
							<p className="margin-b-50">Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque 
							sit amet sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
							Nulla maximus pellentes que velit, quis consequat nulla effi citur at. 
							Maecenas sed massa tristique.Duis non volutpat arcu, eu mollis tellus. 
							Sed finibus aliquam neque sit amet sodales. Lorem ipsum dolor sit amet, 
							consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur 
							adipiscing elit. Nulla maximus pellentes que velit, quis consequat nulla 
							effi citur at.Maecenas sed massa tristique.</p>
							
							<div className="row">
								<div className="col-sm-6 col-md-6 col-lg-3">
									<div className="radial-prog-area margin-b-30">
										<div className="radial-progress" data-prog-percent=".97">
											<div></div>
											<h6 className="progress-title">HTML5 & CSS3</h6>
										</div>
									</div>{/* radial-prog-area*/}
								</div>{/* col-sm-6*/}
							
								<div className="col-sm-6 col-md-6 col-lg-3">
									<div className="radial-prog-area margin-b-30">
										<div className="radial-progress" data-prog-percent=".78">
											<div></div>
											<h6 className="progress-title">WEB DESIGN</h6>
										</div>
									</div>{/* radial-prog-area*/}
								</div>{/* col-sm-6*/}
								
								<div className="col-sm-6 col-md-6 col-lg-3">
									<div className="radial-prog-area margin-b-30">
										<div className="radial-progress" data-prog-percent=".67">
											<div></div>
											<h6 className="progress-title">JAVA</h6>
										</div>
									</div>{/* radial-prog-area*/}
								</div>{/* col-sm-6*/}
								
								<div className="col-sm-6 col-md-6 col-lg-3">
									<div className="radial-prog-area margin-b-50">
										<div className="radial-progress" data-prog-percent=".97">
											<div></div>
											<h6 className="progress-title">PHP</h6>
										</div>
									</div>{/* radial-prog-area*/}
								</div>{/* col-sm-6*/}
							
							</div>{/* row */}
						</div>{/* col-sm-8 */}
					</div>{/* row */}
				</div>{/* container */}
			</section>{/* about-section */}
			
			<section className="experience-section section">
				<div className="container">
					<div className="row">
						<div className="col-sm-4">
							<div className="heading">
								<h3><b>Work Experience</b></h3>
								<h6 className="font-lite-black"><b>PREVIOUS JOBS</b></h6>
							</div>
						</div>{/* col-sm-4 */}
						<div className="col-sm-8">
						
							<div className="experience margin-b-50">
								<h4><b>JUNIOR PROJECT MANAGER</b></h4>
								<h5 className="font-yellow"><b>DESIGN STUDIO</b></h5>
								<h6 className="margin-t-10">MARCH 2015 - PRESENT</h6>
								<p className="font-semi-white margin-tb-30">Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales. 
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentes que velit, 
									quis consequat nulla effi citur at. Maecenas sed massa tristique.Duis non volutpat arcu, 
									eu mollis tellus. Sed finibus aliquam neque sit amet sodales. </p>
								<ul className="list margin-b-30">
									<li>Duis non volutpat arcu, eu mollis tellus.</li>
									<li>Quis consequat nulla effi citur at.</li>
									<li>Sed finibus aliquam neque sit.</li>
								</ul>
							</div>{/* experience */}
							
							<div className="experience margin-b-50">
								<h4><b>WEB MASTER/WEB DEVELOPER</b></h4>
								<h5 className="font-yellow"><b>DESIGN & WEB STUDIO</b></h5>
								<h6 className="margin-t-10">APRIL 2014 - FEBRUARY 2015</h6>
								<p className="font-semi-white margin-tb-30">Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales. 
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentes que velit, 
									quis consequat nulla effi citur at. Maecenas sed massa tristique.Duis non volutpat arcu, 
									eu mollis tellus. Sed finibus aliquam neque sit amet sodales. </p>
								<ul className="list margin-b-30">
									<li>Duis non volutpat arcu, eu mollis tellus.</li>
									<li>Quis consequat nulla effi citur at.</li>
									<li>Sed finibus aliquam neque sit.</li>
								</ul>
							</div>{/* experience */}
							
						</div>{/* col-sm-8 */}
					</div>{/* row */}
				</div>{/* container */}
				
			</section>{/* experience-section */}
			
			<section className="education-section section">
				<div className="container">
					<div className="row">
						<div className="col-sm-4">
							<div className="heading">
								<h3><b>Education</b></h3>
								<h6 className="font-lite-black"><b>ACADEMIC CAREER</b></h6>
							</div>
						</div>{/* col-sm-4 */}
						<div className="col-sm-8">
							<div className="education-wrapper">
								<div className="education margin-b-50">
									<h4><b>MASTER DEGREE IN SCIENCE</b></h4>
									<h5 className="font-yellow"><b>UCLA - SCIENCE AND ENGINEERING</b></h5>
									<h6 className="font-lite-black margin-t-10">GRADUATED IN MAY 2010(2 YEARS)</h6>
									<p className="margin-tb-30">Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales. 
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentes que velit, 
									quis consequat nulla effi citur at. Maecenas sed massa tristique.Duis non volutpat arcu, 
									eu mollis tellus. Sed finibus aliquam neque sit amet sodales. </p>
								</div>{/* education */}
								
								<div className="education margin-b-50">
									<h4><b>COURSE ON COMPUTER SCIENCE</b></h4>
									<h5 className="font-yellow"><b>NEW YORK PUBLIC UNIVERSITY</b></h5>
									<h6 className="font-lite-black margin-t-10">GRADUATED IN MAY 2009(6 MONTHS)</h6>
									<p className="margin-tb-30">Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales. 
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentes que velit, 
									quis consequat nulla effi citur at. Maecenas sed massa tristique.Duis non volutpat arcu, 
									eu mollis tellus. Sed finibus aliquam neque sit amet sodales. </p>
								</div>{/* education */}
								
								<div className="education margin-b-50">
									<h4><b>GRADUATED VALEDICTERIAN</b></h4>
									<h5 className="font-yellow"><b>PUBLIC COLLEGE</b></h5>
									<h6 className="font-lite-black margin-t-10">GRADUATED IN MAY 2008(4 YEARS)</h6>
									<p className="margin-tb-30">Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales. 
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentes que velit, 
									quis consequat nulla effi citur at. Maecenas sed massa tristique.Duis non volutpat arcu, 
									eu mollis tellus. Sed finibus aliquam neque sit amet sodales. </p>
								</div>{/* education */}
							</div>{/* education-wrapper */}
						</div>{/* col-sm-8 */}
					</div>{/* row */}
				</div>{/* container */}
				
			</section>{/* about-section */}
			
			<section className="counter-section" id="counter">
				<div className="container">
					<div className="row">
					
						<div className="col-sm-6 col-md-6 col-lg-3">
							<div className="counter margin-b-30">
								<h1 className="title"><b><span className="counter-value" data-duration="400" data-count="3">0</span></b></h1>
								<h5 className="desc"><b>Coder Degrees</b></h5>
							</div>{/* counter */}
						</div>{/* col-md-3*/}
						
						<div className="col-sm-6 col-md-6 col-lg-3">
							<div className="counter margin-b-30">
								<h1 className="title"><b><span className="counter-value" data-duration="1400" data-count="25">0</span></b></h1>
								<h5 className="desc"><b>Project Completed</b></h5>
							</div>{/* counter */}
						</div>{/* col-md-3*/}
						
						<div className="col-sm-6 col-md-6 col-lg-3">
							<div className="counter margin-b-30">
								<h1 className="title"><b><span className="counter-value" data-duration="700" data-count="311">0</span></b></h1>
								<h5 className="desc"><b>Satisfied Clients</b></h5>
							</div>{/* counter */}
						</div>{/* col-md-3*/}
						
						<div className="col-sm-6 col-md-6 col-lg-3">
							<div className="counter margin-b-30">
								<h1 className="title"><b><span className="counter-value" data-duration="2000" data-count="732">0</span></b></h1>
								<h5 className="desc"><b>Finished Projects</b></h5>
							</div>
						</div>
						
					</div>
				</div>
		    </section>
			
			<footer>
				<p className="copyright">
					Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved 
				</p>
			</footer>
		</article>
	)
}
class Home extends React.Component {
	render() {
		return (
			<StatikCompoonent />
		)
	}
}

export {Home, StatikCompoonent};