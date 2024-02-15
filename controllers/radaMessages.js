import { validateMessage } from '../schemas/radaMessages'

export class RadaMessageController {
  constructor ({ radaMessageModel }) {
    this.radaMessageModel = radaMessageModel
  }
}
