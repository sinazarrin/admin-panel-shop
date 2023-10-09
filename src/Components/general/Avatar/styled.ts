import styled from "@emotion/styled"; import MuiAvatar, { AvatarProps as MuiAvatarProps } from "@mui/material/Avatar";

interface AvatarProps extends MuiAvatarProps { size?: "small" | "medium" | "large"; }

export const Avatar = styled(MuiAvatar)<AvatarProps>(({ size = "small" }) => ({
  width: size === "medium" ? 50 : size === "large" ? 80 : 38, height: size === "medium" ? 50 : size === "large" ? 80 : 38,
}));

