import type { InputTypes } from './Input.types';
import Textarea from './Textarea';
import Error, { WarningIcon } from '@/components/ui/Error';
import styles from './Input.module.scss';

export default function Input({ label, register, errors, className = '', ...props }: InputTypes) {
  const { type } = props;
  const Element = type === 'textarea' ? Textarea : 'input';

  return (
    <label
      className={`${styles['Input']} ${className}`}
      aria-invalid={!!errors[register.name]}
    >
      <p className={`${styles.label} small-text`}>{label}</p>
      <div className={styles.content}>
        <Element
          {...register}
          name={register.name}
          {...props}
        />
        <WarningIcon className={styles.icon} />
      </div>
      <Error
        message={errors[register.name]?.message?.toString()}
        className={styles.error}
        withIcon={false}
      />
    </label>
  );
}
