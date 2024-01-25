
import Topnav from './Topnav'
import Downmenu from './Downmenu'
import Sidemenu4 from './Sidemenu4'
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
import lock from '../assets/Lock.svg'


export default function Account() {
  return (
    <>
          <div className="w-full lg:px-40 bg-slate-50 fixed top-0 text-sm  md:w-full">
            <Topnav/>
         </div>
            <Downmenu/>

  <div className="lg:flex justify-center">
  <div className="lg:py-40 lg:fixed left-5 py-16 ">
    <Sidemenu4/>
  </div>
    <div className="  lg:py-40 lg:px-16 lg:grid lg:grid-cols-2 lg:gap-8 lg:ml-64 px-16 md:px-72">
      <div>
          <div>
            Full name
          </div>
              <AlertDialog>
            <AlertDialogTrigger  className=' items-center px-16 rounded-md border text-slate-300 py-2 flex gap-2' >Mary Jones <img src={lock} alt="" /> </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Account locked?</AlertDialogTitle>
                <AlertDialogDescription>
                  You cannot change the name of your account
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className='bg-red-600 text-white'>Close</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
      </div>
      <div className=''>
          <div>
                  Email Address
          </div>
              <AlertDialog>
            <AlertDialogTrigger  className=' items-center px-10  rounded-md border text-slate-300 py-2  flex gap-2  text-center' >Maryjones@gmail.com <img src={lock} alt="" /> </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>You cannot change your email</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
              <AlertDialogCancel className='bg-red-600 text-white'>Close</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
      </div>
      
      <div>
          <div>
            Account number
          </div>
              <AlertDialog>
            <AlertDialogTrigger  className='items-center px-16 rounded-md border text-slate-300 py-2 flex gap-2' >46545465585 <img src={lock} alt="" /> </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Your Account number</AlertDialogTitle>
                <AlertDialogDescription>
                  This contains your account number you cannot change it
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
              <AlertDialogCancel className='bg-red-600 text-white'>Close</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
      </div>
      <div className=''>
          <div>
            Name of bank
          </div>
              <AlertDialog>
            <AlertDialogTrigger  className=' items-center px-20 rounded-md border text-slate-300 py-2 flex gap-2' >Bancorp <img src={lock} alt="" /> </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Bank name?</AlertDialogTitle>
                <AlertDialogDescription>
                  This is the name of the bank that has your trust fund
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
              <AlertDialogCancel className='bg-red-600 text-white'>Close</AlertDialogCancel>                
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
      </div>
      <div className=''>
          <div>
                  Telephone number
          </div>
              <AlertDialog>
            <AlertDialogTrigger  className=' items-center px-20  rounded-md border text-slate-300 py-2  flex gap-2  text-center' >+1........... <img src={lock} alt="" /> </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Your Phone number</AlertDialogTitle>
                <AlertDialogDescription>
                          You cannot change your phone number because it was used as a primary contact to create your account
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
      </div>
     
      <div className=' mb-20'>
          <div>
                  Trust fund Contract holders
          </div>
              <AlertDialog>
            <AlertDialogTrigger  className=' items-center px-10  rounded-md border text-slate-300 py-2  flex gap-2  text-center' >Stevens and Leeto <img src={lock} alt="" /> </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
              <AlertDialogCancel className='bg-red-600 text-white'>Close</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
      </div>
      
      <div className='h-12'>

      </div>
    </div>
  </div>

    </>
  )
}
