'use client'
import {usePathname} from 'next/navigation'

export default function layout({ children }) {
    const pathName = usePathname();
  return (
    <div>
        {
            pathName!=="/Aboutus/aboutstudent"?<h1>Common Layout for Aboutus Screens</h1>:null
        }
      
      {children}
    </div>
  );
}
