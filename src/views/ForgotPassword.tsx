import { FormProvider, useForm } from "react-hook-form"
import { motion } from 'framer-motion'
import InputField from "../Components/InputField"
import AuthTitle from "../Components/AuthTitle"
import loginArt from '../assets/images/loginArt2.svg';
import { Link } from "react-router-dom";


function ForgotPassword() {
    const methods = useForm<{ email: string }>()

    return (
        <div className="w-[50%] mx-auto min-h-[100vh] flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
                animate={{ opacity: 1, x: 0 }}
                className='basis-5/6'>
                <AuthTitle />

                <div className='flex justify-center'>
                    <img src={loginArt} alt='computer login' className='block w-40 h-40' />
                </div>

                <div className="w-4/5 mx-auto">
                    <p className='font-bold uppercase text-center my-5'>RESET PASSWORD</p>
                    <FormProvider {...methods}>
                        <InputField
                            label="Email"
                            name='email'
                            type='email'
                            placeholder="Enter your Email"
                            required={true} />
                    </FormProvider>
                    <Link
                        type='submit'
                        to='call'
                        className={` block w-full py-2 mt-3 text-sm font-semibold text-center rounded-md  text-white bg-sky-800  bg-[#E4F1FE]'
                        }`}
                    >
                        {/* {!loading ? 'Login' : <HashLoader color='#0C4981' loading={loading} size={15} />} */}
                        Submit
                    </Link>
                </div>

            </motion.div>
        </div>

    )
}

export default ForgotPassword