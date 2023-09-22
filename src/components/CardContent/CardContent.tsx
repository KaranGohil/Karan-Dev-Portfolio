import './cardcontent.css';

import { MdOpenInNew } from 'react-icons/md';
import classNames from 'classnames';

import { Reveal } from '../Reveal/Reveal';
import { SkillBlob } from '../SkillBlob/SkillBlob';

interface CardContentProps {
	classname?: string;
	title: string;
	desc: string;
	skills: string[];
	url: string;
}

export const CardContent = ({
	classname,
	title,
	desc,
	skills,
	url,
}: CardContentProps) => {
	return (
		<Reveal>
			<div className={classNames('card-content', classname)}>
				<h3
					className="title"
					onClick={() => {
						if (url) window.open(url, '_blank');
					}}
				>
					{title}
					<span className="open-link-icon">
						<MdOpenInNew />
					</span>
				</h3>
				<p>{desc}</p>
				<div className="card-content-skills">
					{skills.map((skill, index) => {
						return <SkillBlob key={index} skill={skill} />;
					})}
				</div>
			</div>
		</Reveal>
	);
};
