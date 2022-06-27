import style from "./section.module.css";
import PropTypes from "prop-types";
const Section = (props) => {
  const { title, children } = props;
  return (
    <section className={style.section}>
      {title && <h2 className={style.title}>{title}</h2>}
      {children}
    </section>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
};
