'use client'
import { Inbox } from 'lucide-react'
import {useDropzone} from 'react-dropzone'
const Fileupload = () => {
    const {getRootProps, getInputProps} = useDropzone(
        {
          accept:{"application/pdf":[".pdf"]},
          maxFiles:1,
          onDrop: (acceptedFiles) => console.log(acceptedFiles)
        }
    )

  return (
    <div className='p-2 bg-white rounded-xl'>
        <div {...getRootProps(
            {className:'border-dashed border-2 rounder-xl cursor-pointer bg-gray-50 flex flex-col jusify-center items-center py-8'}
        )}>
            <input {...getInputProps()}/>
            <Inbox className='w-10 h-10 text-blue-500'/>
            <p className='mt-2 text-slate-500 text-sm'>Drop PDF Here ...</p> 
        </div>
    </div>
  )
}

export default Fileupload