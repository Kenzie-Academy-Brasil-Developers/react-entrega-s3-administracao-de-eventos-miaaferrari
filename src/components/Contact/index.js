import { Button } from '../Button/index';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { Container } from './style';
 
export const ContactComponent = () => {

    const schema = yup.object().shape({
        name: yup.string().required('Required entry'),
        email: yup.string().email('Invalid E-mail').required('Required entry'),
        phone: yup.string().required('Required entry'),
        subject: yup.string().required('Required entry'),
        message: yup.string().required('Required entry'),

    })

    const { 
        register, 
        handleSubmit, 
        formState: {errors} 
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmitFunction = (data) => {
        console.log(data)
        toast.success('Message sent!');
    }

    return (
        <Container>
            <h1>Contact</h1>
            <h3>Do you want know more? Please, send us a message (:</h3>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
                <label for='name'>Name</label>
                <input 
                    type='text' 
                    name='name' 
                    {...register('name')} 
                    error={errors.name?.message}/>

                <label for='email'>E-mail</label>
                <input 
                    type='email' 
                    name='email'
                    {...register('email')} 
                    error={errors.email?.message}/>

                <label for='phone'>Phone</label>
                <input 
                    type='text' 
                    name='phone'
                    {...register('phone')} 
                    error={errors.phone?.message}/>

                <label for='subject'>Subject</label>
                <input 
                    type='text' 
                    name='subject'
                    {...register('subject')} 
                    error={errors.subject?.message}/>

                <label for='message'>Message</label>
                <input 
                    type='text' 
                    name='message'
                    {...register('message')} 
                    error={errors.message?.message}/>
                <Button type='submit'>Send</Button>
            </form>
        </Container>
    )
}