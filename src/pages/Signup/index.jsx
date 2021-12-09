import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory, Redirect, Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Container, Section, Header, Form } from './styles'
import logo from '../../assets/logoSemSlogan-removebg-preview.png';

import { api } from '../../services/api.js';

/*


*/

const SignUp = () => {
    const history = useHistory();

        const schema = yup.object().shape({
            username: yup.string().required('Campo obrigatório'),
            email: yup
                .string()
                .email('Email inválido')
                .required('Campo obrigatório'),
            password: yup
                .string()
                .required('Campo obrigatório')
                .min(6, 'A senha deve conter pelo menos 6 caracteres'),
            confirm_password: yup
                .string()
                .required('Campo obrigatório')
                .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais'),
        })

        const { register, 
                handleSubmit, 
                formState:{ errors }, 
            } = useForm({
                resolver: yupResolver(schema)
            });


        const handleRegisterSubmit = data =>{ 
            
            delete data.confirm_password;

            api
                .post('/users', data)
                .then((response) => {
                    toast.success('Yeah! Cadastro realizado com sucesso!')
                    console.log(response)
                    return history.push('/');
                })
                .catch((err) =>
                    toast.error('Usuário já cadastrado, dirija-se à página de login!'))
        }

        return (
            <Container>
            <Header>
                <img src={logo} alt='' />
            </Header>
            <Section>
                <h1>Signup</h1>
                <Form onSubmit={handleSubmit(handleRegisterSubmit)}>
                <h2>Name:</h2>
                <input
                className='input'
                placeholder="Name"
                {...register("username")}
                />
                <p className='error-message'>{errors.username?.message}</p>                
                <h2>Email:</h2>
                <input
                className='input'
                placeholder="Email"
                {...register("email")}
                />
                <p className='error-message'>{errors.email?.message}</p>   
                <h2>Password:</h2>
                <input
                className='input'
                type='password'
                placeholder="Password"
                {...register("password")}
                />
                <p className='error-message'>{errors.password?.message}</p>
                <h2>Confirm password:</h2>
                <input
                className='input'
                type='password'
                placeholder="Confirm password"
                {...register("confirm_password")}
                />   
                <p className='error-message'>{errors.confirm_password?.message}</p>
                </Form>
                <button type='submit'>Sign Up</button>

                <p className='message'>
                If you have already registered, login <Link to='/'>here</Link>!
                </p>
            </Section>
            </Container>
        )
}

export default SignUp;