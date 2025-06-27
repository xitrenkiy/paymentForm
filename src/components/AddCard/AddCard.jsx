import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from 'yup';

const date = new Date();

const formatDate = value => {
	if (value < 10) {
		return `0${value}`
	} else {
		return value
	}
}

const initialValues = {
	fullName: '',
	country: 'USA',
	streetAddress: '',
	cardNumber: '',
	expire: `${formatDate(date.getMonth())} / ${date.getFullYear() + 4}`,
	cvc: ''
}

const validationSchema = yup.object().shape({
	fullName: yup.string().required('Required field').min(5, 'Minimum 5 characters').max(100, 'Max 100 characters'),
	country: yup.string().required('Required field'),
	streetAddress: yup.string().required('Required field').min(5, 'Minimum 5 characters').max(100, 'Max 100 characters'),
	cardNumber: yup.string().matches(/\d+$/g, 'Enter only numbers').min(16, 'Enter 16 symbols').max(16, 'Enter 16 symbols').required('Required field')
})

export const AddCard = ({ toggleModal }) => {
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={(values) => console.log(values)}
			validationSchema={validationSchema}
		>
			<Form className='absolute overflow-hidden w-full h-[483px] text-black bg-white bottom-0 rounded-2xl px-5 py-5 animate-slideIn63'>
				<div className='flex justify-between'>
					<h2 className='font-medium'>Add new card</h2>
					<button className='cursor-pointer' onClick={toggleModal}>⨉</button>
				</div>
				<div className='mt-5'>
					<h2 className='font-medium text-[14px]'>Personal details</h2>

					<Field type="text" name='fullName' placeholder="Full name" className='border border-gray-300 w-full rounded p-2 mt-2' />
					<ErrorMessage component='div' name='fullName' className='text-red-700' />

					<Field as='select' name="country" id="country" className='border border-gray-300 w-full mt-2 rounded p-2'>
						<option value="USA">United States</option>
						<option value="UA">Ukraine</option>
						<option value="ENG">England</option>
						<option value="PL">Poland</option>
					</Field>
					<ErrorMessage component='div' name='country' className='text-red-700' />

					<Field type="text" name='streetAddress' placeholder="Street address" className='border border-gray-300 w-full rounded p-2 mt-2' />
					<ErrorMessage component='div' name='streetAddress' className='text-red-700' />

				</div>
				<div className='mt-5'>
					<h2 className='font-medium text-[14px]'>Card Details</h2>

					<Field 
						name='cardNumber' 
						className='border border-gray-300 w-full rounded p-2 mt-2' 
						placeholder='Card number'
					/>
					<ErrorMessage component='div' name='cardNumber' className='text-red-700' />

					<div className='flex justify-between gap-5'>

						<Field disabled type="text" name='expire' placeholder="mm / yy" className='border border-gray-300 w-full rounded p-2 mt-2' />
						<ErrorMessage component='div' name='expire' className='text-red-700' />

						<Field type="text" name='cvc' placeholder="CVC" className='border border-gray-300 w-full rounded p-2 mt-2' />
						<ErrorMessage component='div' name='cvc' className='text-red-700' />

					</div>
				</div>

				<button className='mt-7 bg-blue-700 w-full rounded-xl transition duration-200 text-white h-13 cursor-pointer hover:bg-blue-900 hover:translate-y-[-5px]'>Save card information</button>
			</Form>
		</Formik>
	)
}