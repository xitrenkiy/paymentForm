import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from 'yup';
import useHttp from '../../hooks/http.hook';

import { cardAdded } from '../PaymentForm/cardsSlice';
import { filteredUserCardsSelector } from '../../store/selectors/userSelector';

const date = new Date();

const formatDate = value => {
	if (value < 10) {
		return `0${value}`
	} else {
		return value
	}
}

const formatCardNumber = value => {
	const regex = /(\d{4})(?=\d)/g;

	return value.replace(regex, '$1 ');
}

const initialValues = {
	fullName: '',
	country: 'United States',
	cardNumber: '',
	type: 'visa',
	expire: `${formatDate(date.getMonth())} / ${date.getFullYear() + 4}`,
	cvc: `${Math.floor(Math.random() * (999 - 100) + 100)}`,
	primary: false
}

const validationSchema = yup.object().shape({
	fullName: yup.string().required('Required field').min(5, 'Minimum 5 characters').max(100, 'Max 50 characters'),
	country: yup.string().required('Required field'),
	cardNumber: yup.string().matches(/\d+$/g, 'Enter only numbers').min(16, 'Enter 16 symbols').max(16, 'Enter 16 symbols').required('Required field'),
	type: yup.string().required('Required field')
})

export const AddCard = ({ toggleModal }) => {
	const { request } = useHttp();
	const activeUser = useSelector(filteredUserCardsSelector);
	const dispatch = useDispatch();

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={(values, { setSubmitting }) => {
				console.log('Form submitted', values);
				const newCard = {
					id: nanoid(),
					userId: activeUser.id,
					element: values.type === 'visa' ? "https://by.visa.com/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg" : "https://brandlogos.net/wp-content/uploads/2011/08/mastercard-logo.png",
					type: values.type,
					name: values.fullName,
					primary: values.primary,
					number: formatCardNumber(values.cardNumber),
					expire: values.expire,
					country: values.country,
					cvc: values.cvc
				}
				request('http://localhost:3000/cards', 'POST', JSON.stringify(newCard))
					.then(() => dispatch(cardAdded(newCard)))
					.catch(e => console.error(e))
					.finally(() => setSubmitting(false))
			}}
			validationSchema={validationSchema}
		>
			<Form className='absolute overflow-hidden w-full min-h-[483px] text-black bg-white bottom-0 rounded-2xl px-5 py-5'>
				<div className='flex justify-between'>
					<h2 className='font-medium'>Add new card</h2>
					<button type='button' className='cursor-pointer' onClick={toggleModal}>⨉</button>
				</div>
				<div className='mt-5'>
					<h2 className='font-medium text-[14px]'>Personal details</h2>

					<Field type="text" name='fullName' placeholder="Name of card" className='border border-gray-300 w-full rounded p-2 mt-2' />
					<ErrorMessage component='div' name='fullName' className='text-red-700' />

					<Field as='select' name="country" id="country" className='border border-gray-300 w-full mt-2 rounded p-2'>
						<option value="United States">United States</option>
						<option value="Ukraine">Ukraine</option>
						<option value="England">England</option>
						<option value="Poland">Poland</option>
					</Field>
					<ErrorMessage component='div' name='country' className='text-red-700' />

					<Field as='select' name="type" id="type" className='border border-gray-300 w-full mt-2 rounded p-2'>
						<option value="visa">Visa</option>
						<option value="mastercard">MasterCard</option>
					</Field>
					<ErrorMessage component='div' name='country' className='text-red-700' />

					<div className='flex justify-between items-center mt-2'>
						<div className='font-medium'>Do it primary?</div>
						<Field type="checkbox" name='primary' className='appearance-none cursor-pointer relative w-12 h-6 transition-transform duration-200 px-0.5 rounded-2xl bg-black/65 before:block before:transition-transform before:duration-200 before:w-5 before:h-5 before:bg-white before:rounded-4xl before:absolute before:top-[50%] before:translate-y-[-50%] checked:bg-blue-700 checked:before:translate-x-6'/>
					</div>

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

						<Field disabled type="text" name='expire' placeholder="mm / yy" className='border border-gray-300 w-full rounded p-2 mt-2 bg-gray-200' />
						<ErrorMessage component='div' name='expire' className='text-red-700' />

						<Field disabled type="text" name='cvc' placeholder="CVC" className='border border-gray-300 w-full rounded p-2 mt-2 bg-gray-200' />
						<ErrorMessage component='div' name='cvc' className='text-red-700' />

					</div>
				</div>

				<button type='submit' className='mt-7 bg-blue-700 w-full rounded-xl transition duration-200 text-white h-13 cursor-pointer hover:bg-blue-900 hover:translate-y-[-5px]'>Save card information</button>
			</Form>
		</Formik>
	)
}