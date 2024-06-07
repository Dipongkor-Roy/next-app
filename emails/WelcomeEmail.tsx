import React from 'react';
import {Html,Body,Preview,Text,Container,Link,Tailwind} from "@react-email/components"
const WelcomeEmail = ({name}:{name:string}) => {
    return (
        <Html>
            <Preview>Welcome to Next App</Preview>
            <Tailwind>
            <Body>
                <Container>
                    <Text className='text-xl'>Hello {name}</Text>
                    <Link href='http://localhost:3000'>Next App</Link>
                </Container>
            </Body>
            </Tailwind>
        </Html>
    );
};

export default WelcomeEmail;