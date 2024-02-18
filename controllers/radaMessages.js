import { validateMessage } from '../schemas/radaMessages'

export class RadaMessageController {
  constructor ({ radaMessageModel }) {
    this.radaMessageModel = radaMessageModel
  }

  getAll = async (req, res) => {
    const messages = await this.radaMessageModel.getAll()
    res.json(messages)
  }

  create = async (req, res) => {
    const result = validateMessage(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const newMessage = await this.radaMessageModel.create({ input: result.data })

    res.status(201).json(newMessage)
  }

  delete = async (req, res) => {
    const { id } = req.params
    const result = await this.radaMessageModel.delete({ id })

    if (result === false) {
      return res.status(404).json({ error: 'Message not found' })
    }

    return res.json({ message: 'Message deleted' })
  }
}
