import * as Styled from "./styled";

interface AvatarProps { size?: "small" | "medium" | "large"; }
const Avatar = ({ size = "medium", ...props }: AvatarProps) => { return <Styled.Avatar size={size} {...props} />; };

export default Avatar;