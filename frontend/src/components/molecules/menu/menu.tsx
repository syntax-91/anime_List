import { motion } from 'framer-motion'
import { observer } from "mobx-react-lite"
import React from "react"
import { useNavigate } from "react-router-dom"
import { logOut } from '../../../lib/LogOut'
import { authUser } from '../../../shared/store/authStore'
import icon_menu from "./../../../assets/icon_menu.png"

type MenuProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Menu = observer(
  ({ isOpen, setIsOpen }: MenuProps) => {
  const nav = useNavigate();

  return (
    <div> 
      
      <div onClick={() => setIsOpen(true)} 
        className='cursor-pointer'>
        <img 
        className={`${isOpen ? 'deg360' : 'deg0'}`}
        src={icon_menu} alt="ERROR" />
      </div> 

      {isOpen && 
        
        /* OB */
        <motion.div
        
        initial={{ x: -40 }}
		    animate={{ x: 0 }}
        transition={{ duration: 0.1, delay: 0 }}

        onClick={()=> setIsOpen(false)}
        className='fixed right-8 elm  w-[200px]
        py-[10px] rounded-2xl cursor-pointer 
        bg-[rgba(0,0,0,0.2)]/40 z-10'>
          
          {/* options */}


         {/* Auth */}
         {!authUser.isAuth && 
          <div onClick={() => nav("/login")}
          className="w-[100%] mx-auto 
           h-[40px] rounded-t-2xl
            	flex justify-center items-center ">
           
           <h3
             className="text-[18px] "
           >
             Auth
           </h3>
         </div>}



          {/* settings */}

          <div onClick={() => nav("/settings")}
           className="w-[100%] mx-auto  h-[40px]   	flex justify-center items-center">
            <h3 className="text-[18px] ">
              Settings
            </h3>
          </div>

          {/* likes */}

          <div onClick={() => nav("/likes")}
           className="w-[100%] mx-auto  h-[40px]  flex justify-center items-center">
            <h3 className="text-[18px] ">
              Likes
            </h3>
          </div>

          {/* About */}

          <div onClick={() => nav("/about")} className="w-[100%] mx-auto h-[40px] flex justify-center items-center">
            <h3 className="text-[18px] ">
              About
            </h3>
          </div>

          {/* LogOut */}

          {authUser.isAuth && 
          <div onClick={logOut}
          className="w-[100%] mx-auto 
           h-[40px] rounded-t-2xl br10t
            	flex justify-center items-center ">
           
           <h3
             className="text-[18px] "
           >
             LogOut
           </h3>
         </div>}

          {/* back */}

          <div className="w-[100%] mx-auto h-[40px] 	flex justify-center items-center br10b">
            <h3 className="text-[18px] ">
              Back
            </h3>
          </div>
           
          <div></div>
         </motion.div>}
      </div>
      );
})