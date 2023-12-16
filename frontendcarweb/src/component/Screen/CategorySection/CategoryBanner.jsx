import '../CategorySection/CategoryBanner.css'
export const CategoryBanner = ({data})=>{
  const {bgImage, p1, p2, p3, btn} = data;
    return(
        <div className='bgLine hidden   w-full'>
        <div className={`mx-10  py-12 px-16 flex justify-between bg-[url(${bgImage})] mt-10 bgCarImages shadow rounded-xl`}>
        <div className=' md:w-4/6 w-1/5 flex flex-col gap-5 '>
          <h6 className='text-xs text-gray-100 text-[#fff] pb-5'>{p1}</h6>
          <h5 className='text-white text-4xl font-bold'>{p2}</h5>
          <p className='text-white text-lg flex w-4/5 '>{p3}</p>
          <button className='text-black text-sm font-bold border flex items-center justify-center w-2/6  rounded-xl p-1 bg-white '>{btn}</button>
        </div>
    </div>
    </div>
    )
}