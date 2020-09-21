export interface Item {
  description:string,
  price:number
}

//**Application State */
export interface IAppState {
  items:Array<Item>
}



//**Components Props */
export interface IMainProps{
  items:Array<Item>
}

export interface IButtonGroupProps {
  active?: boolean,
  items?:Array<Item> ,
  buttonProps?:ButtonProps
}



export interface IButtonProps {
  active:boolean,
  onClick:()=>void
}

export interface ButtonProps {
  activeButtonProps:IButtonProps,
  buyingButtonProps:IButtonProps,
  deletedButtonProps:IButtonProps
}