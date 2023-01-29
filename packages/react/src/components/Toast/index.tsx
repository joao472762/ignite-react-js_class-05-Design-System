import { X } from "phosphor-react";
import { useState} from "react";

import { 
  ToastRoot,  
  ToastClose, 
  ToastTitle, 
  ToastContent,
  ToastProvider, 
  ToastViewport, 
  ToastDescription, 
} from "./styles";
import { CalendarButton } from "../CalendarButton";

export interface ToastProps{
  title: string;
  description: string;
  day: string,


}
export function Toast({title,description, day}: ToastProps){
  const [toastIsVisible, setToastIsVisible]  = useState(false)
  
  function handleChangeToastVisibility(isVisible:boolean){
    setToastIsVisible(isVisible)
  }

  return (
    <ToastProvider swipeDirection="right" duration={4000}>
      <CalendarButton  onClick={() => handleChangeToastVisibility(true)}>
        {day}
      </CalendarButton>
      <ToastRoot open={toastIsVisible} onOpenChange={handleChangeToastVisibility}>
        <ToastContent>
          <ToastTitle>
            {title}
          </ToastTitle>
          <ToastDescription>
            {description}
          </ToastDescription>

        </ToastContent>
        <ToastClose onClick={() => handleChangeToastVisibility(false)} asChild >
          <X size={20}/>
        </ToastClose>
      </ToastRoot>
      <ToastViewport/>
    
    </ToastProvider>
  )
}