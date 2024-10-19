
const page = ({ params }) => {
    return (
        <div className="flex flex-col h-screen justify-center items-center">this catogery page of <span className="text-4xl text-orange-400 font-semibold font-raleway">{params.catogeryName}</span></div>
    )
}

export default page