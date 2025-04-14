import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import React from 'react'

function NewUserForm() {
    return (
        <>
            <form action="" className='flex flex-col gap-5'>
                <h1 className='font-extrabold'>User Registeration</h1>
                <Label>Your Name</Label>
                <Input type='text' name='name' />
                <Label>Your Email</Label>
                <Input type='email' name='email' />
                <Button>Submit</Button>
            </form>
        </>
    )
}

export default NewUserForm