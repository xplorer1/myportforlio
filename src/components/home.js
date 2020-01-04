import React from 'react';
import {Link} from "react-router-dom";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

class Home extends React.Component {
	render() {
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
										<h5>286 Bornu Way</h5>
										<h5>Yaba, Lagos</h5>
									</div>
								</div>
							</div>
							
							<div className="col-sm-6 col-md-6 col-lg-4">
								<div className="info">
									<i className="icon ion-ios-telephone-outline"></i>
									<div className="right-area">
										<h5>+2348103350884</h5>
										<h6>MON - FRI, 8AM - 9PM</h6>
									</div>
								</div>
							</div>
							
							<div className="col-sm-6 col-md-6 col-lg-4">
								<div className="info">
									<i className="icon ion-ios-chatboxes-outline"></i>
									<div className="right-area">
										<h5>cj.ugwuanyi@gmail.com</h5>
										<h6>Reply in 24 hours</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<a className="downlad-btn" href="assets/Resume.docx" download="Chijioke's CV">Download CV</a>
				</div>
			</header>
			
			<section className="intro-section">
				<div className="container">
					<div className="row">
						<div className="col-md-1 col-lg-2"></div>
						<div className="col-md-10 col-lg-8">
							<div className="intro">
								<div className="profile-img">
									<img src="assets/images/profilemain.jpg" alt="" /></div>
								<h2><b>Chijioke Ugwuanyi</b></h2>
								<h4 className="font-yellow">Web Developer</h4>
								<ul className="information margin-tb-30">
									<li><b>BORN : </b>June 30, 1996</li>
									<li><b>EMAIL : </b>cj.ugwuanyi@gmail.com</li>
									{/*<li><b>MARITAL STATUS : </b>Single</li>*/}
								</ul>
								<ul className="social-icons">
									<li><a href="https://github.com/xplorer1"><i className="ion-social-github"></i></a></li>
									<li><a href="https://www.linkedin.com/in/chijioke-u-7b267397/"><i className="ion-social-linkedin"></i></a></li>
									{/*<li><a href="#"><i className="ion-social-facebook"></i></a></li>*/}
									<li><a href="https://twitter.com/cj_ugwuanyi"><i className="ion-social-twitter"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			
			<section className="portfolio-section section">
				<div className="container">
					<div className="row">
						<div className="col-sm-4">
							<div className="heading">
								<h3><b>Portfolio</b></h3>
								<h6 className="font-lite-black"><b>MY WORK</b></h6>
							</div>
						</div>{/* col-sm-4 */}
						{/*<div className="col-sm-8">
							<div className="portfolioFilter clearfix margin-b-80">
								<a href="#" data-filter="*" className="current"><b>ALL</b></a>
								<a href="#" data-filter=".web-design"><b>WEB DESIGN</b></a>
								<a href="#" data-filter=".branding"><b>BRANDING</b></a>
								<a href="#" data-filter=".graphic-design"><b>GRAPHIC DESIGN</b></a>
							</div>
						</div>*/}
					</div>
				</div>
				
				<div className="portfolioContainer">
					
					<div className="p-item web-design">
						<a target="_blank" href="https://quizzical-visvesvaraya-c56497.netlify.com" data-fluidbox>
							<img src="assets/img/jbmain.png" alt="" />
						</a>
					</div>
					
					<div className="p-item branding graphic-design">
						<a target="_blank" href="https://relaxed-murdock-90413b.netlify.com/" data-fluidbox>
							<img src="assets/img/pfmain.png" alt="" />
						</a>
					</div>
					
					<div className="p-item web-design">
						<a target="_blank" href="https://reverent-bose-2e43d4.netlify.com" data-fluidbox>
							<img src="assets/img/cvmain.png" alt="" />
						</a>
					</div>

					<div className="p-item graphic-design web-design">
						<a target="_blank" className="img" href="https://corporatetransit.ng" data-fluidbox>
							<img src="assets/img/ctmain.png" alt="" />
						</a>
					</div>
					
					<div className="p-item branding graphic-design">
						<a target="_blank" href="https://elegant-fermi-7d31a8.netlify.com" data-fluidbox>
							<img src="assets/img/spmain.png" alt="" /></a>
					</div>
					
					<div className="p-item graphic-design web-design">
						<a target="_blank" className="img" href="https://reverent-franklin-8b7437.netlify.com" data-fluidbox>
							<img src="assets/img/devjobs.png" alt="" />
						</a>
					</div>
					
					{/*<div className="p-item  graphic-design branding">
						<a href="assets/images/portfolio-5-600x800.jpg" data-fluidbox>
							<img src="assets/images/portfolio-5-600x800.jpg" alt="" /></a>
					</div>
						
					<div className="p-item web-design branding">
						<a href="assets/images/portfolio-6-600x800.jpg" data-fluidbox>
							<img src="assets/images/portfolio-6-600x800.jpg" alt="" /></a>
					</div>

					<div className="p-item p-item-2 graphic-design">
						<a className="img" href="assets/images/portfolio-10-300x400.jpg" data-fluidbox>
							<img src="assets/images/portfolio-10-300x400.jpg" alt="" /></a>
						<a className="img" href="assets/images/portfolio-11-300x400.jpg" data-fluidbox>
							<img src="assets/images/portfolio-11-300x400.jpg" alt="" /></a>
					</div>*/}
				
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
						</div>

						<div className="col-sm-8">
							<p className="margin-b-50" style={{color: "black"}}>
								I am a Nigerian based full-stack developer with a huge flare for solving problems using technology.
								<br />
								I am very adventurous and work with very little supervision. Learning new things everyday is my forte.
							</p>
							
							<div className="row">
								<div className="col-sm-6 col-md-6 col-lg-3">
									<div className="radial-prog-area margin-b-30">
										<Progress type="circle" percent={95} status="success" />
										<div className="radial-progress" data-prog-percent=".95">
											<div></div>
											<h6 className="progress-title">HTML5 & CSS3</h6>
										</div>
									</div>{/* radial-prog-area*/}
								</div>
							
								<div className="col-sm-6 col-md-6 col-lg-3">
									<div className="radial-prog-area margin-b-30">
									<Progress type="circle" percent={70} status="success" />
										<div className="radial-progress" data-prog-percent=".70">
											<div></div>
											<h6 className="progress-title">ReactJs</h6>
										</div>
									</div>{/* radial-prog-area*/}
								</div>
								
								<div className="col-sm-6 col-md-6 col-lg-3">
									<div className="radial-prog-area margin-b-30">
									<Progress type="circle" percent={70} status="success" />
										<div className="radial-progress" data-prog-percent=".70">
											<div></div>
											<h6 className="progress-title">NodeJs</h6>
										</div>
									</div>{/* radial-prog-area*/}
								</div>
								
								<div className="col-sm-6 col-md-6 col-lg-3">
									<div className="radial-prog-area margin-b-50">
									<Progress type="circle" percent={30} status="success" />
										<div className="radial-progress" data-prog-percent=".30">
											<div></div>
											<h6 className="progress-title">Java</h6>
										</div>
									</div>{/* radial-prog-area*/}
								</div>

								<div className="col-sm-6 col-md-6 col-lg-3 pt-4">
									<div className="radial-prog-area margin-b-50">
									<Progress type="circle" percent={80} status="success" />
										<div className="radial-progress" data-prog-percent=".80">
											<div></div>
											<h6 className="progress-title">Research</h6>
										</div>
									</div>
								</div>

								<div className="col-sm-6 col-md-6 col-lg-3 pt-4">
									<div className="radial-prog-area margin-b-50">
									<Progress type="circle" percent={60} status="success" />
										<div className="radial-progress" data-prog-percent=".60">
											<div></div>
											<h6 className="progress-title">People Management</h6>
										</div>
									</div>
								</div>

								<div className="col-sm-6 col-md-6 col-lg-3 pt-4">
									<div className="radial-prog-area margin-b-50">
									<Progress type="circle" percent={70} status="success" />
										<div className="radial-progress" data-prog-percent=".70">
											<div></div>
											<h6 className="progress-title">Communication</h6>
										</div>
									</div>
								</div>
							
							</div>
						</div>
					</div>
				</div>
			</section>
			
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
								<h4><b>Andela Community Mentor</b></h4>
								<h5 className="font-yellow"><b>Andela Learning Community</b></h5>
								<h6 className="margin-t-10">2016 - 2018</h6>
								<p className="font-semi-white margin-tb-30">I was a community mentor during Andela Learning Community 2.0 and 3.0<br />
								I was tasked with helping beginner programmers start off with learning programming. Reviewing and correcting their code was the major task.</p>
								<ul className="list margin-b-30">
									<li>I learnt people management and leadership tips mostly given the fact that most of the learners were much older than I was.</li>
									<li>Several concepts which weren't clear to me when I started programming became much more understandable.</li>
								</ul>
							</div>{/* experience */}
							
							<div className="experience margin-b-50">
								<h4><b>Developer Intern</b></h4>
								<h5 className="font-yellow"><b>Adbasador Media Limited</b></h5>
								<h6 className="margin-t-10">APRIL 2018 - November 2018</h6>
								<p className="font-semi-white margin-tb-30">I was an intern at Adbasador Media Limited for a period of 7 months.</p>
								<ul className="list margin-b-30">
									<li>I built up one of their large scale business products from the ground up.</li>
								</ul>
							</div>

							<div className="experience margin-b-50">
								<h4><b>Full-Stack Developer | Remote</b></h4>
								<h5 className="font-yellow"><b>Adbasador Media Limited | Corporate Transit Limited</b></h5>
								<h6 className="margin-t-10"> January 2019 - Present </h6>
								<p className="font-semi-white margin-tb-30">I took on freelance and remote jobs with various organizations, notably Adbasador and Corporate Transit. </p>
								<ul className="list margin-b-30">
									<li>I built up their large scale business products from the ground up.</li>
								</ul>
							</div>
							
						</div>
					</div>
				</div>
				
			</section>
			
			<section className="counter-section" id="counter">
				<div className="container">
					<div className="row">
					
						<div className="col-sm-6 col-md-6 col-lg-3">
							<div className="counter margin-b-30">
								<h1 className="title"><b><span className="counter-value" data-duration="400" data-count="2">2</span></b></h1>
								<h5 className="desc"><b>Coder Certificates</b></h5>
							</div>{/* counter */}
						</div>{/* col-md-3*/}
						
						<div className="col-sm-6 col-md-6 col-lg-3">
							<div className="counter margin-b-30">
								<h1 className="title"><b><span className="counter-value" data-duration="1400" data-count="12">12</span></b></h1>
								<h5 className="desc"><b>Projects Completed</b></h5>
							</div>{/* counter */}
						</div>{/* col-md-3*/}
						
						<div className="col-sm-6 col-md-6 col-lg-3">
							<div className="counter margin-b-30">
								<h1 className="title"><b><span className="counter-value" data-duration="700" data-count="5">5</span></b></h1>
								<h5 className="desc"><b>Satisfied Clients</b></h5>
							</div>{/* counter */}
						</div>{/* col-md-3*/}
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
}

export default Home;