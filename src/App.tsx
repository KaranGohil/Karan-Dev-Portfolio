import React from 'react';

import { StartingSection } from './components/StartingSection/StartingSection';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Experience } from './components/Experience/Experience';
import { ProjectSection } from './components/ProjectSection/ProjectSection';

const App: React.FC = () => {
	return (
		<>
			<StartingSection />
			<AboutMe />
			<Experience />
			<ProjectSection />
			<div className="credit">
				<p>
					Design inspired by{' '}
					<a
						href="https://www.youtube.com/@Hyperplexed"
						target="_blank"
						rel="noreferrer"
					>
						Hyperplexed
					</a>{' '}
					and{' '}
					<a
						href="https://brittanychiang.com/"
						target="_blank"
						rel="noreferrer"
					>
						Brittany Chiang
					</a>
					. Built with React, Vite, Typescript and Framer Motion. Deployed with
					Netlify.
				</p>
			</div>
		</>
	);
};

export default App;
