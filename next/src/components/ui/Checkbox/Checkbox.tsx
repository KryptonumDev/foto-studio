import type { CheckboxTypes } from './Checkbox.types';
import Error from '@/components/ui/Error';
import styles from './Checkbox.module.scss';

export default function Checkbox({ label, register, errors, ...props }: CheckboxTypes) {
  return (
    <label
      className={styles['Checkbox']}
      aria-invalid={!!errors[register.name]}
      tabIndex={0}
    >
      <div className={styles.icon}>
        <input
          tabIndex={-1}
          type='checkbox'
          {...register}
          name={register.name}
          {...props}
        />
        <CheckIcon />
      </div>
      <p className={`${styles.label} small-text`}>{label}</p>
      <Error
        message={errors[register.name]?.message?.toString()}
        className={styles.error}
      />
    </label>
  );
}

const CheckIcon = ({ ...props }) => (
  <svg
    width='15'
    height='12'
    viewBox='0 0 15 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M4.99967 8.99984L1.49967 5.49984L0.333008 6.6665L4.99967 11.3332L14.9997 1.33317L13.833 0.166504L4.99967 8.99984Z'
      fill='#141414'
    />
  </svg>
);
