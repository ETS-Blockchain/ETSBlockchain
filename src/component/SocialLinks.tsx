import { InstagramIcon, LinkedinIcon, XIcon } from "./icons";
import { SOCIAL_LINKS } from "../lib/constants";

interface SocialLinksProps {
  size?: number;
  className?: string;
}

export default function SocialLinks({ size = 20, className = "" }: SocialLinksProps) {
  return (
    <>
      <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className={className}>
        <InstagramIcon width={size} height={size} />
      </a>
      <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className={className}>
        <LinkedinIcon width={size} height={size} />
      </a>
      <a href={SOCIAL_LINKS.x} target="_blank" rel="noopener noreferrer" className={className}>
        <XIcon width={size} height={size} />
      </a>
    </>
  );
}