

export interface Item {
  description:string,
  price:number
}



export interface IStore {
  items:Array<Item>
}



export interface IMainProps{
  items:Item
}

export interface IAppState {
  items:Item
}