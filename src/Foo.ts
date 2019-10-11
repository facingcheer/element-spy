
export default class Foo{
  private bar: string

  public constructor(bar: string) {
    this.bar = bar
  }

  public sayName(): void{
    console.log(this.bar)
  }
  sayHello(): void{
    const hello: string = 'Hello TypeScript'
    const a: string = 'a'
  }

  public mount(el: HTMLElement): void{
    const p: HTMLElement = el || document.body
    const d: Element = document.createElement('div')
    d.innerHTML = `${this.bar}`
    p.appendChild(d)
  }
}




