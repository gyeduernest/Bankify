import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
import Check from '/src/assets/Check.svg'
import Pending from '/src/assets/Pending.svg'
import Lock from '/src/assets/Lock.svg'
import Avatar1 from '/src/assets/Avatar1.png'
import { Link } from "react-router-dom"
import Warn from '../assets/Warn.svg'
import Sidemenu from "./Sidemenu"
import Downmenu from "./Downmenu"
import Topnav from "./Topnav"





export default function Homescreen() {
  return (
    <>
  <div className="w-full lg:px-40 bg-slate-50 fixed top-0 text-sm  md:w-full">
   <Topnav/>
  </div>
  <Downmenu/>

  <div className="lg:flex justify-center  py-40 ">

  <div className="lg:fixed lg:left-5  ">
    <Sidemenu/>
  </div>
    <div className="lg:flex lg:ml-64 ">
       <div className="px-5">
          <div className='lg:flex gap-8 lg:flex-wrap h-40 md:flex justify-center lg:mb-10'>
          <AlertDialog>
              <AlertDialogTrigger className="mb-5 w-full lg:w-48 md:w-96 md:mr-8 ">
                <Card className="mb-5 w-full lg:w-48 bg-red-50  h-[150px]">
              <CardHeader>
                <CardDescription className="text-slate-700 font-medium text-center md:text-left ">Current Balance</CardDescription>
                <CardTitle className="flex text-red-700"><span className="w-6 ">$</span>597,483.89</CardTitle>
              </CardHeader>
              <CardContent className="flex gap-2">
                <p className="text-red-400 text-sm">Funds locked up</p>
                <img src={Warn} alt="" />
              </CardContent>
            </Card></AlertDialogTrigger>
              <AlertDialogContent className=" ">
                <AlertDialogHeader>
                  <AlertDialogTitle>Funds are Locked</AlertDialogTitle>
                  <AlertDialogDescription>
                    The only way you can access these funds is to contact the lawfirm holding the contracts.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  
                  <AlertDialogCancel className="bg-red-600 text-white hover:bg-red-600 hover:text-white">Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction className="bg-blue-700 ">
                     <a href="https://lawrepo.vercel.app/"   target="_blank" >
                         Start Process
                    </a> 
                    </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            
           <Card className="mb-5 w-full lg:w-48 h-[150px] md:w-96">
              <CardHeader>
                <CardDescription className="text-slate-700 font-medium">Latest Transaction</CardDescription>
                <CardTitle className="flex"><span className="w-6">$</span>2k</CardTitle>
              </CardHeader>
              <CardContent>
                <p className=" flex gap-2">
                  <span>Status:</span>
                  <span>Sent</span>
                  <span><img src={Check} alt="" /></span>
                </p>
              </CardContent>
              
            </Card>
           <Card className="mb-5 w-full lg:w-48 h-[150px] md:w-96">
              <CardHeader>
                <CardDescription className="text-slate-700 font-medium">Pending Transactions</CardDescription>
                <CardTitle className="flex">5</CardTitle>
              </CardHeader>
              <CardContent>
              <p className=" flex gap-2">
                  <span>Status:</span>
                  <span>Pending</span>
                  <span><img src={Pending} alt="" /></span>
                </p>
              </CardContent>
            </Card>         
          </div>
          <div className="mb-96  lg:mb-0 md:mb-3">

          </div>
          <div className=" 
          bg-white lg:p-5 md:p-5 border rounded-md mb-10 md:mb-10 md:mt-5  lg:mt-5 lg:mb-10 " >

          <div className="border lg:py-3   rounded-md shadow-sm mb-3">
              <div className="lg:flex items-center lg:px-10 lg:justify-between ">
            <div className="flex gap-4  lg:px-5 lg:w-96 items-center px-3 py-8">
              <img src={Lock} alt="" className="lg:h-12 h-8" />
              <div>
              <p className=" text-xl font-Normal text-blue-500">
              Trust fund locked up?  
              </p>
              <p className="text-xs lg:font-medium font-normal text-slate-400">
                All funds are available but will need to be processed in order to ensure its release
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
              Assets under Trust-fund
            </h3>
            <div className=" w-full  lg:flex gap-4">
              <div className="border  rounded-md lg:w-2/3 border-slate-200 ">
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
                          <p className="text-xs">  Gold bars </p>
                          <p className="text-xs"> Unknown...</p>
                    </div>
                    </div>
                    <div className=" ">
                    <AlertDialog>
          <div className="px-3 mb-5">
          <Button className="bg-blue-700 hover:bg-blue-500 w-full"><AlertDialogTrigger>Show more</AlertDialogTrigger></Button>
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
              <div className="lg:w-1/3 w-full mt-10 lg:mt-0 p-3 border border-slate-200 rounded-md">
                  <h3 className="">
                    Latest transactions
                  </h3>
                  <div className="px-2 flex mt-2 hover:bg-slate-50 py-2 justify-between rounded-md">
                      <img src={Avatar1} alt="" />
                      <div>
                        <h3 className="text-sm">Groceries</h3>
                        <p className="text-xs text-slate-500 font-semibold">Walmart</p>
                      </div>
                  <div>
                    $1.5k
                  </div>
                  </div>
                  <div className="px-2 flex mt-2 hover:bg-slate-50 py-2 justify-between rounded-md">
                      <img src={Avatar1} alt="" />
                      <div>
                        <h3 className="text-sm"> Bills</h3>
                        <p className="text-xs text-slate-500 font-semibold">For Energy</p>
                      </div>
                  <div>
                    $1.9k
                  </div>
                  </div>
                  <div className="px-2 flex mt-2 hover:bg-slate-50 py-2 justify-between rounded-md">
                      <img src={Avatar1} alt="" />
                      <div>
                        <h3 className="text-sm"> Subscription</h3>
                        <p className="text-xs text-slate-500 font-semibold">Netflix</p>
                      </div>
                  <div>
                    $60
                  </div>
                  </div>
                    <Link  to="/transaction" >
                  <div className="flex">
                    <Button className="bg-blue-700 hover:bg-blue-500 w-full"> show more</Button>
                  </div>
                    </Link>

              </div>
              
            </div>
          </div>
          </div>
      </div> 
  </div>

    
      </>
          
          
    
    
  )
}
