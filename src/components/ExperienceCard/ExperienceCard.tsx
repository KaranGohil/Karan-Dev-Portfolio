import './experiencecard.css';

import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames';
import { Reveal } from '../Reveal/Reveal';
import { CardContent } from '../CardContent/CardContent';

interface ExperienceCardProps {
	title: string;
	desc: string;
	date: string;
	skills: string[];
	url: string;
}

export const ExperienceCard = ({
	title,
	desc,
	date,
	skills,
	url,
}: ExperienceCardProps) => {
	const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });

	return (
		<Reveal>
			<div
				className={classNames('experience-card-container', {
					'is-mobile': isMobile,
				})}
			>
				<span className="date">{date}</span>
				<CardContent title={title} desc={desc} skills={skills} url={url} />
			</div>
		</Reveal>
	);
};
