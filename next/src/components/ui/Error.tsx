type ErrorTypes = {
  message?: string;
  className?: string;
  withIcon?: boolean;
};

export default function Error({ message, className = '', withIcon = true }: ErrorTypes) {
  return (
    message && (
      <p
        role='alert'
        className={`error-text extra-small-text ${className}`}
      >
        {withIcon && <WarningIcon />}
        <span>{message}</span>
      </p>
    )
  );
}

export const WarningIcon = ({ ...props }) => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#clip0_5663_4451)'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.69497 1.58012C6.96416 1.11388 7.46163 0.82666 8 0.82666C8.53837 0.82666 9.03585 1.11388 9.30504 1.58012L15.7977 12.8258C16.0674 13.2929 16.0674 13.8685 15.7977 14.3356L15.7498 14.4186C15.4801 14.8858 14.9816 15.1735 14.4422 15.1735H1.55774C1.01834 15.1735 0.519914 14.8858 0.250212 14.4186L0.202276 14.3356C-0.0674253 13.8685 -0.0674253 13.2929 0.202276 12.8258L6.69497 1.58012ZM7.2451 6.11094C7.2451 5.69402 7.58309 5.35604 8.00001 5.35604C8.41693 5.35604 8.75491 5.69402 8.75491 6.11094V9.13056C8.75491 9.54748 8.41693 9.88546 8.00001 9.88546C7.58309 9.88546 7.2451 9.54748 7.2451 9.13056V6.11094ZM8.75491 12.9051V11.3953H7.2451V12.9051H8.75491Z'
        fill='#E60019'
      />
    </g>
    <defs>
      <clipPath id='clip0_5663_4451'>
        <rect
          width='16'
          height='16'
          fill='white'
        />
      </clipPath>
    </defs>
  </svg>
);