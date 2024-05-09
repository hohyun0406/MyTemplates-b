import Link from "next/link"
import { useRouter } from "next/navigation"

interface IMoveButton{
    text: string,
    path: string,

}

export default function MoveButton({text, path}:IMoveButton) {
<<<<<<< HEAD
    const router = useRouter()
    return(<>
    <Link href={path}>
    <button 
    onClick={()=> router.push(path)}
=======
    // const router = useRouter()
    return(<>
    <Link href={path}>
    <button 
    // onClick={()=> router.push(path)}
>>>>>>> 794b7870939c364c52a333f1ac5d91712c8641c0
    className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
{text}
</span>
</button>
</Link>
    </>)
}