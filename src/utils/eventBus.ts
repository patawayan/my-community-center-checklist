import mitt from 'mitt'
type EventBus = {
  listScroll: string
  listClick: MouseEvent
}
export const eventBus = mitt<EventBus>()
