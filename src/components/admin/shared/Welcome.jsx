import welcomeImg from '../../../assets/img/Group.svg'
import { useAuthContext } from '../../../contexts/AuthProvider'
import Extract from '../../../utils/Extract';
export default function Welcome() {
  const {auth}=useAuthContext();
  let name=''
  if(auth)
    name=Extract(auth,'unique_name')
  return (
    <div className='bg-[#E7ECFF] sm:py-12 py-8 sm:mt-5 md:mt-8 rounded-lg  relative'>
       <div className='px-4 flex items-center sm:justify-between justify-center'>
        <p className='text-[#3B82F6] font-bold text-[22px] sm:text-[24px] md:text-[26px] lg:text-3xl '>Welcome back {name.split(' ')[0]}, </p>
        <img src={welcomeImg} className='w-0 md:w-50 absolute right-0 bottom-4 sm:w-40' />
       </div>
    </div>
  )
}
