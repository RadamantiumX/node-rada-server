import z from 'zod'

const messageSchema = z.objectUtil({
  email: z.string().email({ message: 'Invalid email address' }),
  name: z.string().min(5, { message: 'Must be 5 or more characters' }),
  message: z.string().min(10, { message: 'Must be 10 or more characters' })
})

export function validateMessage (input) {
  return messageSchema.safeParse(input)
}
