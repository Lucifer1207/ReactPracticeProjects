import React,{useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency="usd",
    amountDisabled=false,
    currencyDisabled=false,
    className = "",
}) {
   
 const uniqueId=useId();
  // used to generate unique id's....
  // NOT NECESSARY... but BONUS h...Sheekh lo..
  // aur kafi websites pr tumne dekha hoga ki tum TAB daba dabakr navigate kr skte ho from one component to another...
  // aisa isi HOOK ki wjh se possible h, kyuki ye HOOK map krdega by giving same unique id's to 2 or more HTML elements...
  // jaise hmare code me dekho...hmne label aur input ko bind krdiya h....
  // ab dene ko mai kuch bhi naam de skta tha...bss same krdeta toh hojata...pr ek nyi cheez h...sheekh lo
  // Note: {According to React Documentation} ye method prefer nhi kiya jata in loops...(Yaad rkhe isse)
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={uniqueId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={uniqueId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisabled}
                >
                    {/* remember the keys in react for loop */}
                {currencyOptions.map((currency)=>(
                    <option key={currency} value={currency}>
                            {currency}
                    </option>
                ))}    
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
