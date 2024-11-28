'use client';
import { useState, useEffect, useRef } from 'react';
import { useForm, type FieldValues } from 'react-hook-form';
import type { FormTypes, FormStatusTypes } from './ContactForm.types';
import { REGEX } from '@/global/constants';
import { formatPhoneNumber } from '@/utils/format-phone-number';
import Input from '@/components/ui/Input';
import Checkbox from '@/components/ui/Checkbox';
import RadioGroup from '@/components/ui/RadioGroup';
import Button from '@/components/ui/Button';
import CustomLink from '@/components/ui/CustomLink';
import FormState from '@/components/ui/FormState';
import Loader from '@/components/ui/Loader';
import styles from './ContactForm.module.scss';

export default function Form({ privacyPolicyLink, topics }: FormTypes) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onTouched' });
  const [status, setStatus] = useState<FormStatusTypes>({ sending: false, success: undefined });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status.sending || status.success !== undefined) {
      ref.current?.parentElement?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [status]);

  const onSubmit = async (data: FieldValues) => {
    setStatus({ sending: true, success: undefined });
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();

      if (!response.ok || !responseData.success) throw new Error();

      setStatus({ sending: false, success: true });
      reset();
    } catch {
      setStatus({ sending: false, success: false });
    }
  };

  const CheckboxLabel = (
    <>
      <span>Wyrażam zgodę na</span>
      <CustomLink
        target='_blank'
        rel='noreferrer'
        href={privacyPolicyLink}
        text='politykę prywatności'
      />
    </>
  );

  return (
    <div
      className={`${styles.content} ${status.sending || status.success !== undefined ? styles.formHidden : ''}`}
      ref={ref}
    >
      <div className={styles.status}>
        <Loader loading={status.sending} />
        <FormState
          success={status.success}
          setStatus={setStatus}
        />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
      >
        <div className={styles.inputs}>
          <Input
            className={styles.phoneInput}
            type='tel'
            inputMode='numeric'
            label='Telefon'
            placeholder='+48 ___ - ___ - ___'
            register={register('phone', {
              required: { value: true, message: 'Numer telefonu jest wymagany' },
              pattern: { value: REGEX.phone, message: 'Niepoprawny numer telefonu' },
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                e.target.value = formatPhoneNumber(e.target.value);
              },
            })}
            errors={errors}
          />
          <Input
            label='E-mail'
            type='email'
            register={register('email', {
              required: { value: true, message: 'E-mail jest wymagany' },
              pattern: { value: REGEX.email, message: 'Niepoprawny adres e-mail' },
            })}
            errors={errors}
          />
          <RadioGroup
            label='Temat'
            register={register('topic', {
              required: { value: true, message: 'Temat jest wymagany' },
            })}
            options={topics}
            errors={errors}
          />
          <Input
            label='Twoja wiadomość'
            type='textarea'
            register={register('message', {
              required: { value: true, message: 'Wiadomość jest wymagana' },
              minLength: { value: 10, message: 'Wiadomość musi mieć co najmniej 10 znaków' },
            })}
            errors={errors}
          />
        </div>
        <Checkbox
          label={CheckboxLabel}
          register={register('legal', {
            required: { value: true, message: 'Zgoda jest wymagana' },
          })}
          errors={errors}
        />
        <Button
          disabled={status.sending}
          type='submit'
        >
          Wyślij wiadomość
        </Button>
      </form>
    </div>
  );
}
