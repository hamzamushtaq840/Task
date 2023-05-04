import graph from './assets/graph.png'
import logo from './assets/logo.svg'
import user from './assets/user.webp'
import SingleUser from './components/singleUser'

function App() {

  const users = [
    {
      id: '09219812',
      name: 'John Doe',
      level: 'Gold Level',
      visitsCompleted: '27',
      lastVisit: '2 weeks',
      rating: '2'
    },
    {
      id: '09219812',
      name: 'John Doe',
      level: 'Gold Level',
      visitsCompleted: '27',
      lastVisit: '2 weeks',
      rating: '2'
    },
    {
      id: '09219812',
      name: 'John Doe',
      level: 'Gold Level',
      visitsCompleted: '27',
      lastVisit: '2 weeks',
      rating: '2'
    },
    {
      id: '09219812',
      name: 'John Doe',
      level: 'Gold Level',
      visitsCompleted: '27',
      lastVisit: '2 weeks',
      rating: '2'
    },
    {
      id: '09219812',
      name: 'John Doe',
      level: 'Gold Level',
      visitsCompleted: '27',
      lastVisit: '2 weeks',
      rating: '2'
    },
    {
      id: '09219812',
      name: 'John Doe',
      level: 'Gold Level',
      visitsCompleted: '27',
      lastVisit: '2 weeks',
      rating: '2'
    },
    {
      id: '09219812',
      name: 'John Doe',
      level: 'Gold Level',
      visitsCompleted: '27',
      lastVisit: '2 weeks',
      rating: '2'
    },
    {
      id: '09219812',
      name: 'John Doe',
      level: 'Gold Level',
      visitsCompleted: '27',
      lastVisit: '2 weeks',
      rating: '2'
    },
  ]

  return (
    <div className='bg-white min-h-[100vh] flex'>
      <div className='w-[20%] fixed flex flex-col pt-[30px] items-center xsm:hidden sm:hidden'>
        <img src={logo} className='h-[100px]' alt="" />
        <div className='pt-[20px] flex flex-col items-center'>
          <img src={user} className='w-[80px] rounded-full' alt="" />
          <h1 className='mt-[20px] font-[400] tracking-[2px] font-popins'>Hamza Mushtaq</h1>
        </div>
      </div>
      <div className='flex w-[80%] xsm:w-full sm:w-full xsm:flex-col xsm:ml-0 sm:ml-0 ml-[20%] bg-[#d5d5e648]'>
        <div className='w-[50%] xsm:w-full sm:w-full px-[3%] mt-[80px] '>
          <div className='flex gap-[20px] items-center'>
            <h1 className='text-blue-500 text-[30px] font-popins font-[600]'>promoters</h1>
            <input type="text" className='rounded-full flex-1 h-[30px] text-[12px] px-[10px]' placeholder='Search parameter' />
          </div>
          <div className='flex gap-[10px] mt-[10px]'>
            <button className='w-[90px] h-[24px] rounded-full font-popins text-[0.7em]  border-[1px] border-black bg-black text-white'>New</button>
            <button className='w-[90px] h-[24px] rounded-full font-popins text-[0.7em] bg-white  text-[#1E1E21] border-[1px] hover:border-black hover:bg-black hover:text-white'>New</button>
            <button className='w-[90px] h-[24px] rounded-full font-popins text-[0.7em] bg-white  text-[#1E1E21] border-[1px] hover:border-black hover:bg-black hover:text-white'>New</button>
            <button className='w-[90px] h-[24px] rounded-full font-popins text-[0.7em] bg-white  text-[#1E1E21] border-[1px] hover:border-black hover:bg-black hover:text-white'>New</button>
          </div>
          <div className='flex flex-col gap-[20px] mt-[15px]'>
            <div className='bg-white flex flex-col gap-[5px] py-[10px] rounded-[8px] card'>
              <div className='flex justify-end gap-[5px] px-[10px]'>
                <button className='flex justify-center items-center bg-[#1aba3529] w-[120px] text-green-500 text-[10px] font-[600] rounded-full h-[23px]'>Invite promoter</button>
                <button className='flex justify-center items-center bg-[#ba1a1a29] w-[120px] text-red-500 text-[10px] font-[600] rounded-full h-[23px]'>Remove promoter</button>
                <button className='flex justify-center items-center bg-[#1a57ba29] w-[25px] text-blue-500 text-[10px] font-[600] rounded-full h-[23px]'>-</button>
              </div>
              <div className='w-[66%] py-[.5px] mt-[5px] bg-[#ccc]'></div>
              <div className='flex items-center px-[10px] justify-between'>
                <div className='flex gap-[5px] items-center'>
                  <button className='flex justify-center items-center w-[25px] text-blue-500 text-[10px] font-[600] h-[23px]'>\/\</button>
                  <p className='text-[#ccc] text-[12px]'>Best grades</p>
                </div>
                <button className='flex justify-center items-center bg-[#1a57ba29] w-[120px] text-blue-500 text-[12px] font-[600] rounded-full h-[25px]'>Inbox</button>
              </div>
              <div className='w-[66%] py-[.5px] bg-[#ccc]'></div>
              <div className='cardMain flex flex-col max-h-[400px] overflow-auto gap-[10px] px-[40px]'>
                {users.map((u, index) => {
                  return (
                    <SingleUser key={index} u={u} />
                  )
                })}
              </div>
            </div>
            <div className='bg-white flex flex-col gap-[5px] py-[10px] rounded-[8px] card'>
              <div className='flex justify-between items-center px-[20px]'>
                <h1 className='text-[13px] font-[700] opacity-[0.7] text-center'>Documentation per string</h1>
                <button className='flex justify-center items-center bg-[#67728429] w-[25px] text-blue-500 text-[10px] font-[600] rounded-[4px] h-[23px]'>-</button>
              </div>
              <div className='w-full py-[.5px] mt-[5px] bg-[#ccc]'></div>
              <div className='px-[20px] flex flex-col gap-[10px]'>
                <h1 className='text-[12px] font-[700]'>String 1</h1>
                <div className='flex gap-[10px]'>
                  <div className='bg-[#ccc] flex justify-center items-center text-[10px] px-[10px] h-[20px] rounded-[4px]'>Document 1</div>
                  <div className='bg-[#ccc] flex justify-center items-center text-[10px] px-[10px] h-[20px] rounded-[4px]'>Document 1</div>
                  <div className='bg-[#ccc] flex justify-center items-center text-[10px] px-[10px] h-[20px] rounded-[4px]'>Document 1</div>
                </div>
              </div>
              <div className='px-[20px] flex flex-col gap-[10px]'>
                <h1 className='text-[12px] mt-[20px] font-[700]'>String 2</h1>
                <div className='flex gap-[10px]'>
                  <div className='bg-[#ccc] flex justify-center items-center text-[10px] px-[10px] h-[20px] rounded-[4px]'>Document 1</div>
                  <div className='bg-[#ccc] flex justify-center items-center text-[10px] px-[10px] h-[20px] rounded-[4px]'>Document 1</div>
                  <div className='bg-[#ccc] flex justify-center items-center text-[10px] px-[10px] h-[20px] rounded-[4px]'>Document 1</div>
                </div>
              </div>
              <div className='px-[20px] flex flex-col gap-[10px]'>
                <h1 className='text-[12px] mt-[20px] font-[700]'>String 3</h1>
                <div className='flex gap-[10px]'>
                  <div className='bg-[#ccc] flex justify-center items-center text-[10px] px-[10px] h-[20px] rounded-[4px]'>Document 1</div>
                  <div className='bg-[#ccc] flex justify-center items-center text-[10px] px-[10px] h-[20px] rounded-[4px]'>Document 1</div>
                  <div className='bg-[#ccc] flex justify-center items-center text-[10px] px-[10px] h-[20px] rounded-[4px]'>Document 1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[50%] xsm:w-full sm:w-full xsm:px-[15px] sm:px-[15px] xsm:mt-[30px] sm:mt-[30px] flex flex-col gap-[20px] mt-[80px]'>
          <div className='w-[230px] xsm:w-full sm:w-full rounded-[8px] card bg-white pb-[20px]'>
            <h1 className='text-[14px] font-[700] opacity-[0.7] text-center py-[5px]'>Best time on visit</h1>
            <div className='w-full py-[.5px] mt-[5px] bg-[#ccc]'></div>
            <div className='flex gap-[10px] my-[20px] justify-center items-center'>
              <img src={user} className='w-[50px] rounded-full' alt="" />
              <div className='flex flex-col gap-[5px]'>
                <p className='text-[12px]'>Lorem ipsum dolor sit </p>
                <p className='text-green-500 font-[700]'>35 min</p>
              </div>
            </div>
            <div className='w-full py-[.5px] mt-[5px] bg-[#ccc]'></div>
            <h1 className='text-[14px] font-[700] opacity-[0.7] text-center py-[5px]'>Longer visit time</h1>
            <div className='flex gap-[10px] justify-center items-center my-[10px]'>
              <img src={user} className='w-[50px] rounded-full' alt="" />
              <div className='flex flex-col gap-[5px] '>
                <p className='text-[12px]'>Lorem ipsum dolor sit </p>
                <p className='text-red-500 font-[700]'>1hr 35min</p>
              </div>
            </div>
          </div>
          <div className='w-[230px] xsm:w-full sm:w-full xsm:px-[15px] sm:px-[15px] rounded-[8px] card bg-white pb-[20px]'>
            <h1 className='text-[14px] font-[700] opacity-[0.7] text-center py-[5px]'>Absences</h1>
            <div className='w-full py-[.5px] mt-[5px] bg-[#ccc]'></div>
            <div className='flex gap-[10px] mt-[20px] justify-center items-center'>
              <img src={graph} className='w-[90%]' alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
