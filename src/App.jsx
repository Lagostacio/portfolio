import './App.css'

function App() {

  return (
    <>
      {/* navbar */}
      <div className=' px-4 border border-red-400 flex justify-between'>
        <div>name</div>
        <div className='flex justify-between w-1/6'>
          <div>home</div>
          <div>projects</div>
          <div>about</div>
        </div>
        <div>
          icons
        </div>
      </div>
      {/* main content */}
      <div className='border border-purple-400 h-screen flex'>

        <div className='w-1/2 h-1/2 flex flex-col justify-center pl-6'>
          <h1 className='font-bold text-6xl my-2 '>Web Developer</h1>
          <p className='text-xl w-3/5'>
            bunch of text about how i'm a good developer
            bunch of text about how i'm a good developer
          </p>
        </div>

        <div className='w-1/2 h-1/2'>
          photo of me
        </div>

      </div>
      {/* footer */}
      <div className='border border-blue-400'>
        footer
      </div>
    </>
  )
}

export default App
