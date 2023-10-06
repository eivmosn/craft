declare module 'vuedraggable' {
    import Vue, { VueConstructor, DefineComponent } from 'vue';
    const draggable: DefineComponent<{
        filter?: string
        itemKey: string
        list: unknown[]
        animation?: number
        sort?: boolean
        group?: {
            name: string
            pull?: string
            put?: boolean
        },
        handle?: string
        forceFallback?: boolean
        ghostClass?: string
        swapThreshold?: number
        fallbackClass?: string
        scrollSensitivity?: number
        forceFallback?: boolean
        fallbackOnBody?: boolean
        fallbackTolerance?: number
        fallbackClass?: string
        clone?: (node: any) => void
        onAdd?: (node: any) => void
        onStart?: (node: any) => void
    }>

    export default draggable;
}