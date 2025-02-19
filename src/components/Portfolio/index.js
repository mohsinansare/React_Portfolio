import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Mood Changer',
			description:
				'This project allows the user to change his/her mood instantly.',
			image: 'Mood_Changer.gif',
			technologies: [
				'HTML/CSS',
				'JavaScript',
		],
			github: 'https://github.com/Ajthompson88/JournalApp',
			deployed: 'https://github.com/Ajthompson88/JournalApp',
		},
		{
			name: 'Auto Tracker',
			description:
				'This is your personal automobile information tracking system. Track time dependent, vehicle specific information from a single application, available on any web-enabled device.',
			image: 'auto-tracker-image.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Handlebars.js',
				'Express & Sequelize',
				'Heroku & AWS S3',
			],
			github: 'https://github.com/mohsinansare/auto-tracker',
			deployed: 'https://github.com/mohsinansare/auto-tracker',
		},
		{
			name: 'Node Challenge',
			description:
				'Node Challenge is a project which ask some repository related questions and builds a portfolio.',
			image: 'flash-beats-image.gif',
			technologies: [
				'Node.js',
			],
			github: 'https://github.com/mohsinansare/nodechallenge5',
			deployed: 'https://github.com/mohsinansare/nodechallenge5',
		},
		{
			name: 'Weather Dashboard',
			description:
				'A weather dashboard that shows current weather and five-day weather forecast for any city.',
			image: 'weather-dashboard-image.png',
			technologies: ['HTML/CSS', 'JavaScript', 'API and Server'],
			github: 'https://github.com/mohsinansare/Weatherinquirych9',
			deployed: 'https://github.com/mohsinansare/Weatherinquirych9',
		},
		{
			name: 'Employee Tracker',
			description:
				'This is a command-line application that allows the user to view and manage a company’s employee database.',
			image: 'budget-tracker-image.png',
			technologies: ['Node.js', 'MySQL'],
			github: 'https://github.com/mohsinansare/employeeTracker_Challenge10',
			deployed: 'https://github.com/mohsinansare/employeeTracker_Challenge10',
		},
		{
			name: 'Note Taker',
			description:
				'This application allows the user to enter notes and as they save, they appear in the sidebar on the left. Notes can be deleted by clicking the trash can next to the corresponding note.',
			image: 'note-taker-image.png',
			technologies: ['HTML/CSS', 'JavaScript', 'Express.js'],
			github: 'https://github.com/mohsinansare/note-taker',
			deployed: 'https://note-taker-Mohsin.herokuapp.com/',
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;
