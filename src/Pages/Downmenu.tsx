import FilledHome from '../assets/FilledHome.svg'
import LightSend from '../assets/LightSend.svg'
import Personlight from '../assets/Personlight.svg'
import Process from '../assets/Process.svg'
import Moneylight from '../assets/Moneylight.svg'
import { Link } from 'react-router-dom'

export default function Downmenu() {
  return (
    <div className='block lg:hidden '>
        <div className="p-5 fixed bottom-0 text-sm bg-slate-800 md:w-full text-white flex  shadow-xl w-full  ">
          <div className="flex gap-4  w-full justify-between ">
            <Link to="/homescreen"  >
            
            
              <div className=" justify-center items-center">
                    <img src={FilledHome} alt="" className="ml-2" />
                    <p>
                      Home
                    </p>
              </div>
            </Link>
            <Link  to="/trustfund"   >
            
            
              <div className=" justify-center items-center">
                    <img src={Process} alt="" className="ml-5" />
                    <p>
                      Trustfund
                    </p>
              </div>
             
            </Link>


            <Link to="/transaction">       
            
              <div className=" justify-center items-center">
                    <img src={LightSend} alt="" className="ml-4" />
                    <p>
                      Transact
                    </p>
              </div>
            </Link>
            <Link  to="/account" >
              <div className=" justify-center items-center ">
                    <img src={Personlight} alt="" className="ml-4" />
                    <p>
                      Account
                    </p>
              </div>
            </Link>
            <Link  to="/pending" >
              <div className=" justify-center items-center ">
                    <img src={Moneylight} alt="" className="ml-4" />
                    <p>
                      Pending
                    </p>
              </div>
            </Link>



          </div>
          </div>



    </div>
  )
}



