export default  function Experties(){
    return(
        <div className="experties mx-8 mb-20 mt-24 bg-gray-50  px-16 py-8 rounded text-gray-700">
           <div className="flex justify-between">
            <div className="one flex flex-col space-y-1 items-center hover:-mt-3 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-monitor-smartphone"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"/><path d="M10 19v-3.96 3.15"/><path d="M7 19h5"/><rect width="6" height="10" x="16" y="12" rx="2"/></svg>    
            <div className="font-semibold text-lg">Front-End Dev</div>
            <div className="text-sm text-gray-400"><i>Angular/React</i></div>

            
            
                    </div>
            <div className="one flex hover:-mt-3 flex-col space-y-1 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-code"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
               <div className="font-semibold text-lg"> Back-End Dev</div>
               <div className="text-sm text-gray-400"><i>Python/Node.Js/.Net Core</i></div>

            </div>
            <div className="one flex hover:-mt-3 flex-col space-y-1 items-center">

            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-cloud-download "><path d="M12 13v8l-4-4"/><path d="m12 21 4-4"/><path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"/></svg>
                <div className="font-semibold text-lg">AWS Cloud</div>
                <div className="text-sm text-gray-400"><i>DevOps/ Serverless/Scalibility</i></div>
            </div>
            <div className="one flex hover:-mt-3 flex-col space-y-1 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-database-zap"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 15 21.84"/><path d="M21 5V8"/><path d="M21 12L18 17H22L19 22"/><path d="M3 12A9 3 0 0 0 14.59 14.87"/></svg>
               <div className="font-semibold text-lg"> Data Engineering</div>
               <div className="text-sm text-gray-400"><i>AWS/ Databricks/ Azure/ Python</i></div>
            </div>
            
            </div> 
        </div>
    )

}