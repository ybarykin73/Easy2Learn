'use server'

export async function createNewUser(formData) {
  const rawFormData = {
    name: formData.get('name'),
    password: formData.get('password'),
    remember: formData.get('remember')
  }

  console.log(rawFormData)
}