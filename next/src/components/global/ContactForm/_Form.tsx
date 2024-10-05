'use client';
import { useState } from 'react';
import { useForm, type FieldValues } from 'react-hook-form';
import type { FormTypes, FormStatusTypes } from './ContactForm.types';
import { REGEX } from '@/global/constants';

import Input from '@/components/ui/Input';
import Checkbox from '@/components/ui/Checkbox';
import RadioGroup from '@/components/ui/RadioGroup';
import Button from '@/components/ui/Button';
import CustomLink from '@/components/ui/CustomLink';
import FormState from '@/components/ui/FormState';

import styles from './ContactForm.module.scss';

export default function Form({ privacyPolicyLink, topics }: FormTypes) {
  const [status, setStatus] = useState<FormStatusTypes>({ sending: false, success: undefined });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onTouched' });

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset
        disabled={status.sending}
        className={styles.content}
      >
        <div className={styles.inputs}>
          <Input
            className={styles.phoneInput}
            label='Telefon'
            placeholder='+48 ___ - ___ - ___'
            register={register('phone', {
              required: { value: true, message: 'Numer telefonu jest wymagany' },
              pattern: { value: REGEX.phone, message: 'Niepoprawny numer telefonu' },
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
      </fieldset>
      <Button
        loading={status.sending}
        disabled={status.sending}
        type='submit'
      >
        Wyślij wiadomość
      </Button>
      <FormState
        success={status.success}
        setStatus={setStatus}
      />
    </form>
  );
}
