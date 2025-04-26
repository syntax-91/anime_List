import { observer } from "mobx-react-lite"
import React from "react"
import { useNavigate } from "react-router-dom"
import icon_menu from "./../../../assets/icon_menu.png"


type MenuProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Menu = observer(({ isOpen, setIsOpen }: MenuProps) => {
  const nav = useNavigate();

  return (
    <div className='cursor-pointer'>
      <div onClick={() => setIsOpen(true)} >
        <img src={icon_menu} alt="ERROR" />
      </div>

      {isOpen && (
        <div className='fixed left-0 w-[100vw] h-[100vh]
         z-0'
        onClick={() => setIsOpen(false) }>
        <div onClick={() => setIsOpen(false)} 
        className='fixed right-8  w-[200px]
        py-[10px] rounded-2xl cursor-pointer fn_sl'>
          
          {/* options */}

        {/* profile */}
          <div onClick={() => nav("/settings/profile")}
           className="w-[100%] mx-auto 
            h-[40px] rounded-t-2xl
             elm	flex justify-center items-center ">
            
            <h3
              className="text-[18px] "
            >
              Profile
            </h3>
          </div>

          {/* settings */}

          <div onClick={() => nav("/settings")}
           className="w-[100%] mx-auto  h-[40px]   elm	flex justify-center items-center">
            <h3 className="text-[18px] ">
              Settings
            </h3>
          </div>

          {/* likes */}

          <div onClick={() => nav("/like")}
           className="w-[100%] mx-auto  h-[40px]  elm	flex justify-center items-center">
            <h3 className="text-[18px] ">
              Like
            </h3>
          </div>

          {/* About */}

          <div onClick={() => nav("/about")} className="w-[100%] mx-auto h-[40px] elm	flex justify-center items-center">
            <h3 className="text-[18px] ">
              About
            </h3>
          </div>

          {/* back */}

          <div className="w-[100%] mx-auto h-[40px]  elm	flex justify-center items-center
          rounded-b-2xl">
            <h3 className="text-[18px] ">back</h3>
          </div>

          <div></div>
        </div></div>
      )}
    </div>
  );
});
