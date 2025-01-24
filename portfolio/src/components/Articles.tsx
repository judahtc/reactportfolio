export default function Articles(){
    return(
        <> 
<div className="mx-40 mt-12 ">

    {/* <div className="text-center text-5xl font-semibold my-24 mt-32">📖 Blogs</div> */}

    <div className="flex items-center justify-between my-5"><span className="text-xl font-bold">📰 Articles</span> <a target="_blank" href="https://awsfordevelopers.hashnode.dev/" className="text-green-500 text-base">View all articles →</a></div>

        <div className="flex mb-10 space-x-7">    

                <div className=" w-2/3 ">
            <div className="articles ">
                <div className="one  border border-gray-200  py-4  px-4  rounded-lg flex flex-col items-center" >

                    <div className=""><img  src="\src\assets\images\nodejs-lambda3.png"></img></div>
                <div className="bg-gray-50 px-4 py-4 rounded-md"><p className="font-semibold text-xl " style={{color:"##222222"}}>A Guide: Deploying your Node.Js Application on Lambda Function using Docker</p>
           
                <p>

Nov 21, 2024
·
<span className="test-sm text-yellow-400">3 min read</span></p>

</div>
                </div>
            </div>
        </div>

        <div className="flex flex-col items-start space-y-3">
        <div className="">
            <div className="articles">
                <div className="one  border border-gray-200  py-8  px-8 bg-gray-50 rounded-lg" >
                <p className="font-semibold text-lg" style={{color:"##222222"}}>A Guide: Deploying your first FastAPI application on Amazon EC2</p>
                <br></br>
                <p>

Oct 28, 2024
·
<span className="test-sm text-yellow-400">3 min read</span></p>
                </div>
            </div>
        </div>
        <div className=" ">
            <div className="articles">
                <div className="one  border border-gray-200  py-8  px-8 bg-gray-50 rounded-lg" >
                <p className="font-semibold text-lg" style={{color:"##222222"}}> A step to step guide: Hosting your frontend application in Amazon S3</p>
                
                <p>

Sep 25, 2024
·
<span className="test-sm text-yellow-400">3 min read</span></p>
                </div>
            </div>
        </div>

        </div>
        </div>
</div>
        </>

    )
}