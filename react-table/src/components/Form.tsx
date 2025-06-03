import fieldsConfig from '../config/fields';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import type { RecordData } from '../types/RecordData';
import { useAddRecord } from '../services/useAddRecord';

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(5),
  age: z.coerce.number().min(0),
  address: z.string().min(1),
  country: z.string(),
  surname: z.string(),
});

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RecordData>({
    resolver: zodResolver(schema),
  });

  const mutation = useAddRecord();

  const onSubmit = async (data: RecordData) => {
    try {
      await mutation.mutateAsync(data);
      reset();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6  mx-auto space-y-6 flex flex-col"
    >
      {fieldsConfig.map((field) => {
        return (
          <Fragment key={field.name}>
            <label
              htmlFor={field.name}
              className="mb-2 w-xs font-semibold text-slate-700"
            >
              {field.placeholder}
            </label>
            <input
              {...register(field.name)}
              id={field.name}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-800 w-xs focus:border-transparenttext-slate-800"
            />
            {errors[field.name] && (
              <p className="mt-1 text-sm text-red-500">
                {errors[field.name]?.message}
              </p>
            )}
          </Fragment>
        );
      })}

      <button
        type="submit"
        className="bg-slate-800 hover:bg-slate-700 w-xs disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-md transition-colors duration-300"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Отправка...' : 'Добавить'}
      </button>
    </form>
  );
};
export default Form;
