import Home from '../assets/Home.svg'
import Process from '../assets/Processdocuments.svg'
import Moneylight from '../assets/Moneylight.svg'
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
                      <Button className='hover:bg-white gap-4 mb-5  w-56 '  variant={"outline"} size={"lg"}>
                        <img src={Process} alt="" /> 
                        <p className='text-blue-600'>Trust Fund</p></Button>
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
                      <Button className='gap-4 mb-5  w-56  '  variant={"outline"} size={"lg"}>
                        <img src={Person} alt="" /> 
                        <p className='text-blue-700'>Account</p></Button>
                      </div>  
                      </Link>
                      <Link    to="/pending" >
                      
                      <div>
                      <Button className='gap-4 mb-5  w-56 bg-blue-700'  variant={"outline"} size={"lg"}>
                        <img src={Moneylight} alt="" /> 
                        <p className='text-white'>Pending Bills</p></Button>
                      </div>  
                      </Link>    
                      
                </ul>
              </nav>

    </div>
  )
}
