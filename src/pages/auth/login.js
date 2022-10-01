import Layout from '@/layouts/index' 
import {  } from  '@/routes/path'

const Login = () => {
  return (
    <section className=''>
        Login
    </section>
  )
}

Login.getLayout = (page)=>(
    <Layout title='ล็อกอิน' variant='unauthenticated' >
        {page}
    </Layout>
    
)

export default Login