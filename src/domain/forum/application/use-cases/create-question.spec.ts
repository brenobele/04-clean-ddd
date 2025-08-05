import { QuestionsRepository } from '../repositories/questions-repository'
import { CreateQuestionUseCase } from './create-question'

const fakeQuestionsRepository: QuestionsRepository = {
  create: async (question: Question) => {},
}

test('Create a question', async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionsRepository)

  const { question } = await createQuestion.execute({
    authorId: '1',
    title: 'Nova pergunta',
    content: 'Conteúdo da nova pergunta',
  })

  expect(question.id).toBeTruthy()
  expect(question.title).toEqual('Nova pergunta')
  expect(question.content).toEqual('Conteúdo da nova pergunta')
})
