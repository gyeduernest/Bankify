import Home from '../assets/Home.svg'
import Trustlight from '../assets/Trustlight.svg'
import Money from '../assets/Money.svg'
import Send from '../assets/Send.svg'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import Person from '../assets/Person.svg'



export default function Sidemenu() {
  return (
    <div className='hidden sm:hidden md:hidden lg:block  lg:px-20  '>
              <nav className=''>
                <ul>
                    <Link to="/homescreen">
                      <div>
                      <Button className='gap-4 mb-5  w-56 hover:bg-white '  variant={"outline"} size={"lg"}>
                        <img src={Home} alt="" /> 
                        <p className='text-blue-600'>Home</p></Button>
                      </div>
                    </Link>

                    <Link to="/trustfund">
                    
                      <div>
                      <Button className='bg-blue-700 gap-4 mb-5  w-56 ' size={"lg"}>
                        <img src={Trustlight} alt="" /> 
                        <p className='text-white'>Trust Fund</p></Button>
                      </div>  
                    </Link>
                       <Link   to="/transaction">
                       <div>
                        <Button className='gap-4 mb-5  w-56  hover:bg-white'  variant={"outline"} size={"lg"}>
                          <img src={Send} alt="" /> 
                          <p className='text-blue-600'>Transactions</p>
                        </Button>
                        </div>  
                       </Link>
                       <Link to="/account" >
                    <div>
                      
                      <Button className='gap-4 mb-5  w-56  hover:bg-white'  variant={"outline"} size={"lg"}>
                        <img src={Person} alt="" /> 
                        <p className='text-blue-600'>Account</p></Button>
                      </div>  
                      </Link>
                      <Link    to="/pending" >
                      
                      <div>
                      <Button className='gap-4 mb-5  w-56  hover:bg-white'  variant={"outline"} size={"lg"}>
                        <img src={Money} alt="" /> 
                        <p className='text-blue-600'>Pending Bills</p></Button>
                      </div>  
                      </Link>
                      
                </ul>
              </nav>

    </div>
  )
}
