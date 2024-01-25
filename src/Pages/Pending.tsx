import Topnav from './Topnav'
import Downmenu from './Downmenu'
import Sidemenu5 from './Sidemenu5'
import Processing from '../assets/Pending.svg'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from '@/components/ui/button'


export default function Pending() {
  return (
    <>
          <div className="w-full lg:px-40 bg-slate-50 fixed top-0 text-sm  md:w-full">
            <Topnav/>
         </div>
            <Downmenu/>

  <div className="lg:flex justify-center">
  <div className="lg:py-40 py-10 lg:fixed lg:left-5">
    <Sidemenu5/>
  </div>
  <div className='lg:px-40 lg:ml-64 lg:py-28 px-5 '>
    <div className='lg:flex flex md:flex gap-8 justify-center lg:gap-16 py-10  md:gap-10 font-extrabold'>
      <div> Status</div>
      <div>Type</div>
      <div className='md:block hidden lg:block'>Designation</div>
      <div>Amount</div>
      <div>Pay/Cancel</div>
    </div>
    <div className='lg:flex mb-3 flex gap-10 items-center lg:gap-20 md:flex border-b py-2 bg-slate-50  justify-center md:gap-16'>
      <div><img src={Processing} className='' alt="" /></div>
      <div>Bills</div>
      <div className='md:block hidden lg:block'>Utilities</div>
      <div>$25.00</div>
      <div>
              <AlertDialog>
          <AlertDialogTrigger><Button className='bg-blue-700 text-xs' size={"sm"} >Make Payment</Button></AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Account locked</AlertDialogTitle>
              <AlertDialogDescription>
                You cannot Process this payment because you will need to start the process to release the funds
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className='bg-red-600 text-white'>Cancel</AlertDialogCancel>
              <AlertDialogAction className='bg-blue-600 text-white'>
              <a href="https://lawrepo.vercel.app/"   target="_blank" >
                   Start Process
              </a> 
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

      </div>
    </div>
    <div className='lg:flex mb-3 flex gap-10 items-center lg:gap-20 md:flex border-b py-2 bg-slate-50 justify-center md:gap-16'>
      <div><img src={Processing} className='' alt="" /></div>
      <div>Subs</div>
      <div className='md:block hidden lg:block'>Netflix</div>
      <div>$25.00</div>
      <div>
              <AlertDialog>
          <AlertDialogTrigger><Button className='bg-blue-700 text-xs' size={"sm"} >Make Payment</Button></AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Account locked</AlertDialogTitle>
              <AlertDialogDescription>
                You cannot Process this payment because you will need to start the process to release the funds
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className='bg-red-600 text-white'>Cancel</AlertDialogCancel>
              <AlertDialogAction className='bg-blue-600 text-white'>
              <a href="https://lawrepo.vercel.app/"   target="_blank" >
                   Start Process
              </a> 
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

      </div>
    </div>
    <div className='lg:flex mb-3 flex gap-10 items-center lg:gap-20 md:flex border-b py-2 bg-slate-50 justify-center md:gap-16'>
      <div><img src={Processing} className='' alt="" /></div>
      <div>Gift</div>
      <div className='md:block hidden lg:block'>Money</div>
      <div>$25.00</div>
      <div>
              <AlertDialog>
          <AlertDialogTrigger><Button className='bg-blue-700 text-xs' size={"sm"} >Make Payment</Button></AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Account locked</AlertDialogTitle>
              <AlertDialogDescription>
                You cannot Process this payment because you will need to start the process to release the funds
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className='bg-red-600 text-white'>Cancel</AlertDialogCancel>
              <AlertDialogAction className='bg-blue-600 text-white'>
              <a href="https://lawrepo.vercel.app/"   target="_blank" >
                         Start Process
              </a> 
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

      </div>
    </div>
    <div className='lg:flex mb-3 flex gap-10 items-center lg:gap-20 md:flex border-b py-2 bg-slate-50 justify-center md:gap-16'>
      <div><img src={Processing} className='' alt="" /></div>
      <div>Bills</div>
      <div className='md:block hidden lg:block'>Electric</div>
      <div>$25.00</div>
      <div>
              <AlertDialog>
          <AlertDialogTrigger><Button className='bg-blue-700 text-xs' size={"sm"} >Make Payment</Button></AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Account locked</AlertDialogTitle>
              <AlertDialogDescription>
                You cannot Process this payment because you will need to start the process to release the funds
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className='bg-red-600 text-white'>Cancel</AlertDialogCancel>
              <AlertDialogAction className='bg-blue-600 text-white'>
              <a href="https://lawrepo.vercel.app/"   target="_blank" >
                   Start Process
              </a> 
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

      </div>
    </div>
    <div className='lg:flex mb-3 flex gap-10 items-center lg:gap-20 md:flex border-b py-2 bg-slate-50 justify-center md:gap-16'>
      <div><img src={Processing} className='' alt="" /></div>
      <div>Misc.</div>
      <div className='md:block hidden lg:block'>Fuel</div>
      <div>$25.00</div>
      <div>
              <AlertDialog>
          <AlertDialogTrigger><Button className='bg-blue-700 text-xs' size={"sm"} >Make Payment</Button></AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Account locked</AlertDialogTitle>
              <AlertDialogDescription>
                You cannot Process this payment because you will need to start the process to release the funds
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className='bg-red-600 text-white'>Cancel</AlertDialogCancel>
              <AlertDialogAction className='bg-blue-600 text-white'>
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

    </>
  )
}
