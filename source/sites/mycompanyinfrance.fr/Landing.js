/* @flow */

import withColours from 'Components/utils/withColours'
import marianneSvg from 'Images/marianne.svg'
import urssafSvg from 'Images/urssaf.svg'
import React from 'react'
import emoji from 'react-easy-emoji'
import { Link } from 'react-router-dom'
import { config } from 'react-spring'
import * as Animate from 'Ui/animate'
import './Landing.css'

const Landing = ({ colours: { colour } }) => (
	<>
		<section className="landing__header" style={{ backgroundColor: colour }}>
			<div className="landing__banner">
				<img alt="logo marianne" src={marianneSvg} />
				<img alt="logo urssaf" src={urssafSvg} />
			</div>
			<header>
				<Animate.fromBottom delay={500} config={config.slow}>
					<h1>Start your business in France.</h1>
					<Link
						className="ui__ inverted-button cta"
						to="/company"
						alt="the first step to create a company">
						Take the step by step guide
					</Link>
				</Animate.fromBottom>
			</header>
		</section>
		<section className="ui__ container landing-explanation">
			<h2>1. Create your company </h2>
			<div className="landing-explanation-content">
				{emoji('🏗️')}
				<ul>
					<li>Find the legal status that suits you</li>
					<li>Choose the best location for your business</li>
					<li>Follow the steps up to your company's registration</li>
				</ul>
			</div>

			<p style={{ textAlign: 'center' }}>
				<Link to="/company" className="ui__ button">
					Create your company
				</Link>
			</p>
			<h2>2. Simulate costs and social benefits </h2>
			<div className="landing-explanation-content">
				{emoji('💶')}
				<ul>
					<li>Discover the French social security</li>
					<li>Simulate hiring costs </li>
					<li>Understand the complex french payslip</li>
				</ul>
			</div>
			<p style={{ textAlign: 'center' }}>
				<Link to="/social-security" className="ui__ button">
					Simulate hiring costs
				</Link>
			</p>
			<h2>3. Hire your first employee </h2>
			<div className="landing-explanation-content">
				{emoji('🤝')}
				<ul>
					<li>Discover the procedures to hire in France</li>
					<li>Learn the basics of the french labour law</li>
					<li>Find the tools to edit a compliant payslip</li>
				</ul>
			</div>
			<p style={{ textAlign: 'center' }}>
				<Link to="/hiring-process" className="ui__ button">
					Discover the hiring process
				</Link>
			</p>
		</section>
		<section className="landing__nav" />
	</>
)

export default withColours(Landing)
