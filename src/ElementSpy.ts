
enum SpyType {
  default, // trigger element observer change every time
  once // only trigger once
}
interface SpyOpt {
  type: SpyType;
  callback: (el: Element, data?: any ) => any;
  data?: any;
}

export default class ElementSpy { 
  public elements: WeakMap<Element, SpyOpt>
  private observer: IntersectionObserver

  constructor(root?: Element, rootMargin: string = '0px', threshold: number = 1.0) {
    // private observer: IntersectionObserver 

    const options: {
      root?: Element;
      rootMargin: string;
      threshold: number;
    } = {root: null, rootMargin, threshold}
    this.elements = new WeakMap()
    const self: ElementSpy = this
    const callback: (entries: Array<IntersectionObserverEntry>, observer: IntersectionObserver) => void  = function(entries: Array<IntersectionObserverEntry>, observer: IntersectionObserver): void {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting && entry.target && self.elements.get(entry.target)) {
          const opt: SpyOpt = self.elements.get(entry.target) as SpyOpt
          opt.callback(entry.target, opt.data)
          if(opt.type === 1) {
            observer.unobserve(entry.target)
            self.elements.delete(entry.target)
          }
        }
      })
    }
    this.observer = new IntersectionObserver(callback, options)
  }

  observe(el: Element, callback: () => any, data?: any ): void {
    this.elements.set(el, {
      type: 0,
      callback,
      data
    })
    this.observer.observe(el)
  }

  observeOnce(el: Element, callback: () => any , data?: any): void {
    this.elements.set(el, {
      type: 1,
      callback,
      data
    })
    this.observer.observe(el)
  }

  unobserve(el: Element): void {
    this.elements.delete(el)
    this.observer.unobserve(el)
  }
} 