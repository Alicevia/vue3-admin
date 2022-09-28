import { BaseService } from '@/utils/service'

class EventService extends BaseService {
  getEventInfo () {
    this.get<boolean>(this.setUrl('/info.json'), null, { immediate: true })
  }
}
const eventService = new EventService('/event')
export { eventService }
