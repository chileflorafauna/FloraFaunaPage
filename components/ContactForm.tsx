'use client';

import { FormEvent, useMemo, useState } from 'react';

type ContactFormValues = {
  fullName: string;
  email: string;
  serviceType: string;
  message: string;
  termsAccepted: boolean;
};

type ContactFormErrors = {
  fullName?: string;
  email?: string;
  serviceType?: string;
  message?: string;
  termsAccepted?: string;
};

const GENERIC_SUBMIT_ERROR =
  'Ocurrio un error al enviar tu solicitud. Puedes contactarnos directamente en Pdauelsberg@komunconsulting.com.';

const CONTACT_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || '/api/contact';

const SERVICE_OPTIONS = [
  'Linea de Base Ambiental (Flora/Fauna)',
  'Monitoreo Biologico Estacional',
  'Evaluacion de Valor de Biodiversidad',
  'Gestion de Permisos Ambientales',
  'Otro / Consultoria Especializada',
];

const initialValues: ContactFormValues = {
  fullName: '',
  email: '',
  serviceType: '',
  message: '',
  termsAccepted: false,
};

function validate(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};
  const normalizedName = values.fullName.trim();
  const normalizedEmail = values.email.trim();
  const normalizedMessage = values.message.trim();

  if (!normalizedName) {
    errors.fullName = 'El nombre completo es obligatorio.';
  } else if (normalizedName.length < 3) {
    errors.fullName = 'El nombre debe tener al menos 3 caracteres.';
  } else if (!/^[A-Za-zÀ-ÿ'\-\s]+$/.test(normalizedName)) {
    errors.fullName = 'Usa solo letras, espacios, apostrofes o guiones.';
  }

  if (!normalizedEmail) {
    errors.email = 'El correo es obligatorio.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(normalizedEmail)) {
    errors.email = 'Ingresa un correo valido. Ejemplo: nombre@empresa.cl';
  }

  if (!values.serviceType) {
    errors.serviceType = 'Selecciona un tipo de servicio.';
  }

  if (!normalizedMessage) {
    errors.message = 'El mensaje es obligatorio.';
  } else if (normalizedMessage.length < 20) {
    errors.message = 'El mensaje debe tener al menos 20 caracteres.';
  }

  if (!values.termsAccepted) {
    errors.termsAccepted = 'Debes aceptar el tratamiento de datos personales.';
  }

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [touched, setTouched] = useState<Record<keyof ContactFormValues, boolean>>({
    fullName: false,
    email: false,
    serviceType: false,
    message: false,
    termsAccepted: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: '',
  });

  const errors = useMemo(() => validate(values), [values]);
  const isFormValid = Object.keys(errors).length === 0;

  const showError = (field: keyof ContactFormValues) => {
    return (touched[field] || submitAttempted) && Boolean(errors[field]);
  };

  const inputClass = (field: keyof ContactFormValues) => {
    const baseClass =
      'w-full bg-white border rounded-xl py-3.5 px-5 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-slate-400';

    if (showError(field)) {
      return `${baseClass} border-red-400 focus:border-red-500`;
    }

    return `${baseClass} border-slate-200 focus:border-primary`;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitAttempted(true);

    if (!isFormValid || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: 'idle', message: '' });

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: values.fullName.trim(),
          email: values.email.trim().toLowerCase(),
          serviceType: values.serviceType,
          message: values.message.trim(),
          termsAccepted: values.termsAccepted,
        }),
      });

      const data = await response.json().catch(() => ({} as { error?: string }));

      if (!response.ok) {
        throw new Error(data?.error || GENERIC_SUBMIT_ERROR);
      }

      setValues(initialValues);
      setTouched({
        fullName: false,
        email: false,
        serviceType: false,
        message: false,
        termsAccepted: false,
      });
      setSubmitAttempted(false);
      setSubmitStatus({
        type: 'success',
        message: 'Solicitud enviada correctamente. Te responderemos dentro de 24 horas habiles.',
      });
    } catch {
      setSubmitStatus({
        type: 'error',
        message: GENERIC_SUBMIT_ERROR,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={onSubmit} noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 ml-1" htmlFor="fullName">
            Nombre Completo
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Ej: Marcela Rodriguez"
            required
            autoComplete="name"
            className={inputClass('fullName')}
            value={values.fullName}
            onBlur={() => setTouched((current) => ({ ...current, fullName: true }))}
            onChange={(event) =>
              setValues((current) => ({
                ...current,
                fullName: event.target.value,
              }))
            }
            aria-invalid={showError('fullName')}
            aria-describedby={showError('fullName') ? 'fullName-error' : undefined}
          />
          {showError('fullName') && (
            <p id="fullName-error" className="text-xs text-red-600 ml-1">
              {errors.fullName}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 ml-1" htmlFor="email">
            Correo Corporativo
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="m.rodriguez@empresa.cl"
            required
            autoComplete="email"
            className={inputClass('email')}
            value={values.email}
            onBlur={() => setTouched((current) => ({ ...current, email: true }))}
            onChange={(event) =>
              setValues((current) => ({
                ...current,
                email: event.target.value,
              }))
            }
            aria-invalid={showError('email')}
            aria-describedby={showError('email') ? 'email-error' : undefined}
          />
          {showError('email') && (
            <p id="email-error" className="text-xs text-red-600 ml-1">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-700 ml-1" htmlFor="serviceType">
          Tipo de Servicio
        </label>
        <div className="relative">
          <select
            id="serviceType"
            name="serviceType"
            required
            className={`${inputClass('serviceType')} appearance-none`}
            value={values.serviceType}
            onBlur={() => setTouched((current) => ({ ...current, serviceType: true }))}
            onChange={(event) =>
              setValues((current) => ({
                ...current,
                serviceType: event.target.value,
              }))
            }
            aria-invalid={showError('serviceType')}
            aria-describedby={showError('serviceType') ? 'serviceType-error' : undefined}
          >
            <option value="">Seleccione una categoria</option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
            <span className="material-symbols-outlined">expand_more</span>
          </div>
        </div>
        {showError('serviceType') && (
          <p id="serviceType-error" className="text-xs text-red-600 ml-1">
            {errors.serviceType}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-700 ml-1" htmlFor="message">
          Mensaje / Requerimiento
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Describa brevemente su proyecto o consulta especifica..."
          className={inputClass('message')}
          value={values.message}
          onBlur={() => setTouched((current) => ({ ...current, message: true }))}
          onChange={(event) =>
            setValues((current) => ({
              ...current,
              message: event.target.value,
            }))
          }
          aria-invalid={showError('message')}
          aria-describedby={showError('message') ? 'message-error' : undefined}
        />
        {showError('message') && (
          <p id="message-error" className="text-xs text-red-600 ml-1">
            {errors.message}
          </p>
        )}
      </div>

      <div className="py-2">
        <div className="flex items-center gap-3">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            required
            className="rounded text-[#15803d] focus:ring-[#15803d] border-slate-300"
            checked={values.termsAccepted}
            onBlur={() => setTouched((current) => ({ ...current, termsAccepted: true }))}
            onChange={(event) =>
              setValues((current) => ({
                ...current,
                termsAccepted: event.target.checked,
              }))
            }
            aria-invalid={showError('termsAccepted')}
            aria-describedby={showError('termsAccepted') ? 'terms-error' : undefined}
          />
          <label className="text-xs text-slate-500" htmlFor="terms">
            Acepto el tratamiento de mis datos personales segun las politicas de privacidad de la consultora.
          </label>
        </div>
        {showError('termsAccepted') && (
          <p id="terms-error" className="text-xs text-red-600 ml-1 mt-2">
            {errors.termsAccepted}
          </p>
        )}
      </div>

      {submitStatus.type === 'success' && (
        <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-xl px-4 py-3">
          {submitStatus.message}
        </p>
      )}
      {submitStatus.type === 'error' && (
        <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          {submitStatus.message}
        </p>
      )}

      <button
        className="w-full cursor-pointer bg-[#15803d] hover:bg-green-800 disabled:bg-slate-400 disabled:hover:bg-slate-400 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-green-900/10 hover:shadow-green-900/20 transition-all flex items-center justify-center gap-3"
        type="submit"
        disabled={!isFormValid || isSubmitting}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
        <span className="material-symbols-outlined">send</span>
      </button>
    </form>
  );
}
