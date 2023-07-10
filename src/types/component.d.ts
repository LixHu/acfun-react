declare namespace NComponent {

  declare interface ILayoutMenu {
    path: string
    title: string
    sort: number
  }

  declare interface ILayoutData {
    title?: string
    menuList: ILayoutMenu[]
  }

  declare interface IMateData {
    title?: string
  }
}