import './Heading.scss';

const Heading = (props: HeadingProps) => {
  return <h2 className="commentor-heading">{props.text}</h2>;
};

export default Heading;
