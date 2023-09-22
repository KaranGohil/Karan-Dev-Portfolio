import './skillblob.css';

interface SkillBlobProps {
	skill: string;
}

export const SkillBlob = ({ skill }: SkillBlobProps) => {
	return <div className="skill-blob">{skill}</div>;
};
