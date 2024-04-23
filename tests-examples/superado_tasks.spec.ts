import { test, expect } from '@playwright/test'
import { faker } from '@faker-js/faker'

test('Deve poder cadastrar uma nova tarefa', async({page, request}) => {


    //Dado que tenho uma nova tarefa
    const taskName = 'Ler um livro de TypeScript'
    await request.delete('http://localhost:3333/helper/tasks/' + taskName)  


    //E que estou na página de cadastro
    await page.goto('http://localhost:8080')


    //Quando faço o cadastro de uma tarefa
    const inputTaskName =  page.locator('input[class*=InputNewTask]')
    await inputTaskName.fill(taskName)

    await page.click('css=button >> text=Create')

    //Então essa terefa deve ser exibida na listas
    // const target = page.locator('css=.task-item p >> text=' + taskName)
    const target = page.locator(`css=.task-item p >> text=${taskName}`)
    await expect(target).toBeVisible

    
    ////# Usar massa de teste com a biblioteca Faker
    // await inputTaskName.fill(faker.lorem.words())

    ////# Aternativas para encontar elemento por ID, Placeholder, Classe completa e Classe com texto exato
    // await page.fill('#newTask', 'Ler um livro de TypeScript')
    // await page.fill('input[placeholder="Add a new Task"]', 'Ler um livro de TypeScript' )
    //await page.fill('._listInputNewTask_1y0mp_21', 'Ler um livro de TypeScript' )
    //await page.fill('input[class*=InputNewTask]', 'Ler um livro de TypeScript' )

    ////# Aternativa para encontrar botão pelo xpath
    // await page.click('xpath=//button[contains(text(),"Create")]')
    

    ////# Aternativa para criar a tarefa precionando Enter
    // await inputTaskName.press('Enter')

    //await expect(target).toHaveText(taskName)


    // const target = page.locator('css=.task-item p >> text=' + taskName)


})