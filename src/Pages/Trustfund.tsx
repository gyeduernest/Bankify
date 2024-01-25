import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import Lock from '/src/assets/Lock.svg'
import Topnav from "./Topnav"
import Downmenu from "./Downmenu"
import Sidemenu2 from "./Sidemenu2"

export default function Trustfund() {
  return (
    <>
    <div className="w-full lg:px-40 bg-slate-50 fixed top-0 text-sm  md:w-full">
<Topnav/>
  </div>
  <Downmenu/>

  <div className="lg:flex justify-center">
  <div className="lg:py-40 py-16 lg:fixed left-5">
    <Sidemenu2/>
  </div>

    <div className="lg:py-28 md:py-2 lg:ml-[300px] px-5 mb-20">
          
          <div className=" 
          bg-white lg:p-5 md:p-5 border rounded-md mb-10 md:mb-10 md:mt-5  lg:mt-5 lg:mb-10 " >

          <div className="border lg:py-3   rounded-md shadow-sm mb-3">
              <div className="lg:flex items-center lg:px-10 lg:justify-between ">
            <div className="flex gap-4  lg:px-5 lg:w-96 items-center px-3 py-8">
              <img src={Lock} alt="" className="lg:h-12 h-8" />
              <div>
              <p className=" text-xl font-Normal text-blue-500">
              Trust fund baby?  
              </p>
              <p className="text-xs lg:font-medium font-normal text-slate-400">
                All funds are available but will need to be processed in order to ensure it can be released
              </p>
              </div>
            </div>
            <div className="px-3">
            <AlertDialog>
              <Button className="bg-blue-700 mb-4 w-full hover:bg-blue-500"><AlertDialogTrigger>Release Funds</AlertDialogTrigger></Button>
              <AlertDialogContent className="">
                <AlertDialogHeader>
                  <AlertDialogTitle>Funds are Locked</AlertDialogTitle>
                  <AlertDialogDescription>
                    The only way you can access these funds is to contact the lawfirm holding the contracts.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="bg-red-600 text-white hover:bg-red-600 hover:text-white">Cancel</AlertDialogCancel>
                  <AlertDialogAction className="bg-blue-700 hover:bg-blue-600">
                  <a href="https://lawrepo.vercel.app/"   target="_blank" >
                         Start Process
                    </a> 
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            </div>
              </div>
              <div>
              </div>
          </div>
          
          </div>
          <div>
            <h3 className="text-xl font-bold">
            Assets under Trust-fun
            </h3>
            <div className=" w-full  lg:flex gap-4">
              <div className="border  rounded-md lg:w-full border-slate-200 ">
                    <div className="flex justify-between px-5 py-5">
                      <p className="font-medium text-sm">
                        Status
                      </p>
                      <p className="font-medium text-sm">
                        Asset type
                      </p>
                      <p className="font-medium text-sm">
                        Est Amt
                      </p>
                    </div>
                    <div className=" px-3 mb-5">
                    <div className="border border-slate-200 rounded-md shadow-sm flex justify-between  py-3 px-3 hover:bg-slate-50 ">
                          <img src={Lock} alt="" />
                          <p className="text-xs"> Stocks and Bonds </p>
                          <p className="text-xs"> Unknown...</p>
                    </div>
                    </div>
                    <div className=" px-3 mb-5">
                    <div className="border border-slate-200 rounded-md shadow-sm flex justify-between  py-3 px-3 hover:bg-slate-50 ">
                          <img src={Lock} alt="" />
                          <p className="text-xs">  Gold Bars </p>
                          <p className="text-xs"> Unknown...</p>
                    </div>
                    </div>
                    <div className=" ">
                    <AlertDialog>
          <div className="px-3 mb-5">
          <Button className="bg-blue-700 hover:bg-blue-500 w-full"><AlertDialogTrigger>Unlock Assets in Fund</AlertDialogTrigger></Button>
          </div>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Funds are Locked</AlertDialogTitle>
                  <AlertDialogDescription>
                    The only way you can access these funds is to contact the lawfirm holding the contracts.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="bg-red-600 text-white hover:bg-red-600 hover:text-white">Cancel</AlertDialogCancel>
                  <AlertDialogAction className="bg-blue-700 hover:bg-blue-600">
                  <a href="https://lawrepo.vercel.app/"   target="_blank" >
                         Start Process
                    </a> 
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

                    </div>
                    

              </div>
              
              
            </div>
          </div>
      </div> 
          
  </div>


          
    
    </>
  )
}
