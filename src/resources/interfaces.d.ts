export interface Links {
    name: string
    url: string
}

export interface Claims {
    id: number
    name: string
    categories: {
        name: string
        content: string
    }[]
}

export interface Props {
    claims: Claims[]
    index?: number
}