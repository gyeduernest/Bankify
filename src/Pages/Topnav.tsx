import logo from '../assets/Primarylogo.svg'
import Notification from '../assets/Alert.svg'
import Person from '../assets/Person.svg'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import Signout from './Signout'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import close from '../assets/Close.svg'


export default function Topnav() {
    


  return (
    <div className='w-full py-5 px-5'>
          <main>
            <nav className='flex items-center justify-between'>
              <Link  to="/homescreen"   >
              <div>
                <img src={logo} alt="" className='lg:h-20 h-12  lg:block' />
              </div>              
              </Link>
              <ul className='flex gap-3'>

                              <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button variant={"outline"}  className='flex' size={"icon"} >
                  <img src={Notification} alt="" />
               </Button></DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem className='flex justify-between font-bold'>My Notifications   <img src={close} alt="" /> </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>                   
                    <Alert>
                      <AlertTitle>Nothing to show</AlertTitle>
                      <AlertDescription className='text-xs'>
                        You have no notifications or alerts yet
                      </AlertDescription>
                  </Alert>

                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>


                



                <Button className=''  variant={"outline"} >
                  <img src={Person} alt="" />
                  <p className='text-xs hidden sm:hidden md:hidden lg:block'>Mary Jones</p>
               </Button>
                <Signout/>
              </ul>
            </nav>
          </main>
    </div>
  )
}
