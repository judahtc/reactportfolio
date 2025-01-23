export default function Articles(){
    return(
        <> 
<div className="mx-28 mt-12 ">

    <div className="flex items-center justify-between my-5"><span className="text-xl font-bold">📰 Articles</span> <a target="_blank" href="https://awsfordevelopers.hashnode.dev/" className="text-green-500 text-base">View all articles →</a></div>

        <div className="flex mb-10 space-x-7">    

                <div className=" w-2/3 ">
            <div className="articles ">
                <div className="one  border border-gray-200  py-8  px-8  bg-gray-50 rounded-lg" >
                <p className="font-bold text-lg" style={{color:"##222222"}}>A Guide: Deploying your Node.Js Application on Lambda Function using Docker</p>
                <br></br>
                <p>

Nov 21, 2024
·
<span className="test-sm text-yellow-400">3 min read</span></p>
                </div>
            </div>
        </div>
        <div className="w-[55%] ">
            <div className="articles">
                <div className="one  border border-gray-200  py-8  px-8 bg-gray-50 rounded-lg" >
                <p className="font-bold text-lg" style={{color:"##222222"}}>A Guide: Deploying your first FastAPI application on Amazon EC2</p>
                <br></br>
                <p>

Oct 28, 2024
·
<span className="test-sm text-yellow-400">3 min read</span></p>
                </div>
            </div>
        </div>
        <div className="w-2/3 ">
            <div className="articles">
                <div className="one  border border-gray-200  py-8  px-8 bg-gray-50 rounded-lg" >
                <p className="font-bold text-lg" style={{color:"##222222"}}> A step to step guide: Hosting your frontend application in Amazon S3</p>
                <br></br>
                <p>

Sep 25, 2024
·
<span className="test-sm text-yellow-400">3 min read</span></p>
                </div>
            </div>
        </div>
        </div>
</div>
        </>

    )
}