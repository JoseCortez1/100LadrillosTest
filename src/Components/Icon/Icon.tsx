import { IconProps } from "../../types";
import styled from "styled-components";

const IconBase = styled.img`
	width: 16px;
	height: 16px;
	background-color: white;
`;

const IconSocialMedia = styled(IconBase)`
	width: 48px;
	height: 48px;
	padding: 10px;
	border-radius: 4px;
	background-color: #f3f3f3;
`;

const Icon = ({ src, alt, type, onClick }: IconProps) => {
	const getIconStyle = () => {
		switch (type) {
			case "socialMedia":
				return IconSocialMedia;
			default:
				return IconBase;
		}
	};
	const IconStyle = getIconStyle();
	return <IconStyle onClick={onClick} src={src} alt={alt} />;
};
export default Icon;
