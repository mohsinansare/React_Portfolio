import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../../assets/images/Mohsin_pic.jpg')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
					I want to become a full stack web developer. Looking to work
					with experience web designers. Recently seeking for
					a certificate in full stack development from the
					University of Central Florida (UCF) bootcamp, with newly developed
					skills in JavaScript, CSS, Node.js, Typescript, React.js, and 
					responsive web design. I want to become an innovative problem solver
					passionate about developing apps, focusing on
					mobile-first design and development as well as work on AI programming.
					With each project, my aim is to best engage my audience for an impactful
					user experience.
				</p>
				<p>
					As a team project I had worked with my co-students in the bootcamp. The project
					was for mood changer. If a user has anxiety for any reason, he/she gets jokes or 
					any axiety release solutions. Similarly, it works for sad mood and all
					other mooods. The project was developed using htmls,css, and javascript.
				</p>
			</div>
		</section>
	);
}

export default About;
