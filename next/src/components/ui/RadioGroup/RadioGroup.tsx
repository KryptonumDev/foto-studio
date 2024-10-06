import type { RadioGroupTypes } from './RadioGroup.types';
import Error from '@/components/ui/Error';
import styles from './RadioGroup.module.scss';

export default function RadioGroup({ label, register, errors, options, ...props }: RadioGroupTypes) {
  return (
    <div
      className={styles['RadioGroup']}
      aria-invalid={!!errors[register.name]}
    >
      <p className='small-text'>{label}</p>
      <div className={styles.options}>
        {options.map(option => (
          <label
            key={option}
            tabIndex={0}
            className='chip'
          >
            <input
              type='radio'
              value={option}
              tabIndex={-1}
              {...register}
              name={register.name}
              {...props}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
      <Error
        className={styles.error}
        message={errors[register.name]?.message?.toString()}
      />
    </div>
  );
}
