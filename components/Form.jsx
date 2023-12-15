import Button from '@/components/Button'

export default function Form() {
  return (
    <div className='mt-28 w-1/2'>
        <input 
            type="text" 
            placeholder="Enter task here" 
            required
            className='p-2 rounded-lg w-3/4'
        />
        <Button />
    </div>
  )
}
