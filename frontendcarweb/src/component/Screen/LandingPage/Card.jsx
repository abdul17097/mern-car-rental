import React from 'react'

export const Card = () => {
    return (
        <div className="border relative top-0 w-[80%] pt-32 p-5 rounded-xl">
            <div className="flex justify-center">
            <img src="/audi a1.png" alt="" className="absolute bottom-[200px] w-[400px] h-[200px]"/>
            </div>
            <div className="">
                <h3 className="text-xl font-bold">Audi A1</h3>
                <div className="flex  gap-3 border w-[50%] flex-wrap">
                <div className="flex gap-1">
                        <img src="/seat.png" alt="" className="w-[20px] h-[20px]"/>
                        <span className="">4 Seats</span>
                </div>
                <div className="flex gap-1">
                        <img src="/car gar.png" alt="" className="w-[20px] h-[20px]"/>
                        <span className="">4 Automatic</span>
                </div>
                <div className="flex gap-1">
                        <img src="/fullday.png" alt="" className="w-[20px] h-[20px]"/>
                        <span className="">Hybrid</span>
                </div>
                <div className="flex gap-1">
                        <img src="/time.png" alt="" className="w-[20px] h-[20px]"/>
                        <span className="">Overtime: PKR 250/hr</span>
                </div>
                <div className="">
                    <p className="">Refill fuel at the end of the day or pay PKR 32/KM</p>
                </div>
                </div>
            </div>
            <div className="">

            </div>
        </div>
    )
}
