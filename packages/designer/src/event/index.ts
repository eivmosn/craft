import { deepClone, useUniqueId } from "@codepan/utils";

export function onDragClone(node: any) {
    let widget = deepClone(node)
    return {
        field: "",
        type: widget.type,
        label: widget.label,
        id: widget.id || useUniqueId(),
    }
}

export function onDragEnd(node: any) {
    console.log(node);
}