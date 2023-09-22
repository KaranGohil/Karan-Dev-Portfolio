import { MdOpenInNew } from 'react-icons/md';
import './button.css';

interface ButtonProps {
	title: string;
	onClick?: () => void;
}

export const Button = ({ title, onClick }: ButtonProps) => {
	return (
		<button className="button" onClick={onClick}>
			{title}
			<MdOpenInNew />
		</button>
	);
};
