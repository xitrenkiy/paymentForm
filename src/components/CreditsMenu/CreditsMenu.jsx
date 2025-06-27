import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useHttp from "../../hooks/http.hook";

export const CreditsMenu = () => {
	const [data, setData] = useState([]);
	const [amountValue, setAmountValue] = useState(null);
	const [customOpened, setCustomOpened] = useState(false);

	const { request } = useHttp();

	useEffect(() => {
		request('http://localhost:3000/cards')
			.then(setData)
	}, [])

	return (
		<div className={`min-h-100 relative overflow-hidden w-100 mx-auto mt-20 rounded-2xl bg-gray-200`}>
				<div className='h-16 p-5 w-100 text-black bg-white flex items-center'>
					<Link to='/' className='cursor-pointer'>&lt;</Link>
					<span className='text-[10] ml-8 font-medium'>Buy credits</span>
				</div>

				<div className='text-black mt-4 bg-white min-h-40 p-5 font-medium'>
					<h2>Choose amount</h2>
					<form className="flex flex-wrap justify-center mt-4 gap-5">
						<div>
							<input value='10' type="radio" name="amount" id="ten" className="hidden peer" onChange={(e) => setAmountValue(parseInt(e.target.value))} onClick={() => setCustomOpened(false)} />
							<label htmlFor="ten" className="block cursor-pointer border border-gray-300 rounded-xl w-25 h-15 text-center py-4 peer-checked:border-blue-500 peer-checked:bg-gray-200/60 peer-checked:text-blue-600 peer-checked:border-2">
								$10
							</label>
						</div>

						<div>
							<input value='20' type="radio" name="amount" id="twenty" className="hidden peer" onChange={(e) => setAmountValue(parseInt(e.target.value))} onClick={() => setCustomOpened(false)} />
							<label htmlFor="twenty" className="block cursor-pointer border border-gray-300 rounded-xl w-25 h-15 text-center py-4 peer-checked:border-blue-500 peer-checked:bg-gray-200/60 peer-checked:text-blue-600 peer-checked:border-2">
								$20
							</label>
						</div>


						<div>
							<input value='50' type="radio" name="amount" id="fifty" className="hidden peer" onChange={(e) => setAmountValue(parseInt(e.target.value))} onClick={() => setCustomOpened(false)} />
							<label htmlFor="fifty" className="block cursor-pointer border border-gray-300 rounded-xl w-25 h-15 text-center py-4 peer-checked:border-blue-500 peer-checked:bg-gray-200/60 peer-checked:text-blue-600 peer-checked:border-2">
								$50
							</label>
						</div>

						<div>
							<input value='100' type="radio" name="amount" id="hundred" className="hidden peer" onChange={(e) => setAmountValue(parseInt(e.target.value))} onClick={() => setCustomOpened(false)} />
							<label htmlFor="hundred" className="block cursor-pointer border border-gray-300 rounded-xl w-25 h-15 text-center py-4 peer-checked:border-blue-500 peer-checked:bg-gray-200/60 peer-checked:text-blue-600 peer-checked:border-2">
								$100
							</label>
						</div>

						<div>
							<input value='200' type="radio" name="amount" id="two-hundred" className="hidden peer" onChange={(e) => setAmountValue(parseInt(e.target.value))} onClick={() => setCustomOpened(false)} />
							<label htmlFor="two-hundred" className="block cursor-pointer border border-gray-300 rounded-xl w-25 h-15 text-center py-4 peer-checked:border-blue-500 peer-checked:bg-gray-200/60 peer-checked:text-blue-600 peer-checked:border-2">
								$200
							</label>
						</div>

						<div>
							<input value='custom' type="radio" name="amount" id="custom" className="hidden peer" onChange={(e) => setAmountValue(e.target.value)} onClick={() => setCustomOpened(true)} />
							<label htmlFor="custom" className="block cursor-pointer border border-gray-300 rounded-xl w-25 h-15 text-center py-4 peer-checked:border-blue-500 peer-checked:bg-gray-200/60 peer-checked:text-blue-600 peer-checked:border-2">
								Custom
							</label>
						</div>
						{amountValue === 'custom' || customOpened ? (
							<input type="number" placeholder="Input amount" className='text-black w-full border border-gray-200 rounded-xl p-2' onChange={(e) => setAmountValue(parseInt(e.target.value))} />
						) : null}
					</form>
				</div>

				<div className='mt-5 bg-white text-black p-5'>
					<h2 className='font-medium'>Payment method</h2>
					
				</div>
			</div>
	)
}