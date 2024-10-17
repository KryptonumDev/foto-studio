import type { CheckboxTypes } from './Checkbox.types';
import Error from '@/components/ui/Error';
import styles from './Checkbox.module.scss';

export default function Checkbox({ label, register, errors, ...props }: CheckboxTypes) {
  return (
    <label
      className={styles['Checkbox']}
      aria-invalid={!!errors[register.name]}
    >
      <div className={styles.icon}>
        <input
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

const CheckIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='15'
    height='12'
    viewBox='0 0 15 12'
    fill='none'
  >
    <path
      fill='#141414'
      d='M5 9 1.5 5.5.333 6.667 5 11.332l10-10L13.833.167 5 9Z'
    />
  </svg>
);
