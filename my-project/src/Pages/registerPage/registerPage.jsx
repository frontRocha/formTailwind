import { Link } from 'react-router-dom'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
export default function RegisterPage() {

    const submit = (e) => {
        e.preventDefault()
    }

    return(
        <section className='w-auto h-auto min bg-pink-100'>
            <div className='mx-auto max-w-[1400px] h-screen min-h-[500px] flex justify-around items-center'>
                <form className='w-[350px] h-[500px] py-5 px-2 bg-[#EEF1FF] flex flex-col items-center justify-around rounded-lg' onSubmit={submit}>
                <h3 className='text-4xl font-thin text-pink-100 my-2'>Registro</h3>
                        <div className='flex flex-col items-center justify-center h-screen gap-3'>
                        <div className='flex flex-col'>
                            <Input className='input' placeholder='Digite seu nome' type='email'/>
                        </div>
                        <div className='flex flex-col'>
                            <Input className='input' placeholder='Digite uma sobrenome' type='password'/>
                        </div>
                        <div className='flex flex-col'>
                            <Input className='input' placeholder='Digite seu email' type='email'/>
                        </div>
                        <div className='flex flex-col'>
                            <Input className='input' placeholder='Digite sua senha' type='password'/>
                        </div>
                        <Button className='my-1 rounded hover:bg-pink-200 duration-700 bg-pink-100 py-2 px-12 text-white' text='Criar conta'/>
                        <strong className='font-thin text-xs'>Já possui uma conta? <Link to='/' className='text-blue-500 underline'>Logar</Link></strong>
                    </div> 
                </form>
            </div>
        </section>
    )
}