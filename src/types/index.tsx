export interface Item {
  description:string,
  price:number
}


export interface IMainProps{
  items:Array<Item>
}

export interface IAppState {
  items:Array<Item>
}