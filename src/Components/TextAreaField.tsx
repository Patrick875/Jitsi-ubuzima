import { Controller, useFormContext } from 'react-hook-form';

type Props = {
    label: string;
    name: string;
    required?: boolean;
    placeholder?: string;
};

function TextAreaField({ label, name, required = false, placeholder }: Props) {
    const { control } = useFormContext();

    return (
        <div className="mb-4">
            <label className="block mb-2 font-bold text-gray-700" htmlFor={name}>
                {label}
            </label>
            <Controller
                name={name}
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <textarea
                        className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required={required}
                        {...field}
                        placeholder={placeholder}
                        id={name}
                    />
                )}
            />
        </div>
    );
}

export default TextAreaField;
