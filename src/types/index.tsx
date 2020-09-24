export enum status {
  DELETED,
  ACTIVE
}

export interface Item {
  id:string
  description:string,
  price:number,
  active:boolean,
  status?: status.DELETED | status.ACTIVE,
}

export interface CardItemProps extends Item {

}

export interface ItemStatus {
  status:status,
  index:number
}

//**Application State */
export interface IAppState {
  items:Array<Item>,
  selectState:IChangeGroup
}



//**Components Props */
export interface IMainProps{
  items:Array<Item>
}


export interface IButtonProps {
  active:boolean,
  onClick:(event: React.MouseEvent<HTMLSpanElement, MouseEvent>)=>void
}



export interface ButtonProps {
  activeButtonProps:IButtonProps,
  buyingButtonProps:IButtonProps,
  deletedButtonProps:IButtonProps
}


export interface IButtonGroupProps {
  active?: boolean,
  items?:Array<Item> ,
  buttonProps?:ButtonProps
}
export interface IButtonGroupContainerProps {
  items?:Array<Item>,
  changeSelection:any
}






export interface IChangeGroup {
  filterBy:ButtonGroupSelection
}



export enum ButtonGroupSelection {
  all,
  active,
  deleted
}