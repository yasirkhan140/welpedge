const ProblemStatment = ({ children }) => {
    return (
        <div className='div-text mt-10'>
            <div className='wrap-div-text px-[10px] flex justify-center'>
                <div className='max-w-[900px] main-div-text px-[10px] border-[6px] rounded-md border-[#ff914d] '>
                    <div className='max-[930px]:mx-[63.5px] text-center mb-3'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProblemStatment