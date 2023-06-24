import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = props => {
    const { title } = props;
    return (
        <section>
            <h2 className={css.title}>{title}</h2>
            {props.children}
        </section>
    );
};

export default Section;
Section.propTypes = {
    title: PropTypes.string.isRequired,
};
