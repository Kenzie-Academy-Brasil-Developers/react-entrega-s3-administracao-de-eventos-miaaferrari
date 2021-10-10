import { CommentsBox,Container } from './style';

export const Comments = () => {

    return (
        <Container>
            <h3>Clients Comments</h3>
            <CommentsBox>
                <div>
                   
                    <p><span>Ana said: </span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div>
                   
                    <p><span>John said: </span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. (:</p>
                </div>
                <div>
                   
                    <p><span>Mia said: </span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </CommentsBox>
        </Container>
    )
}