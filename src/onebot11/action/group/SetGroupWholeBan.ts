import BaseAction from '../BaseAction'
import { ActionName } from '../types'
import { NTQQGroupApi } from '../../../ntqqapi/api/group'

interface Payload {
  group_id: number
  enable: boolean
}

export default class SetGroupWholeBan extends BaseAction<Payload, null> {
  actionName = ActionName.SetGroupWholeBan

  protected async _handle(payload: Payload): Promise<null> {
    const enable = payload.enable.toString() === 'true'
    await NTQQGroupApi.banGroup(payload.group_id.toString(), enable)
    return null
  }
}
