import { useFormContext } from "react-hook-form";

interface SelectFieldProps {
    label: string;
    name: string;
    options: { value: string; label: string }[];
    required?: boolean;
}

const SelectField = ({ label, name, options, required }: SelectFieldProps) => {
    const { register } = useFormContext();

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor={name}>
                {label}
            </label>
            <select
                id={name}
                {...register(name, { required })}
                className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectField;
