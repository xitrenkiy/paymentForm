import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';

const initialValues = {
	name: '',
	email: '',
	password: ''
}

const validationSchema = yup.object().shape({
	name: yup.string().min(2, 'Min 2 symbols').max(50, 'Max 50 symbols'),
	email: yup.string().email('Wrong email').required('Required field'),
	password: yup.string().min(6, 'Password must contain at least 6 symbols').max(50, 'Max 50 symbols').required('Required field')
})



const Form = ({ title, handleClick, isRegister = true }) => {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={values => handleClick(values.email, values.password)}
		>
			<div className='w-[20rem] min-h-[200px] fixed top-[50%] left-[50%] translate-[-50%] backdrop-blur-[1px] bg-black/40 rounded'>
				<FormikForm className='flex flex-col gap-3 justify-center items-center rounded text-white'>
					<div className='text-white relative mt-5 mb-2 font-medium text-2xl text-left'>{title}</div>

					{isRegister ?
						<>
							<Field className='p-2 border border-gray-200 rounded' type='text' name='name' placeholder='Name' />
							<ErrorMessage component='div' name='name' className='text-red-500' />
						</>
						:
						null
					}

					<Field className='p-2 border border-gray-200 rounded' type='email' name='email' placeholder='Email' />
					<ErrorMessage component='div' name='email' className='text-red-500' />

					<Field className='p-2 border border-gray-200 rounded' type='password' name='password' placeholder='Password' />
					<ErrorMessage component='div' name='password' className='text-red-500' />

					<button className='w-[12rem] text-white bg-pink-400 mt-1 rounded p-1.5 shadow cursor-pointer transition-transofrm duration-200 hover:translate-y-[-5px]' type='submit'>{isRegister ? 'Sign Up' : 'Sign In'}</button>

					{isRegister ? <div className='mb-5'>Have an account? <Link to='/login' className='text-blue-400'>Log in</Link></div> : <div className='mb-5'>Do you have an account? <Link to='/registration' className='text-blue-400'>Register</Link></div>}
				</FormikForm>
			</div>

		</Formik>
	)
}

export default Form;