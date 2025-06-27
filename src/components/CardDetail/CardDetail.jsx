import { useSelector, useDispatch } from "react-redux";

import { cardDeleted, cardPrimaryToggle } from "../PaymentForm/cardsSlice";

export const CardDetail = ({ toggleModal, type }) => {
	const { cards } = useSelector(state => state);
	const dispatch = useDispatch();
	const openedCard = cards.find(card => card.type === type);

	const handleClickDeleteButton = () => {
		toggleModal();
		dispatch(cardDeleted(openedCard.id));
	}

	return (
		<div className='absolute overflow-hidden w-full h-[52%] bg-white bottom-0 rounded-xl text-black p-5 animate-slideIn52'>
			<div className='flex justify-between'>
				<h2 className='font-medium'>Card details</h2>
				<button className='cursor-pointer' onClick={toggleModal}>⨉</button>
			</div>

			<>
				<div className="border border-gray-200 w-full min-h-25 rounded-xl mt-5 p-3">
					<div className="flex items-center">
						<img src={openedCard.element} className='w-15 h-15 object-contain'/>
						<div className='flex flex-col text-[14px] ml-4 tracking-wide'>
							<div className='font-medium'>{openedCard.name}{openedCard.primary ? <span className='ml-2 bg-gray-200 p-1 rounded-2xl text-[10px] text-blue-500'>Primary</span> : null}</div>
							<div className='text-[11px] opacity-50 mt-1'>{openedCard.number}</div>
						</div>
					</div>
					
					<div className='mt-3'>
						<h2 className='font-light'>Expiry</h2>
						<p className='font-medium'>{openedCard.expire}</p>
					</div>

					<div className='mt-3 flex justify-between'>
						<div>
							<h2 className='font-light'>Country</h2>
							<p className='font-medium'>{openedCard.country}</p>
						</div>
						<div>
							<h2 className='font-light text-right'>CVC</h2>
							<p className='font-medium text-right'>{openedCard.cvc}</p>
						</div>
					</div>
				</div>
				<button 
					className='cursor-pointer text-red-500 font-bold mt-5'
					onClick={handleClickDeleteButton}>
					Delete card
				</button>
				<button
					disabled={openedCard.primary}
					className={`${!openedCard.primary ? 'w-full mt-5 bg-blue-200/70 p-3 transition-color duration-200 rounded-xl cursor-pointer text-blue-500 font-bold hover:bg-blue-500 hover:text-white' : 'w-full mt-5 bg-blue-200/70 p-3 rounded-xl cursor-not-allowed'}`}
					onClick={() => dispatch(cardPrimaryToggle(openedCard.id))}
					>
						{openedCard.primary ? 'You already pinned this card' : 'Set as your primary card'}
				</button>
			</>
		</div>
	)
}