import imagem from '../../assets/imageLogin.svg'
import { Link } from 'react-router-dom'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'

export default function LoginPage() {
    return(
        <section className='w-auto h-auto min bg-pink-100'>
            <div className='mx-auto max-w-[1400px] h-screen min-h-[500px] flex justify-around items-center'>
                <img className='w-[28%] max-md:hidden' src={imagem} alt="imagem de login"/> 
                <form className='w-[300px] h-[400px] py-5 px-2 bg-[#EEF1FF] flex flex-col items-center justify-around rounded-lg'>
                <h3 className='text-4xl font-thin text-pink-100 my-2'>Login</h3>
                        <div className='flex flex-col items-center justify-center h-screen gap-3'>
                        <div className='flex flex-col'>
                            <Input className='input' placeholder='Digite seu email' type='email' />
                        </div>
                        <div className='flex flex-col'>
                            <Input className='input text-pink-100' placeholder='Digite sua senha' type='password'/>
                        </div>
                        <div>
                            <Input className='mx-1' type='checkbox'/>
                            <label className='text-sm text-gray-700'>lembre-se de mim</label>
                        </div>
                        <Button className='my-1 rounded hover:bg-pink-200 duration-700 bg-pink-100 py-2 px-12 text-white' text='Entrar'/>
                        <strong className='font-thin text-xs'>Não possui uma conta? <Link to='/cadastro' className='text-blue-500 underline'>Cadastrar-se</Link></strong>
                    </div> 
                </form>
            </div>
        </section>
    )
}