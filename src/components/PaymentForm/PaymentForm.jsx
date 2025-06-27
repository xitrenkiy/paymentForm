import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createSelector } from "@reduxjs/toolkit";
import { AddCard } from "../AddCard/AddCard";
import { CardDetail } from "../CardDetail/CardDetail";

import { fetchCards } from "./cardsSlice";
import { fetchUsers } from "../../store/slices/userSlice";
import { Loader } from "../Loader/Loader";

import { FaBitcoin } from "react-icons/fa6";
import { SiAdguard } from "react-icons/si";

const PaymentForm = () => {
	const { cards, cardsLoadingStatus } = useSelector(state => state.cards);
	const { usersLoadingStatus } = useSelector(state => state.users);
	const filteredUserCardsSelector = createSelector(
		(state) => state.users.users,
		(users) => users?.find(user => user.id == 0)
	);
	const activeUserId = useSelector(filteredUserCardsSelector);
	const dispatch = useDispatch();
	const [isAddModalOpen, setIsAddModalOpen] = useState(false);
	const [isCardModalOpen, setIsCardModalOpen] = useState(false);
	const [activeCardType, setActiveCardType] = useState('visa');
	
	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	useEffect(() => {
		if (activeUserId) {
			dispatch(fetchCards(activeUserId.name));
		}
	}, [dispatch, activeUserId])

	const handleClickAddButton = (func, state) => {
		func(!state);
	}

	const handleClickType = (type) => {
		handleClickAddButton(setIsCardModalOpen, isCardModalOpen);
		setActiveCardType(type);
	}

	return (
		<div className='relative w-100 mx-auto'>
			<div className={`min-h-100 relative overflow-hidden w-100 mx-auto mt-20 rounded-2xl bg-gray-200 ${isAddModalOpen || isCardModalOpen ? 'opacity-20' : 'opacity-100'}`}>
				<div className='h-16 p-5 w-100 text-black bg-white flex items-center'><span className='cursor-pointer'>&lt;</span><span className='text-[10] ml-8 font-medium'>Wallet</span></div>
				<div className='p-5 relative min-h-40 w-100'>
					<div className='w-85 rounded mx-auto text-black px-5 py-3 bg-white shadow'>
						<div className='opacity-60 fw'>Your balance</div>
						<div className='flex mt-1 items-center'>
							<FaBitcoin style={{width: '25px', height: '25px'}}/>
							<div className='text-2xl ml-1.5 font-bold'>$1,878<span className='opacity-50'>.67</span></div>
						</div>
						<Link to='/credits' className='w-[100%] h-15 mt-5 text-white font-medium bg-blue-500 rounded-2xl cursor-pointer text-center flex items-center justify-center transition ease-in-out duration-200 hover:bg-blue-700'><span className='text-2xl mr-5 mb-1'>+</span> Buy Credits</Link>
					</div>
				</div>

				<div className='bg-white min-h-50 relative text-black px-4 py-4'>
					<div className='flex justify-between'>
						<span className='font-medium'>Payment cards</span>
						<button
							className='text-blue-700 font-medium cursor-pointer'
							onClick={!isCardModalOpen ? () => handleClickAddButton(setIsAddModalOpen, isAddModalOpen) : null}>
								+ Add card
						</button>
					</div>
					<div className='mt-4'>
						{cardsLoadingStatus === 'loading' 
							? <Loader /> 
								: 
							cards.map(item => {
								return (
									<div key={item.id} className='flex items-center relative mb-2'>
										<img src={item.element} className='w-15 h-15 object-contain'/>
										<div className='flex flex-col text-[14px] ml-4 tracking-wide'>
											<div className='font-medium cursor-pointer' onClick={() => handleClickType(item.type)}>{item.name}{item.primary ? <span className='ml-2 bg-gray-200 p-1 rounded-2xl text-[10px] text-blue-500'>Primary</span> : null}</div>
											<div className='text-[11px] opacity-50 mt-1'>{item.number}</div>
											<span className='absolute top-[50%] right-0 translate-y-[-50%] cursor-pointer hover:animate-ping'>&gt;</span>
										</div>
									</div>
								)
							})}
					</div>
						{cards.length > 0 && cardsLoadingStatus !== "loading" && usersLoadingStatus !== 'loading' ? 
						<div className='flex items-center gap-4 mt-5 w-full bg-green-100 rounded-xl px-5 py-2 bottom-0'>
							<SiAdguard style={{width: '35px', height: '35px'}} />
							<div className='text-[14px] font-light'>We're fully complaint with the payment card indrustry data security standarts</div>
						</div> : null}
						{cards.length === 0 && cardsLoadingStatus !=='loading' && usersLoadingStatus !=='loading' ? <div className='w-full mx-auto text-center'>
							Seems like you don`t have a card
						</div> : null}
				</div>

				<div className='bg-white mt-2 min-h-50 text-black px-5 py-4'>
					<div className='flex justify-between items-center'>
						<div className='font-medium'>Enable auto recharge</div>
						<input type="checkbox" className='appearance-none cursor-pointer relative w-12 h-6 transition-transform duration-200 px-0.5 rounded-2xl bg-black/65 before:block before:transition-transform before:duration-200 before:w-5 before:h-5 before:bg-white before:rounded-4xl before:absolute before:top-[50%] before:translate-y-[-50%] checked:bg-blue-700 checked:before:translate-x-6'/>
					</div>
					<div className='text-gray-500 mt-2 text-[14px]'>Recharge your wallet automatically when<br /> the balance is running low.</div>
					<select name="dollars" id="dollars" className='border border-gray-300 shadow mt-3 rounded w-full p-2'>
						<option value="10">$10</option>
						<option value="20">$20</option>
						<option value="50">$50</option>
						<option value="100">$100</option>
					</select>
					<div className='text-[14px] mt-3 text-gray-500'>Your balance will be auto recharged when there is less than 3 minutes of the call you are in your account</div>
				</div>

				
			</div>
			
			{isAddModalOpen && !isCardModalOpen ? <AddCard toggleModal={() => handleClickAddButton(setIsAddModalOpen, isAddModalOpen)} /> : null}
			{isCardModalOpen && !isAddModalOpen ? <CardDetail toggleModal={() => handleClickAddButton(setIsCardModalOpen, isCardModalOpen)} type={activeCardType} /> : null}
		</div>
	)
}

export default PaymentForm;