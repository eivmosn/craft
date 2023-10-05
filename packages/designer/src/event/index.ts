import { deepClone, useUniqueId } from "@codepan/utils";
import { computed, ref } from "vue";

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

export function useDesigner() {
    const schema = ref([])
    const widgetMaps = computed(() => {
        return schema.value
    })
    return {
        schema,
        widgetMaps
    }
}