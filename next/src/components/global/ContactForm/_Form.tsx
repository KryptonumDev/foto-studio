'use client';
import { useForm, type FieldValues } from 'react-hook-form';
import type { FormTypes } from './ContactForm.types';

import Input from '@/components/ui/Input';
import Checkbox from '@/components/ui/Checkbox';
import RadioGroup from '@/components/ui/RadioGroup';
import Button from '@/components/ui/Button';
import CustomLink from '@/components/ui/CustomLink';

import styles from './ContactForm.module.scss';

const REGEX_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const REGEX_PHONE = /^(?:\+(?:\d{1,3}))?(?:[ -]?\(?\d{1,4}\)?[ -]?\d{1,5}[ -]?\d{1,5}[ -]?\d{1,6})$/;

export default function Form({ privacyPolicyLink, topics }: FormTypes) {
  const {
    register,
    handleSubmit,
    //reset,
    formState: { errors },
  } = useForm({ mode: 'onTouched' });

  const onSubmit = (data: FieldValues) => console.log(data);

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
      <div className={styles.content}>
        <div className={styles.inputs}>
          <Input
            className={styles.phoneInput}
            label='Telefon'
            placeholder='+48 ___ - ___ - ___'
            register={register('phone', {
              required: { value: true, message: 'Numer telefonu jest wymagany' },
              pattern: { value: REGEX_PHONE, message: 'Niepoprawny numer telefonu' },
            })}
            errors={errors}
          />
          <Input
            label='E-mail'
            type='email'
            register={register('email', {
              required: { value: true, message: 'E-mail jest wymagany' },
              pattern: { value: REGEX_EMAIL, message: 'Niepoprawny adres e-mail' },
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
      </div>
      <Button type='submit'>Wyślij wiadomość</Button>
    </form>
  );
}
