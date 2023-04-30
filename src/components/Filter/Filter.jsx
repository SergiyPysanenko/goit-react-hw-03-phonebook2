import styles from './Filter.module.css';

const Filter = ({value, onChange}) => (
  <>
    <label classNeme={styles.label}>
      Find Contacts by name
      <input className={styles.input} type="text" value={value} onChange={onChange} />
    </label>
  </>
);

export default Filter;