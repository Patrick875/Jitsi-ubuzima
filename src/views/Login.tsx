import AuthTitle from "../Components/AuthTitle"
import { FormProvider, useForm } from 'react-hook-form'
import { motion } from 'framer-motion';
import loginArt from '../assets/images/loginArt2.svg';
import { Link } from "react-router-dom";
import InputField from "../Components/InputField";


function Login() {
    const methods = useForm<{ email: string, password: string }>({ mode: 'onBlur' });

    return (
        <div className="w-[50%] mx-auto min-h-[100vh] flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
                animate={{ opacity: 1, x: 0 }}
                className='basis-5/6'
            >
                <AuthTitle />
                <div className='flex justify-center'>
                    <img src={loginArt} alt='computer login' className='block w-40 h-40' />
                </div>
                <div className="w-4/5 mx-auto">
                    <FormProvider {...methods} >
                        <p className='font-bold uppercase text-center my-5 text-sky-900'>LOGIN</p>
                        <InputField
                            name='email'
                            label='Email'
                            required={true}
                            type='email'
                            placeholder='Email'
                        />
                        {/* {methods.reseterrors.email && <p className="error-bannel">{errors.email.message}</p>} */}
                        <InputField
                            name='password'
                            label='Password'
                            required={true}
                            type='password'
                            placeholder='Enter your password'

                        />
                        <Link
                            type='submit'
                            to='call'
                            className={` block w-full py-2 mt-3 text-sm font-semibold text-center rounded-md  text-white bg-sky-800  bg-[#E4F1FE]'
                        }`}
                        >
                            {/* {!loading ? 'Login' : <HashLoader color='#0C4981' loading={loading} size={15} />} */}
                            Login
                        </Link>
                    </FormProvider>
                    <p className='mt-3 text-sm text-center'>
                        Forgot your password ?{' '}
                        <span className='font-medium text-primary-sky'>
                            <Link to='/forgot-password'>Reset password</Link>
                        </span>
                    </p>
                </div>
            </motion.div>
        </div>

    )
}

export default Login