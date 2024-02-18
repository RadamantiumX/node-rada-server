import { Router } from 'express'
import { RadaMessageController } from '../controllers/radaMessages'

export const createRadaMessageRouter = ({ radaMessageModel }) => {
  const radaMessageRouter = Router()

  const radaMessageController = new RadaMessageController({ radaMessageModel })

  radaMessageRouter.get('/', radaMessageController.getAll)
  radaMessageRouter.post('/', radaMessageController.create)

  radaMessageRouter.delete('/:id', radaMessageController.delete)

  return radaMessageRouter
}
