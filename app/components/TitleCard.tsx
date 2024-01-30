import Heading from "./Heading";
import { titleCard } from "../styles/titleCard.css";

type TitleCardProps = {
  heading?: string;
  size?: string;
  pretitle?: string;
  title?: string;
  subtitle?: string;
}

export default function TitleCard(props: TitleCardProps) {  
  return (
    <Heading classes={titleCard} heading={props.heading} size={props.size} content={
      <>
        <span>{props.pretitle}</span>
        <span>{props.title}</span>
        <span>{props.subtitle}</span>
      </>
    }>
    </Heading>
  );
}