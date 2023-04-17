import { ReactNode } from "react"

export type bannerProps = {
    title:string
    imgUrl:string
    subTitle:string
}

export type btnProps = {
    children : ReactNode
    icon ?: ReactNode
}

export type iconProps = {
    width:number
    height:number
    color:string
}